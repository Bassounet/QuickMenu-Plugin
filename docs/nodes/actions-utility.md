# Action Nodes — Navigation & Utility

## Go To Wheel

Navigates to another wheel in the current graph.

**Property:** `TargetWheelName` — pick from a dropdown of all WheelOutputs in the graph.

When clicked in the pie menu, replaces the current wheel with the target wheel. A back arrow appears at the center to return to the previous wheel (breadcrumb navigation).

## Repeat Last

Re-executes the last action used via Quick Menu.

The label dynamically shows what the last action was (e.g., "Repeat: Translate"). No configuration needed.

## Graph Op

Quick Menu editor self-operations — actions that control the graph editor itself.

**Options:** Add Node, Auto Layout, Align Selection, Collapse to SubMenu, Validate Graph, Set as Active Graph, Open Settings, Zoom to Fit, Toggle Preview, Find in Graph.

## Custom Code (Python)

Run inline Python code when the wedge is clicked.

**Properties:**
- **Execute Code** — Python code to run on click
- **Display Name Code** — Python expression returning a string (dynamic label)
- **Is Visible Code** — Python expression returning bool (conditional visibility)

> Requires the **Python Editor Script Plugin** to be enabled.

See [Python Examples](../customization/python-examples.md) for ready-to-use code snippets.
