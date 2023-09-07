import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export default function React() {
  return (
    <div style={{ background: "white" }}>
      <div>Hello, world</div>
    </div>
  )
}
