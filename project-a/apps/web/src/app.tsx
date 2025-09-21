import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'


//@ts-expect-error -- no types
import { greet } from "@my-org/shared-greet";
//@ts-expect-error  -- no types
import { VERSION } from "@my-org/consts";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h4>
          Version: {VERSION}
          <br />
          Project-A  (apps/web)
        </h4>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>{greet('Project A in the Web')}</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Vite + Preact
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
