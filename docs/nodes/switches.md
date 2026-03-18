# Switch Nodes

Switch nodes route execution flow based on the current editor context. They have one exec input and multiple exec outputs — one per case, plus a Default.

## Switch: Editor Context

Routes based on the active editor tab. Supports **61 contexts** including:

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

## Switch: Editor Mode

Routes based on the current editing mode:

- Default (Select), Landscape, Foliage, Mesh Paint, Placement, Fracture, Modeling Tools, Custom

## Switch: Selection Count

Routes based on how many actors are selected in the viewport.

- User defines which counts (0, 1, 2, 5...) get dedicated outputs
- Unmatched counts go to Default
- Dynamic — add as many count cases as needed

## Switch: Actor Class

Routes based on the class of the selected actor.

- User adds actor class entries; each gets an output pin
- Supports subclass matching (e.g., a Light entry matches PointLight, SpotLight, etc.)
- Unmatched classes go to Default

## Switch: Blueprint Context

Routes based on the active panel in the Blueprint Editor:

- Components, Event Graph, Construction Script, Defaults, Custom

## Common Properties

All Switch nodes share:
- **Cases** array — the list of case values/enums that create output pins
- **Default pin** — always present, handles unmatched cases
- **Compact mode** — toggle via H key for a smaller visual footprint

## Related

- [Context Detection — How it works](../concepts/context-detection.md)
- [Structural Nodes](structural.md)
