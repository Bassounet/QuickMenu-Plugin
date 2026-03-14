# Project Settings

Found at: **Edit → Project Settings → Plugins → Quick Menu**

| Setting | Default | Description |
|---------|---------|-------------|
| **Active Graph** | None | The Quick Menu Graph asset to use. Must be set for the menu to work. |
| **Open Menu Key** | V | Hotkey to open the pie menu |
| **Edit Wheel Key** | E | Hotkey to jump from pie menu to graph editor for the current wheel |
| **Activation Mode** | Click and Release | When the hovered wedge executes |
| **Node Spawn Shortcuts** | Empty | List of key + node class pairs for quick node creation in the graph editor |
| **Offer Create Wheel** | true | Show "Create Wheel" panel when no wheel matches the current context |
| **Custom Console Commands** | Empty | User-defined console commands available in the Quick Menu panel |

## Activation Modes

- **Click and Release** (default) — hover over wedge, release mouse/key to execute
- **Click Only** — click on wedge to execute
- **Release Only** — release the V key to execute whatever is hovered

## Node Spawn Shortcuts

Each entry has:
- **Key** — the key to hold
- **Display Name** — shown in the Quick Menu Panel shortcuts tab
- **Node Class Path** — the class to spawn

Default shortcuts: W → WheelOutput, S → SubMenu, C → Switch: Editor Context.

## Custom Console Commands

Each entry has:
- **Command** — the console command string
- **Description** — shown in the Quick Menu Panel
- **Is Toggle** — whether the command toggles on/off
- **Default Value** — initial value for toggle commands
