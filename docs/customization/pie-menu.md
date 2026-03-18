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

<div class="video-container">
<video autoplay="true" loop="true" muted="true" playsinline="true">
<source src="/img/InlineEditingXPieMenu.mp4" type="video/mp4">
</video>
</div>

<div class="video-container">
<video autoplay="true" loop="true" muted="true" playsinline="true">
<source src="/img/WedgeSettingsThroughPieMenuV2.mp4" type="video/mp4">
</video>
</div>

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
