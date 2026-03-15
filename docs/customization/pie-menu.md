# The Pie Menu

## Opening

Press **V** (or your configured hotkey) anywhere in the editor. The pie menu appears centered at your cursor.

## Navigation

- **Hover** over a wedge to highlight it
- **Click** (or release V, depending on activation mode) to execute the action
- **Sub-menus** expand as nested rings when you hover their parent wedge
- **Back arrow** appears at the center when inside a sub-menu — click to go back
- **Go To Wheel** wedges navigate to another wheel (with breadcrumb history)
- **Mouse wheel** can scroll through options in some contexts
- **Move cursor to center** (dead zone) to deselect all

## Activation Modes

Set in Project Settings or the Quick Menu Panel:

- **Click and Release** (default) — hover over wedge, release mouse/key to execute
- **Click Only** — click on wedge to execute
- **Release Only** — release the V key to execute whatever is hovered

## Dismissing

- Click outside the menu
- Press Escape
- Press V again (in some modes)
- Click the dead zone center
- Switch focus to another window

## Inline Editing

The pie menu is not just a launcher — it's also a live editor:

- **"+" button** — appears on the wheel when there's room for more wedges. Click to open the action picker and add a new action directly, without opening the graph editor.
- **"X" button** — appears on removable wedges. Click to remove an action inline.
- **E key** (configurable) — press while the pie menu is open to jump straight to the graph editor, focused on the current wheel.
- **Right-click a wedge** — opens wedge settings (label, color, icon) directly from the pie menu.

### Inline editing in action

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/img/InlineEditingXPieMenu.mp4" type="video/mp4">
</video>

### Customizing wedge settings from the pie menu

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/img/WedgeSettingsThroughPieMenuV2.mp4" type="video/mp4">
</video>

## Context-Aware Behavior

When you press V, Quick Menu evaluates your graph:

1. Starts at Root
2. Follows Switch nodes based on current context
3. Reaches a WheelOutput
4. Displays that wheel's actions

If no wheel matches the current context:
- Falls back to a Default wheel (if one exists)
- Or shows a **"Create Wheel" panel** (configurable in Project Settings)

![No wheel for this context](/img/NoWheelForThisContext.png)

![Created wheel (empty)](/img/CreatedWheelEmpty.png)

![Fallback wheel](/img/FallBackWheel.png)
