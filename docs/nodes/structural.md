# Structural Nodes

These nodes define the structure of your menu graph — the flow from entry point to pie menu display.

## Root

- One per graph, cannot be deleted
- Single exec output pin
- Starting point for menu evaluation
- Every graph must have exactly one Root

## WheelOutput

The terminal node that defines a pie menu wheel. Each input pin becomes one wedge.

**Properties:**
- **WheelName** — displayed in the Wheel List and used for Go To Wheel navigation
- **Category** — used for grouping in the Wheel List

**Pins:**
- 1 exec input (white) — receives execution flow
- N menu inputs (blue) — each pin = one wedge (max 12)

**Adding/removing pins:**
- Select the node and press **=** to add a menu pin
- Press **-** to remove the last menu pin
- Or right-click → Add Menu Pin / Remove Menu Pin

## SubMenu

Groups actions into an expandable wedge. When the user hovers this wedge in the pie menu, children expand as a nested ring.

**Properties:**
- **SubMenuName** — displayed as the wedge label

**Pins:**
- 1 menu output (blue) — connect to a WheelOutput or another SubMenu pin
- N menu inputs (blue) — children, each pin = one child wedge

**Nesting:** SubMenus can be nested up to 4 levels deep (sub-menu within sub-menu).

**Pin auto-naming:** When you connect an action node to a menu pin, the pin's friendly name updates to match the action label (e.g., "Translate", "Rotate" instead of "Pin 0", "Pin 1").

## Related

- [Switch Nodes](switches.md)
- [Action Nodes](actions-spawn.md)
- [Graph System](../concepts/graph-system.md)
