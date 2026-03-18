# Content Browser Integration

Quick Menu Graph assets integrate directly into the Unreal Engine Content Browser with visual indicators and context menus.

## Creating a Graph

Right-click in the Content Browser → **Miscellaneous** → **Quick Menu Graph**.

The asset appears with a distinct **light blue** color to stand out from other asset types.

## Active Graph Indicator

Only one graph can be active at a time. The Content Browser shows you which one:

### Thumbnail Overlay (UE 5.1+)

A **checkmark icon** appears on the asset thumbnail:

- :material-check-circle:{ style="color: #3cb371" } **Green checkmark** — this graph is currently active
- No checkmark — this graph is inactive

**Click the checkmark overlay** on any graph thumbnail to set it as the active graph.

### Context Menu (UE 5.0+)

Right-click a Quick Menu Graph asset to see:

- **Set as Active Menu** (blue) — click to make this graph active
- **Active Menu** (green, disabled) — this graph is already active

## Other Ways to Set the Active Graph

| Method | Where |
|--------|-------|
| Thumbnail overlay click | Content Browser (UE 5.1+) |
| Right-click → Set as Active Menu | Content Browser (UE 5.0+) |
| **Set Active** button | Graph Editor toolbar |
| Active Graph dropdown | Quick Menu Panel header |
| Project Settings | Edit → Project Settings → Plugins → Quick Menu |

## Console Command

Run `QuickMenu.CreateTestGraph` in the console to generate a pre-configured test graph at `/Game/QM_TestAll`. It includes submenus for View, Spawn, Transform, and Viewport actions and is automatically set as the active graph.

!!! tip
    This is a great way to see what Quick Menu can do before building your own graph from scratch.
