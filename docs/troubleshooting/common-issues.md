# Troubleshooting

## "Nothing happens when I press V"

1. Check **Project Settings → Quick Menu → Active Graph** is set
2. Verify the graph has a Root node connected to at least one WheelOutput
3. If using Switch nodes, make sure the current context has a matching output (or a Default connection)

## "Menu shows wrong actions for this editor"

1. Open your graph and check your Switch node connections
2. Verify the Switch type matches what you're trying to detect (Editor Context vs. Editor Mode vs. Selection Count)
3. Add the missing context as a case on the Switch node

## "Python action doesn't work"

1. Ensure the **Python Editor Script Plugin** is enabled (Edit → Plugins → search "Python")
2. Check the Output Log for Python errors (Window → Developer Tools → Output Log)
3. Test your code in the Python console first (Window → Developer Tools → Python Console)

## "Some actions are grayed out"

- Blueprint actions (Component Op, Component Property) require a Blueprint Editor to be open with a component selected
- Niagara/PCG actions only appear when those plugins are enabled
- Some actions require a specific selection state (e.g., Actor Op → Group requires multiple actors selected)

## "How do I create a context-aware menu?"

1. Add a Switch node (e.g., Switch: Editor Context)
2. Add the contexts you want as cases
3. Connect each case output to a different WheelOutput
4. Each WheelOutput can have different actions
5. Connect a Default output for unmatched contexts

See [Context Detection](../concepts/context-detection.md) for a detailed walkthrough.

## "How do I create nested sub-menus?"

1. Add a SubMenu node
2. Connect action nodes to the SubMenu's menu input pins
3. Connect the SubMenu's menu output to a WheelOutput menu pin
4. When hovering that wedge, children expand as a nested ring

## "Wedge limit reached"

Each wheel supports a maximum of 10 wedges. Use SubMenu nodes to group related actions and reduce top-level wedge count.

## Getting Help

- [Discord](https://discord.gg/YYc2v8k5BA) — community support
- [GitHub Issues](https://github.com/Bassounet/QuickMenu-Plugin/issues) — bug reports
- [GitHub Discussions](https://github.com/Bassounet/QuickMenu-Plugin/discussions) — Q&A, ideas, showcase
