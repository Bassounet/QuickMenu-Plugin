# Action Nodes — Navigation & Utility

## Go To Wheel

Navigates to another wheel in the current graph.

**Property:** `TargetWheelName` — pick from a dropdown of all WheelOutputs in the graph.

When clicked in the pie menu, replaces the current wheel with the target wheel. A back arrow appears at the center to return to the previous wheel (breadcrumb navigation). Uses the `QuickMenu.GoToWheel` custom brush as its default icon.

## Repeat Last

Re-executes the last action used via Quick Menu.

The label dynamically shows what the last action was (e.g., "Repeat: Translate"). No configuration needed.

## Graph Op

Quick Menu editor self-operations — actions that control the graph editor itself.

**Options:**

| Operation | Description |
|-----------|-------------|
| Add Wheel Output | Add a new WheelOutput node to the graph |
| Add SubMenu | Add a new SubMenu node |
| Add Switch | Add a new Switch node |
| Auto-Layout Graph | Automatically arrange graph nodes (also Ctrl+L) |
| Align Horizontal | Align selected nodes horizontally |
| Align Vertical | Align selected nodes vertically |
| Collapse to SubMenu | Collapse selected nodes into a SubMenu |
| Preview Wheel | Toggle preview for the selected wheel |
| Validate Graph | Run graph validation checks |
| Set as Active Graph | Set this graph as the active Quick Menu graph |
| Auto Name & Color Comments | Automatically name and color comment nodes based on their contents (detects SubMenu/WheelOutput inside bounds) |
| Create Comment | Create a comment node around the current selection |
| Auto-Layout++ | Perform auto-layout, then create comments around node groups and auto-color them |
| Remove Unused Pins | Remove unconnected menu pins from selected nodes |

## Custom Code (Python)

Run inline Python code when the wedge is clicked.

**Properties:**
- **Execute Code** — Python code to run on click
- **Display Name Code** — Python expression returning a string (dynamic label)
- **Is Visible Code** — Python expression returning bool (conditional visibility)

> Requires the **Python Editor Script Plugin** to be enabled.

See [Python Examples](../customization/python-examples.md) for ready-to-use code snippets.
