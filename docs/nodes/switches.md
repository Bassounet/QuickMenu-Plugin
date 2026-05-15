# Switch Nodes

Switch nodes route execution flow based on the current editor context. They have one exec input and multiple exec outputs — one per case, plus a Default.

## Switch

*Added in 1.0.4.*

The unified Switch node replaces the 5 specialized Switch types below. Each case can match any of the 5 predicates — Editor Context, Editor Mode, Blueprint Context, Selection Count, or Actor Class — and a single Switch can mix heterogeneous cases (e.g. case 0 matches an Editor Context, case 1 matches a Selection Count, case 2 matches an Actor Class).

**Configuring a case:**

- Each case exposes a single searchable combo listing **all options across all 5 categories** (~60+ entries — `Editor Context | Sequencer`, `Editor Mode | Landscape`, `Blueprint Context | Components`, `Selection Count...`, `Actor Class...`, etc.)
- Typing in the filter cross-cuts categories — searching `"blueprint"` surfaces `Editor Context | Blueprint`, `Editor Context | Anim Blueprint`, `Editor Context | Widget Blueprint`, and all `Blueprint Context | *` entries at once
- `*::Custom` enum values expose a side text input for the Tab ID / Mode ID / Mode Name
- `Selection Count` cases show an int spinner. `Actor Class` cases show the standard class picker
- The combo button always shows the synthesized `<Category> | <Value>` label so the case is readable at a glance

**Runtime:** cases are evaluated in order, first match wins, falls back to the `Default` pin.

!!! tip "Migration from the 5 legacy Switch nodes"
    The 5 specialized Switch nodes below still compile and work — existing graphs are unchanged. They are deprecated and will be removed in a future release; prefer the unified `Switch` node for new graphs.

## Switch: Editor Context *(Legacy)*

Routes based on the active editor tab. Supports **49 contexts** including:

- **General:** Level Editor, Content Browser
- **Blueprint:** Blueprint Editor, Widget Blueprint, Animation Blueprint
- **Visual:** Material Editor, Niagara, Texture, Font
- **Sequencing:** Sequencer, Control Rig
- **World:** PCG, Landscape (via editor mode)
- **Audio:** MetaSound, Sound Cue, Sound Class
- **Data:** DataTable, Curve, Struct, Enum
- **AI:** Behavior Tree, State Tree, Environment Query
- **Advanced:** IK Rig, IK Retarget, ML Deformer, Chooser, Dataflow
- **Custom:** User-defined tab ID (for third-party editor plugins)

Each context gets its own exec output pin. Unmatched contexts go to the Default pin.

## Switch: Editor Mode *(Legacy)*

Routes based on the current editing mode:

- Default (Select), Landscape, Foliage, Mesh Paint, Placement, Fracture, Modeling Tools, Custom

## Switch: Selection Count *(Legacy)*

Routes based on how many actors are selected in the viewport.

- User defines which counts (1, 2, 5...) get dedicated outputs
- Default pin handles 0 selections (labeled "Default (0 selection)")
- Dynamic — add as many count cases as needed

## Switch: Actor Class *(Legacy)*

Routes based on the class of the selected actor.

- User adds actor class entries; each gets an output pin
- Supports subclass matching (e.g., a Light entry matches PointLight, SpotLight, etc.)
- Unmatched classes go to Default

## Switch: Blueprint Context *(Legacy)*

Routes based on the active panel in the Blueprint Editor:

- Components, Event Graph, Construction Script, Defaults, Custom

## Common Properties

All Switch nodes share:
- **Cases** array — the list of case values/enums that create output pins
- **Default pin** — always present, handles unmatched cases (only one Default allowed per switch)
- **Compact mode** — toggle via H key for a smaller visual footprint
- **Mouse wheel cycling** — scroll the mouse wheel over a dropdown to quickly cycle through options
- **Duplicate warning** — if two cases have the same value, a yellow warning displays which cases are duplicated

## Related

- [Context Detection — How it works](../concepts/context-detection.md)
- [Structural Nodes](structural.md)
