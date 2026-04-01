# Magnus Portfolio — Full Modernization Plan

## Manual Execution Guide with Claude Code Prompts

> **How to use this plan:**
> Each task is split into two parts:
>
> - 🖥️ **Terminal** — commands you type in the VS Code integrated terminal (inside the container)
> - 🤖 **Claude Code prompt** — text you paste into the Claude Code session
>
> Complete every task in order. Run the **Verification** step before moving on.
> If verification fails, fix it before continuing — do not skip ahead.
>
> Open the VS Code terminal with Ctrl+`
> Start a Claude Code session in the terminal with: claude

---

## Project Snapshot

- **Stack before:** React 18, CRA, JavaScript, SCSS, Bootstrap 5, react-bootstrap, particles-bg, bundled font-awesome & fontello
- **Stack after:** React 19, Vite, TypeScript, Tailwind CSS v4, tsparticles, lucide-react, Vitest
- **Working directory inside container:** `/workspaces/magnus`

---

## PHASE 0 — Preparation

### Task 0.1 — Audit current state

🖥️ **Terminal:**

```bash
node --version
npm --version
git status
cat package.json
npm outdated
npm audit
```

✅ **Verification:**

- `node --version` prints `v22.x.x`
- `git status` shows `nothing to commit, working tree clean`

📝 **Commit:** none

---

### Task 0.2 — Create migration branch

🖥️ **Terminal:**

```bash
git checkout -b modernize/full-stack-upgrade
git branch
```

✅ **Verification:** Output of `git branch` shows `* modernize/full-stack-upgrade`

📝 **Commit:** none

---

## PHASE 1 — Remove CRA, Install Vite

### Task 1.1 — Uninstall react-scripts and delete CRA artifacts

🖥️ **Terminal:**

```bash
npm uninstall react-scripts
rm src/serviceWorker.js
rm src/setupTests.js
rm src/logo.svg
```

✅ **Verification:**

```bash
grep "react-scripts" package.json   # must return nothing
ls src/serviceWorker.js             # must say "No such file or directory"
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: remove CRA (react-scripts) and its artifacts"
```

---

### Task 1.2 — Install Vite and React plugin

🖥️ **Terminal:**

```bash
npm install --save-dev vite @vitejs/plugin-react
```

✅ **Verification:**

```bash
grep "vite" package.json
grep "@vitejs/plugin-react" package.json
```

Both must appear in `devDependencies`.

📝 **Commit:**

```bash
git add -A
git commit -m "chore: install vite and @vitejs/plugin-react"
```

---

### Task 1.3 — Create vite.config.ts

🤖 **Claude Code prompt:**

```
Create a new file at the project root called vite.config.ts with this exact content:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

✅ **Verification:**

```bash
cat vite.config.ts
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: add vite.config.ts"
```

---

### Task 1.4 — Move and update index.html

🖥️ **Terminal:**

```bash
cp public/index.html ./index.html
```

🤖 **Claude Code prompt:**

```
Edit the file ./index.html at the project root (not the one in public/).
Make these changes:
1. Replace every occurrence of %PUBLIC_URL% with an empty string.
   Example: href="%PUBLIC_URL%/favicon.ico" becomes href="/favicon.ico"
2. Add this line just before the closing </body> tag:
   <script type="module" src="/src/main.tsx"></script>
3. Do not change anything else.
```

🖥️ **Terminal:**

```bash
rm public/index.html
```

✅ **Verification:**

```bash
grep "PUBLIC_URL" ./index.html        # must return nothing
grep "src/main.tsx" ./index.html      # must return the script tag
ls public/index.html                  # must say "No such file or directory"
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: move index.html to project root for Vite"
```

---

### Task 1.5 — Update package.json scripts

🤖 **Claude Code prompt:**

```
Edit package.json. Replace the entire "scripts" block with this:

"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest"
}

Do not change anything else in package.json.
```

✅ **Verification:**

```bash
grep -A 7 '"scripts"' package.json
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: update package.json scripts for vite"
```

---

## PHASE 2 — TypeScript Setup

### Task 2.1 — Install TypeScript and type packages

🖥️ **Terminal:**

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

✅ **Verification:**

```bash
grep "typescript" package.json
grep "@types/react" package.json
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: install typescript and react type declarations"
```

---

### Task 2.2 — Create tsconfig.json

🤖 **Claude Code prompt:**

```
Create a new file at the project root called tsconfig.json with this exact content:

{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Errors about .js files are expected at this stage. Errors about the tsconfig itself (e.g. "Unknown compiler option") are NOT expected — fix those before continuing.

📝 **Commit:**

```bash
git add -A
git commit -m "chore: add tsconfig.json"
```

---

## PHASE 3 — Tailwind CSS v4

### Task 3.1 — Install Tailwind CSS v4

🖥️ **Terminal:**

```bash
npm install tailwindcss @tailwindcss/vite
```

✅ **Verification:**

```bash
grep "tailwindcss" package.json
grep "@tailwindcss/vite" package.json
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: install tailwindcss v4"
```

---

### Task 3.2 — Register Tailwind in vite.config.ts

🤖 **Claude Code prompt:**

```
Replace the entire contents of vite.config.ts with this:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    port: 3000,
  },
})
```

✅ **Verification:**

```bash
cat vite.config.ts
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: register tailwindcss vite plugin"
```

---

### Task 3.3 — Create global CSS entry point

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/index.css with just this single line:

@import "tailwindcss";

Delete all existing content first. The file must contain only that one line when done.
```

✅ **Verification:**

```bash
cat src/index.css
```

Must show only `@import "tailwindcss";`

📝 **Commit:**

```bash
git add -A
git commit -m "chore: initialize tailwindcss v4 via css import"
```

---

## PHASE 4 — Remove Bloat Dependencies

### Task 4.1 — Uninstall Bootstrap and react-bootstrap

🖥️ **Terminal:**

```bash
npm uninstall bootstrap react-bootstrap
```

✅ **Verification:**

```bash
grep "bootstrap" package.json        # must return nothing
grep "react-bootstrap" package.json  # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: remove bootstrap and react-bootstrap"
```

---

### Task 4.2 — Replace particles-bg with tsparticles

🖥️ **Terminal:**

```bash
npm uninstall particles-bg
npm install @tsparticles/react @tsparticles/slim
```

✅ **Verification:**

```bash
grep "particles-bg" package.json     # must return nothing
grep "@tsparticles" package.json     # must show both packages
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: replace particles-bg with tsparticles"
```

---

### Task 4.3 — Uninstall history package

🖥️ **Terminal:**

```bash
npm uninstall history
```

✅ **Verification:**

```bash
grep '"history"' package.json        # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: remove unused history package"
```

---

### Task 4.4 — Install lucide-react

🖥️ **Terminal:**

```bash
npm install lucide-react
```

✅ **Verification:**

```bash
grep "lucide-react" package.json
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: install lucide-react icons"
```

---

### Task 4.5 — Delete all bundled icon and font asset directories

🖥️ **Terminal:**

```bash
rm -rf src/font-awesome
rm -rf src/fontello
rm -rf src/style/font-awesome
rm -rf src/style/fontello
rm -rf src/style/fonts
```

✅ **Verification:**

```bash
find src -name "*.otf" -o -name "*.eot" -o -name "*.woff" -o -name "*.ttf"
```

Must return nothing.

📝 **Commit:**

```bash
git add -A
git commit -m "chore: delete bundled font-awesome, fontello, and webfont files"
```

---

### Task 4.6 — Delete all SCSS files and remove SCSS imports

🖥️ **Terminal:**

```bash
rm -rf src/style
find src -name "*.scss" -delete
```

🤖 **Claude Code prompt:**

```
Search all files in src/ for any lines that import .scss files.
Examples of what to look for:
  import './style/App.scss'
  import '../style/something.scss'
Remove those import lines entirely from every file that contains them.
Do not make any other changes.
```

✅ **Verification:**

```bash
find src -name "*.scss"              # must return nothing
grep -r "\.scss" src/               # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: delete all SCSS files, replaced by tailwind"
```

---

## PHASE 5 — Install Vitest

### Task 5.1 — Install Vitest and testing utilities

🖥️ **Terminal:**

```bash
npm install --save-dev vitest @vitest/ui jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

✅ **Verification:**

```bash
grep "vitest" package.json
grep "jest-dom" package.json
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: install vitest and testing-library"
```

---

### Task 5.2 — Configure Vitest in vite.config.ts

🤖 **Claude Code prompt:**

```
Replace the entire contents of vite.config.ts with this:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
```

✅ **Verification:**

```bash
cat vite.config.ts
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: configure vitest in vite.config.ts"
```

---

### Task 5.3 — Create setupTests.ts

🤖 **Claude Code prompt:**

```
Create a new file at src/setupTests.ts with this exact content:

import '@testing-library/jest-dom'
```

✅ **Verification:**

```bash
cat src/setupTests.ts
```

📝 **Commit:**

```bash
git add -A
git commit -m "chore: add vitest setupTests.ts"
```

---

## PHASE 6 — Upgrade React to v19

### Task 6.1 — Install React 19

🖥️ **Terminal:**

```bash
npm install react@latest react-dom@latest
npm install --save-dev @types/react@latest @types/react-dom@latest
```

✅ **Verification:**

```bash
grep '"react"' package.json
grep '"react-dom"' package.json
```

Both must show `^19.x.x`.

📝 **Commit:**

```bash
git add -A
git commit -m "chore: upgrade react and react-dom to v19"
```

---

## PHASE 7 — Migrate Source Files to TypeScript

> **Rule for this entire phase:** after EVERY task, run `npx tsc --noEmit` in the terminal.
> The number of errors must decrease with each task. If errors increase, stop and fix before continuing.

---

### Task 7.1 — Migrate UserContext

🖥️ **Terminal:**

```bash
mv src/components/Context/UserContext.js src/components/Context/UserContext.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Context/UserContext.tsx with this:

import { createContext, useContext, useState, type ReactNode } from 'react'

export interface UserInfo {
  main: string
  subMain: string
  about: string
  address: string
  state: string
  email: string
  school: string
  course: string
  yearSpan: string
  schoolDescription: string
  olderSchool: string
  olderCourse: string
  olderYearSpan: string
  olderSchoolDescription: string
}

interface UserContextType {
  user: UserInfo
}

const UserContext = createContext<UserContextType | null>(null)

const userData: UserInfo = {
  main: 'Eri Winckler',
  subMain: 'Software developer building things with React, Java, and Python.',
  about:
    'I started my journey as a developer learning Python and eventually fell in love with React and Java as a perfect pair.',
  address: 'Remote',
  state: 'United States',
  email: 'efwinckler@gmail.com',
  school: 'Uninter',
  course: 'Software Developer',
  yearSpan: '2019-2022',
  schoolDescription:
    'Software Development course covering the most important principles of the industry and the Software Development Life Cycle.',
  olderSchool: 'CareerDevs',
  olderCourse: 'FullStack Developer',
  olderYearSpan: '2021',
  olderSchoolDescription:
    'Focused on real job environment techniques in Java and React.',
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user] = useState<UserInfo>(userData)
  return <UserContext value={{ user }}>{children}</UserContext>
}

export function useUser(): UserInfo {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used inside UserProvider')
  return ctx.user
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "UserContext"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate UserContext to TypeScript with React 19 context API"
```

---

### Task 7.2 — Migrate entry point (index.js → main.tsx)

🖥️ **Terminal:**

```bash
mv src/index.js src/main.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/main.tsx with this:

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { UserProvider } from './components/Context/UserContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
)
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "main.tsx"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate index.js to main.tsx with React 19 createRoot"
```

---

### Task 7.3 — Migrate App.js → App.tsx

🖥️ **Terminal:**

```bash
mv src/App.js src/App.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/App.tsx with this:

import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="antialiased">
      <Navigation />
      <Header />
      <About />
      <Resume />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "App.tsx"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate App.js to App.tsx"
```

---

### Task 7.4 — Migrate Navigation component

🖥️ **Terminal:**

```bash
mv src/components/navigation.js src/components/Navigation.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Navigation.tsx with this:

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import iconImg from '../images/icon-48x48.png'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Education' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#languages', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={iconImg} alt="logo" className="h-10 w-10" />
        </a>

        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm font-medium text-gray-700 hover:text-yellow-600"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "Navigation"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate Navigation to tsx with Tailwind, remove react-bootstrap"
```

---

### Task 7.5 — Migrate Header component

🖥️ **Terminal:**

```bash
mv src/components/header.js src/components/Header.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Header.tsx with this:

import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'
import { BookOpen, Linkedin, ChevronDown } from 'lucide-react'
import { useUser } from './Context/UserContext'

export default function Header() {
  const user = useUser()

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <header id="home" className="relative h-screen min-h-[500px] flex flex-col items-center justify-center text-center overflow-hidden bg-gray-950">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 80, density: { enable: true, width: 800, height: 800 } },
            color: { value: '#02075d' },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1.5 },
            links: { enable: true, color: '#4a5568', opacity: 0.3 },
          },
        }}
      />

      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-8xl font-extrabold text-yellow-500 tracking-tight mb-4">
          {user.main}
        </h1>
        <hr className="w-48 mx-auto border-t border-white/20 my-6" />
        <h3 className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
          {user.subMain}
        </h3>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/EriWinckler?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <BookOpen size={16} /> Projects
          </a>
          <a
            href="https://www.linkedin.com/in/eridan-winckler-449798169/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-yellow-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </header>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "Header"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate Header to tsx with tsparticles and Tailwind"
```

---

### Task 7.6 — Migrate About component

🖥️ **Terminal:**

```bash
mv src/components/about.js src/components/About.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/About.tsx with this:

import { Download } from 'lucide-react'
import meImg from '../images/me.jpg'
import { useUser } from './Context/UserContext'

export default function About() {
  const user = useUser()

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src={meImg}
            alt="Eri Winckler"
            className="w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-yellow-400/30"
          />
          <div className="flex-1 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-yellow-400 pb-1 inline-block">
                About Me
              </h2>
              <p className="text-gray-600 leading-relaxed">{user.about}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-yellow-400 pb-1 inline-block">
                Contact Details
              </h2>
              <address className="not-italic text-gray-600 space-y-1">
                <p className="font-semibold text-gray-800">Eridan Winckler</p>
                <p>{user.address}, {user.state}</p>
                <p>
                  <a href={`mailto:${user.email}`} className="hover:text-yellow-600 transition-colors">
                    {user.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://drive.google.com/file/d/1j88L68SdmxFCfw7gL0LCt7gj7YNQPZqP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full transition-colors shadow-md"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "About"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate About to tsx with Tailwind"
```

---

### Task 7.7 — Migrate Resume component

🖥️ **Terminal:**

```bash
mv src/components/resume.js src/components/Resume.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Resume.tsx with this:

import { GraduationCap } from 'lucide-react'
import { useUser } from './Context/UserContext'

interface EducationEntry {
  school: string
  course: string
  yearSpan: string
  description: string
}

export default function Resume() {
  const user = useUser()

  const entries: EducationEntry[] = [
    { school: user.school, course: user.course, yearSpan: user.yearSpan, description: user.schoolDescription },
    { school: user.olderSchool, course: user.olderCourse, yearSpan: user.olderYearSpan, description: user.olderSchoolDescription },
  ]

  return (
    <section id="resume" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          <span className="border-b-4 border-yellow-400 pb-1">Education</span>
        </h2>
        <div className="mt-10 space-y-8">
          {entries.map((entry) => (
            <div key={entry.school} className="flex gap-4 items-start">
              <div className="mt-1 p-2 bg-yellow-100 rounded-full">
                <GraduationCap size={20} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{entry.school}</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {entry.course} <span className="mx-1">•</span>
                  <em>{entry.yearSpan}</em>
                </p>
                <p className="text-gray-600 mt-2 leading-relaxed">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "Resume"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate Resume to tsx with Tailwind"
```

---

### Task 7.8 — Migrate Certificates component

🖥️ **Terminal:**

```bash
mv src/components/certificates.js src/components/Certificates.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Certificates.tsx with this:

import { Award, ExternalLink } from 'lucide-react'

interface Certificate {
  title: string
  issuer?: string
  date: string
  link?: string
}

const certificates: Certificate[] = [
  { title: 'Scrum Foundation Professional Certificate (SFPC)', date: 'Jul 2020', link: 'https://drive.google.com/file/d/1iwvJRCpItGz8nlDiIk8SORyH_3uZsAVZ/view?usp=sharing' },
  { title: 'Java Programming', issuer: 'University of Helsinki', date: 'Started May 2021' },
  { title: 'The Python Programmer Bootcamp', issuer: '365 DataScience', date: 'Apr 2020', link: 'https://drive.google.com/file/d/1XLI6Ko8wfb5FgSsyrTKKUgT6RqjFFUR8/view?usp=sharing' },
  { title: 'Git Course', issuer: 'Codecademy', date: 'Jun 2020', link: 'https://drive.google.com/file/d/1QwSH60G2U7eFGqqA_awjoj08kHcKPX5D/view?usp=sharing' },
  { title: 'Building Interactive JavaScript Websites', issuer: 'Codecademy', date: 'Jun 2020', link: 'https://drive.google.com/file/d/1fzlx5cPJwCrHkhaVjvVxaKXOUFOjc8Lu/view?usp=sharing' },
  { title: 'Certified 80+ WPM', issuer: 'Monkeytype', date: 'Oct 2021', link: 'https://i.imgur.com/tr1AS7c.png' },
]

const onlineCourses: Certificate[] = [
  { title: 'Python for Everybody', issuer: 'University of Michigan', date: 'May 2020' },
  { title: 'Learn React.js', issuer: 'Codecademy', date: 'Jun 2020' },
  { title: 'Python Core Language', issuer: 'Pluralsight', date: 'Tested Expert — Apr 2020' },
  { title: 'CS50', issuer: 'Harvard University', date: 'Apr 2020' },
]

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Award size={18} className="text-yellow-500 mt-0.5 shrink-0" />
        <div>
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 hover:text-yellow-600 inline-flex items-center gap-1 transition-colors"
            >
              {cert.title} <ExternalLink size={13} />
            </a>
          ) : (
            <p className="font-semibold text-gray-900">{cert.title}</p>
          )}
          {cert.issuer && <p className="text-sm text-gray-500 mt-0.5">{cert.issuer}</p>}
          <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          <span className="border-b-4 border-yellow-400 pb-1">Certificates</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => <CertCard key={c.title} cert={c} />)}
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mt-16 mb-10">
          <span className="border-b-4 border-yellow-400 pb-1">Online Courses</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {onlineCourses.map((c) => <CertCard key={c.title} cert={c} />)}
        </div>
      </div>
    </section>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "Certificates"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate Certificates to tsx, data-driven with Tailwind"
```

---

### Task 7.9 — Migrate Skills component

🖥️ **Terminal:**

```bash
mv src/components/skills.js src/components/Skills.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Skills.tsx with this:

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: 'Java', level: 85, color: 'bg-orange-500' },
  { name: 'React', level: 80, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 75, color: 'bg-blue-700' },
  { name: 'JavaScript', level: 80, color: 'bg-yellow-400' },
  { name: 'Python', level: 60, color: 'bg-green-500' },
  { name: 'CSS / Tailwind', level: 90, color: 'bg-teal-500' },
  { name: 'HTML', level: 95, color: 'bg-red-500' },
]

export default function Skills() {
  return (
    <section id="languages" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          <span className="border-b-4 border-yellow-400 pb-1">Skills</span>
        </h2>
        <div className="space-y-5">
          {skills.map(({ name, level, color }) => (
            <div key={name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{name}</span>
                <span className="text-sm text-gray-400">{level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`${color} h-2.5 rounded-full transition-all duration-700`}
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "Skills"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate Skills to tsx, deterministic colors with Tailwind"
```

---

### Task 7.10 — Migrate Contact component

🖥️ **Terminal:**

```bash
mv src/components/contact.js src/components/Contact.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Contact.tsx with this:

import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          <span className="border-b-4 border-yellow-400 pb-1">Contact</span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg">Would you like to work with me? Awesome!</p>
        <a
          href="mailto:efwinckler@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full text-sm transition-colors shadow-lg"
        >
          <Mail size={18} /> Let's Talk
        </a>
      </div>
    </section>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "Contact"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate Contact to tsx with Tailwind"
```

---

### Task 7.11 — Migrate Footer component

🖥️ **Terminal:**

```bash
mv src/components/footer.js src/components/Footer.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/components/Footer.tsx with this:

import { Linkedin, Github, Instagram, ArrowUp } from 'lucide-react'

const socials = [
  { href: 'https://www.linkedin.com/in/eridan-winckler-449798169/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/EriWinckler', Icon: Github, label: 'GitHub' },
  { href: 'https://www.instagram.com/efwinckler/', Icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <ul className="flex justify-center gap-6 mb-4">
        {socials.map(({ href, Icon, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Icon size={22} />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Eri Winckler
      </p>

      <a
        href="#home"
        aria-label="Back to top"
        className="mt-6 inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  )
}
```

✅ **Verification:**

```bash
npx tsc --noEmit 2>&1 | grep "Footer"   # must return nothing
```

📝 **Commit:**

```bash
git add -A
git commit -m "refactor: migrate Footer to tsx with lucide-react and Tailwind"
```

---

### Task 7.12 — Delete unused files, verify no .js components remain

🖥️ **Terminal:**

```bash
rm src/components/portfolio.js
find src/components -name "*.js"
```

✅ **Verification:** `find src/components -name "*.js"` returns nothing.

📝 **Commit:**

```bash
git add -A
git commit -m "chore: delete unused portfolio.js component"
```

---

### Task 7.13 — Full TypeScript check across entire codebase

🖥️ **Terminal:**

```bash
npx tsc --noEmit
```

✅ **Verification:** Zero errors output. If errors exist, paste them into Claude Code:

🤖 **Claude Code prompt (only if errors exist):**

```
Running npx tsc --noEmit produced these errors:

[paste the full error output here]

Fix each error. Do not change component logic or styling — only fix TypeScript type errors.
```

---

## PHASE 8 — Update Tests

### Task 8.1 — Rewrite App.test.tsx

🖥️ **Terminal:**

```bash
mv src/App.test.js src/App.test.tsx
```

🤖 **Claude Code prompt:**

```
Replace the entire contents of src/App.test.tsx with this:

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import { UserProvider } from './components/Context/UserContext'

describe('App', () => {
  it('renders the main sections', () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    )
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(/Eri Winckler/i)).toBeInTheDocument()
  })
})
```

✅ **Verification:**

```bash
npm test
```

Must print a passing test and exit with code 0.

📝 **Commit:**

```bash
git add -A
git commit -m "test: rewrite App.test.tsx for Vitest and actual content"
```

---

## PHASE 9 — Final Cleanup and Verification

### Task 9.1 — Add Google Fonts and global styles

🤖 **Claude Code prompt:**

```
Make two changes:

1. In ./index.html (at the project root), add these three lines inside <head>,
   just before the closing </head> tag:

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

2. Replace the entire contents of src/index.css with this:

@import "tailwindcss";

html {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}
```

✅ **Verification:**

```bash
grep "fonts.googleapis.com" ./index.html
grep "Inter" src/index.css
```

Both must return a match.

📝 **Commit:**

```bash
git add -A
git commit -m "style: add Inter via Google Fonts, enable smooth scroll"
```

---

### Task 9.2 — Verify no old dependencies remain in source code

🖥️ **Terminal:**

```bash
grep -r "react-bootstrap" src/
grep -r "particles-bg" src/
grep -r "font-awesome" src/
grep -r "fontello" src/
grep -r "ReactDOM.render" src/
```

✅ **Verification:** All five commands return nothing.

If any return a match, paste into Claude Code:

🤖 **Claude Code prompt (only if matches found):**

```
These files still contain old references that must be removed:

[paste the grep output here]

Remove those specific lines. Do not change anything else.
```

📝 **Commit:** none

---

### Task 9.3 — Full build

🖥️ **Terminal:**

```bash
npm run build
```

✅ **Verification:**

- Command exits with no errors
- A `dist/` directory was created at the project root
- Warnings about bundle size are acceptable — errors are not

If the build fails:

🤖 **Claude Code prompt (only if build fails):**

```
npm run build produced this error:

[paste the full error output here]

Fix the error. Do not change any component logic or styling.
```

📝 **Commit:** none

---

### Task 9.4 — Run full test suite

🖥️ **Terminal:**

```bash
npm test
```

✅ **Verification:** All tests pass, exit code 0.

📝 **Commit:** none

---

### Task 9.5 — Security audit

🖥️ **Terminal:**

```bash
npm audit
npm audit fix
npm audit
```

✅ **Verification:** Final `npm audit` reports zero critical or high vulnerabilities.

📝 **Commit (only if audit fix changed lockfile):**

```bash
git add -A
git commit -m "chore: npm audit fix post-migration"
```

---

### Task 9.6 — Smoke test the dev server

🖥️ **Terminal:**

```bash
npm run dev
```

✅ **Verification:**

- Terminal shows `Local: http://localhost:3000/`
- VS Code auto-opens the browser (port 3000 is forwarded by the dev container)
- Page loads showing: nav bar, hero with your name and particles, About, Education, Certificates, Skills, Contact, Footer
- No red errors in the browser console (F12)

Press `Ctrl+C` to stop when done.

📝 **Commit:** none

---

### Task 9.7 — Final push and PR

🖥️ **Terminal:**

```bash
git log --oneline
git push origin modernize/full-stack-upgrade
```

Then go to https://github.com/EriWinckler/magnus and open a Pull Request from `modernize/full-stack-upgrade` → `main`.

---

## Summary of What Changed

| Area                | Before                                          | After                                  |
| ------------------- | ----------------------------------------------- | -------------------------------------- |
| Bundler             | CRA / react-scripts                             | Vite                                   |
| Language            | JavaScript (.js)                                | TypeScript (.tsx)                      |
| React               | 18.3 — ReactDOM.render()                        | 19 — createRoot(), new Context API     |
| Styling             | SCSS + Bootstrap 5 + bundled fonts              | Tailwind CSS v4 + Google Fonts (Inter) |
| Particles           | particles-bg (unmaintained)                     | @tsparticles/react                     |
| Icons               | Bundled FA v4 + fontello (binary files in repo) | lucide-react (SVG, tree-shakeable)     |
| Testing             | CRA Jest                                        | Vitest                                 |
| Vulnerabilities     | 46 (1 critical)                                 | ~0                                     |
| State pattern       | useContext with [user, setUser] array           | Typed useUser() hook                   |
| Component filenames | lowercase.js                                    | PascalCase.tsx                         |
| Repo size           | Large (binary font files committed)             | Significantly smaller                  |
