import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

//@ts-expect-error
import { greet } from "@my-org/shared-greet";
//@ts-expect-error
import { countNumber } from "@my-org/shared-count"

function App() {
  const [count, setCount] = createSignal(countNumber() as number)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>{greet("Project B")}</h1>
      <div class="card">
        <p>Note: changing of the shared packages locally can require force update of Vite.
        </p>
        <p>
          use <code>dev:force</code> from inside the web folder or
          <code>dev:web:force</code> from the parent workspace folder
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          <code>Vite + Solid</code>
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
