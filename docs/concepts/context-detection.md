# Context Detection

Switch nodes evaluate the current editor state at runtime and route execution to different WheelOutputs. This is what makes Quick Menu **context-aware** — showing different tools depending on what you're doing.

## What Can Be Detected

| Switch Type | What it detects | Example |
|------------|----------------|---------|
| **Editor Context** | Active editor tab | Level Editor, Blueprint, Material, Sequencer... |
| **Editor Mode** | Current editing mode | Select, Landscape, Foliage, Modeling... |
| **Selection Count** | Number of selected actors | 0, 1, 2, 5... |
| **Actor Class** | Class of selected actor | StaticMeshActor, PointLight, CameraActor... |
| **Blueprint Context** | Active BP editor panel | Components, Event Graph, Construction Script... |

## How It Works

1. Add a Switch node to your graph
2. Add the cases (contexts) you want to detect
3. Connect each case's exec output to a different WheelOutput
4. Connect the **Default** output for unmatched contexts

When you press V, Quick Menu evaluates the Switch and follows the matching output.

## Example: Different Menus Per Editor

```
Root → Switch: Editor Context
          ├── Level Editor → WheelOutput "Transform Tools"
          ├── Blueprint    → WheelOutput "BP Tools"
          ├── Material     → WheelOutput "Material Tools"
          └── Default      → WheelOutput "General"
```

## The "Create Wheel" Flow

When you press V in a context that has no matching wheel:

1. Quick Menu shows a panel saying "No wheel found for: [context name]"
2. A **Create Wheel** button lets you instantly create a WheelOutput wired to the correct Switch case
3. The new wheel opens in the graph editor, ready to be populated

This is configurable: **Project Settings → Offer Create Wheel** (on by default).

## Chaining Switches

You can chain multiple Switch nodes for finer control:

```
Root → Switch: Editor Context
          ├── Level Editor → Switch: Selection Count
          │                     ├── 0 → "No Selection" wheel
          │                     ├── 1 → "Single Actor" wheel
          │                     └── Default → "Multi Select" wheel
          └── Blueprint → Switch: Blueprint Context
                              ├── Components → "BP Components" wheel
                              └── Event Graph → "BP Graph" wheel
```

## Related

- [Switch Node Reference](../nodes/switches.md)
- [Graph System](graph-system.md)
