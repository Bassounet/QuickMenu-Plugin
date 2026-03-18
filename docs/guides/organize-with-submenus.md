# How to: Organize Menus with Sub-Menus

As your menu grows, cramming everything into one wheel gets messy. This guide shows how to use SubMenus to keep things clean and fast.

## The Problem

A WheelOutput supports up to 12 wedges. But even with 8+ wedges, the pie becomes hard to read. The sweet spot is **4–6 wedges per wheel**.

## The Solution: SubMenus

SubMenus group related actions into an expandable wedge. When you hover a SubMenu wedge, its children fan out as a nested ring — up to 4 levels deep.

## Step 1 — Plan Your Categories

Before wiring nodes, decide how to group your actions. For example:

| SubMenu | Actions inside |
|---------|---------------|
| **Transform** | Translate, Rotate, Scale, Reset Transform |
| **Spawn** | Cube, Sphere, Cylinder, Cone, Plane |
| **View** | Lit, Wireframe, Unlit, Shader Complexity |
| **Snap** | Toggle Location Snap, Toggle Rotation Snap, Grid Size |

## Step 2 — Create SubMenu Nodes

In the Graph Editor, hold **S** and click to spawn a SubMenu node. Name it (e.g., "Transform").

Press **=** to add menu pins — one per action you want inside.

## Step 3 — Connect Actions to the SubMenu

Drag action nodes onto the SubMenu's menu input pins. The pin names auto-update to match the action labels.

## Step 4 — Connect the SubMenu to a Wheel

Connect the SubMenu's **menu output** (blue pin on the left) to one of the WheelOutput's menu input pins.

Your wheel now has a "Transform" wedge that expands on hover.

## Step 5 — Nest SubMenus (Optional)

You can put a SubMenu inside another SubMenu for deeper organization:

```
WheelOutput
├── Transform (SubMenu)
│   ├── Translate
│   ├── Rotate
│   ├── Scale
│   └── Reset (SubMenu)
│       ├── Reset All
│       ├── Reset Location
│       └── Reset Rotation
├── Spawn (SubMenu)
│   ├── Cube
│   ├── Sphere
│   └── Cylinder
└── Play
```

!!! warning
    Maximum nesting depth is **4 levels**. Keep it shallow for fast access — most users shouldn't need more than 2.

## Tips

- **Keep the top-level to 4–6 wedges** — this is the fastest to navigate
- **Group by workflow, not by type** — "things I do when modeling" > "all transform actions"
- **Use Sequence nodes** for multi-step combos — e.g., "Save & Compile" as a single wedge instead of two separate actions
- **Pin auto-naming** works on SubMenu pins too — connect an action and the pin label updates automatically

## Related

- [Structural Nodes](../nodes/structural.md)
- [Wedge Appearance](../customization/wedge-appearance.md)
