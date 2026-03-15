# Graph Editor

The graph editor is where you build and organize your Quick Menu graphs.

## Opening the Editor

- Double-click a Quick Menu Graph asset in the Content Browser
- Or right-click a graph asset → "Edit"

## Editor Panels

### Graph Canvas (Center)

The main node graph. Drag, zoom, connect nodes. Right-click for the context menu to add nodes.

![Graph editor overview](/img/OverviewGraph.png)

### Wheel List (Left Sidebar)

Displays all WheelOutput nodes organized by category.

**Features:**
- **Click a wheel** to select it in the graph canvas and show it in the preview
- **Double-click** to enter Focus Mode
- **Drag a wheel** up/down to reorder within its category
- **Drag a wheel onto a category header** to move it to that category
- **Multi-select** with Shift (range) or Ctrl (toggle)
- **Search/filter box** at the top — type to filter wheels by name
- **Right-click a wheel** → Rename, Delete, Move to Category
- **Right-click a category header** → Rename, Change Color, Change Icon, Delete Category, New Category

**Category system:**
- Categories are collapsible groups with a colored header
- Each category can have a custom color and icon
- Wheels without a category appear in "Uncategorized"
- New categories auto-create when you drag a wheel to the "Drop here for new category" zone
- Category state (collapsed/expanded) persists between sessions

![Wheel List panel](/img/WheelsList.png)

### Preview Panel (Right Sidebar)

Live, interactive rendering of the selected wheel as a pie menu.

**Features:**
- **Live updates** — any change in the graph is reflected in the preview after a short debounce
- **Interactive** — click wedges to test actions (they execute for real), hover to see highlights
- **"+" button** — add actions to the wheel directly from the preview (opens action picker)
- **"X" buttons** — remove wedges inline
- **Scale slider** — drag to preview at different sizes (1.0x to 2.0x)
- **Sub-menu expansion** — hover a sub-menu wedge to see children expand as nested rings
- **Toggleable** — show/hide with toolbar button or Ctrl+E

**What it shows:**
- When a WheelOutput is selected: that wheel's wedges with labels, icons, and colors
- When a single action node is selected: a temporary preview with just that action
- When nothing relevant is selected: the last previewed wheel

![Preview panel](/img/WheelPreview.png)

### Find Results (Bottom)

Opened with **Ctrl+F**. Search nodes by name, label, or property value.

- Type a query and press Enter — results list all matching nodes
- **Double-click a result** to zoom the graph canvas to that node
- Matches node names, labels, and property values (e.g., searching "Translate" finds TransformMode nodes set to Translate)
- Results show a badge indicating which subgraph the node belongs to

**Search scope:**

- **Default** — searches the current graph and all its subgraphs (SubMenu nodes)
- **Search All Graphs** (toggle button next to the search box) — searches across **every QuickMenu Graph asset** in your project, not just the one you have open. Results from other graphs show the asset name so you know where each match lives

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/img/FindResultModes.mp4" type="video/mp4">
</video>

## Focus Mode

- Double-click a WheelOutput in the Wheel List to enter Focus Mode
- Only that wheel's connected nodes are highlighted; everything else fades
- The preview panel shows that wheel
- Click the breadcrumb bar or press Escape to exit

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/img/FocuesesWheels.mp4" type="video/mp4">
</video>

## Compact Mode

Nodes can be collapsed to a smaller visual footprint — useful when your graph gets large and you want to reduce clutter.

- **H** — toggle compact/expanded on selected nodes
- Or right-click a node → **Toggle Compact**
- Compact nodes show only the node title and pins — no properties, no details
- The node stays fully functional: connections, execution, and preview all work the same

**Tip:** Compact mode is great for action nodes you've already configured. Keep your Switch and WheelOutput nodes expanded for readability, compact everything else.

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/img/Compactnode.mp4" type="video/mp4">
</video>

## Comment Nodes

- Press **C** with nodes selected to create a group comment around them
- Double-click to rename
- Click the color swatch to change the comment color
- Resizable — drag edges to fit your node group
- Comments are purely visual — they don't affect execution

**Tip:** Use comments to group related actions (e.g., "Transform Tools", "Spawn Actors") so your graph stays organized as it grows.

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/img/CommentGroup.mp4" type="video/mp4">
</video>

## Subgraph Navigation

When you use **SubMenu** nodes, each SubMenu acts as a subgraph — a reusable group of actions that can be referenced from multiple wheels.

- **Double-click a SubMenu node** to navigate into it (the graph canvas shows only that SubMenu's children)
- A **breadcrumb bar** appears at the top showing your navigation path (e.g., Root > Main Tools > Spawn SubMenu)
- **Click any breadcrumb** to jump back to that level
- **Backspace** — go back one level
- **Shift+Space** — jump directly to the root graph
- **Escape** — exit current subgraph

This lets you work on deeply nested menus without losing context. The Wheel List and Preview panel update to reflect the current subgraph.

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/img/SubgraphCollapseExpand.mp4" type="video/mp4">
</video>

## Two Workflows

Quick Menu supports two ways to build menus:

1. **Graph-first:** Open the graph editor, add nodes, connect pins, see the result in preview
2. **Wheel-first:** Press V in the editor, see what's there, add/remove actions inline with + and X buttons, press E to fine-tune in the graph

Both workflows edit the same underlying graph — changes made inline are reflected in the graph, and vice versa.

## Related

- [Keyboard Shortcuts](shortcuts.md)
- [Wedge Appearance](wedge-appearance.md)
- [Quick Menu Panel](panel.md)
