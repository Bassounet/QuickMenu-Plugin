# How to: Create a Context-Aware Menu

This guide walks you through building a menu that automatically shows different actions depending on which editor you're working in.

## Goal

When you press **V**:

- In the **Level Editor** → show viewport, spawn, and transform actions
- In the **Blueprint Editor** → show compile, add variable, and component actions
- In the **Material Editor** → show material-specific actions
- Everywhere else → show a default fallback menu

## Step 1 — Create the Graph

Right-click in the Content Browser → **Miscellaneous** → **Quick Menu Graph**. Name it something like `QM_MyWorkflow`.

Double-click to open the Graph Editor.

## Step 2 — Add a Switch Node

Hold **C** and click in the canvas to spawn a **Switch: Editor Context** node. Connect the **Root** node's exec output to the Switch's exec input.

In the Details panel, add cases for the editors you want:

- `Level Editor`
- `Blueprint`
- `Material`

Each case creates a new exec output pin on the Switch node.

## Step 3 — Create Wheels for Each Context

For each context, add a **WheelOutput** node (hold **W** and click):

1. **"Level Editor" wheel** — connect it to the `Level Editor` output of the Switch
2. **"Blueprint" wheel** — connect it to the `Blueprint` output
3. **"Material" wheel** — connect it to the `Material` output
4. **"Default" wheel** — connect it to the `Default` output (fallback for unmatched contexts)

!!! tip
    Name your wheels clearly (e.g., "Level Editor", "Blueprint", "Material") — these names appear in the Wheel List sidebar.

## Step 4 — Add Actions to Each Wheel

Press **=** on each WheelOutput to add menu pins, then connect action nodes:

**Level Editor wheel:**

- Spawn Shape (Cube, Sphere...)
- Transform Mode (Translate, Rotate, Scale)
- Set View Mode (Lit, Wireframe...)
- Play (Play, Simulate, Stop)

**Blueprint wheel:**

- BP: Compile (Compile, Save & Compile)
- BP: Add Variable (Bool, Float, Vector...)
- BP: Add Graph (Function, Macro)
- BP: Add Component

**Material wheel:**

- Material Op (Apply Changes, Refresh Previews)
- Material Op (Preview shapes)
- Material Op (Toggle Live Preview)

## Step 5 — Set as Active and Test

Click **Set Active** in the Graph Editor toolbar, then press **V** in different editors to see the menu adapt.

## Going Further

- **Chain multiple Switches** — add a Selection Count switch after the Level Editor context to show different actions when 0, 1, or multiple actors are selected
- **Use SubMenus** — group related actions (e.g., all spawn actions in a "Spawn" submenu)
- **Add a "Create Wheel" flow** — enable `Offer Create Wheel` in Project Settings so the plugin prompts you to create new wheels for unrecognized contexts

## Related

- [Context Detection](../concepts/context-detection.md)
- [Switch Nodes](../nodes/switches.md)
- [Your First Wheel](../getting-started/first-wheel.md)
