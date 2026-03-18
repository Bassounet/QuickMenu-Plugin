# How to: Add Custom Python Actions

Quick Menu supports inline Python code in pie menu wedges. This lets you create actions that go beyond the built-in nodes — automate repetitive tasks, batch operations, or anything the Unreal Python API supports.

## Prerequisites

Enable the **Python Editor Script Plugin** in your project:

Edit → Plugins → search "Python" → enable **Python Editor Script Plugin** → restart the editor.

## Step 1 — Add a Custom Code Node

In the Graph Editor, right-click → **Actions** → **Custom** → **Custom Code**. Connect it to a WheelOutput or SubMenu pin.

## Step 2 — Write Your Code

Select the Custom Code node. In the Details panel, you'll see three code fields:

### Execute Code

The Python code that runs when the wedge is clicked.

```python
# Example: Toggle wireframe on selected actors
import unreal
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    comp = actor.get_component_by_class(unreal.StaticMeshComponent)
    if comp:
        comp.set_editor_property("bDisplayWireframe",
            not comp.get_editor_property("bDisplayWireframe"))
```

### Display Name Code (Optional)

A Python expression evaluated when the menu opens. Returns the wedge label dynamically.

```python
# Show the number of selected actors in the wedge label
f"Selected: {len(unreal.EditorLevelLibrary.get_selected_level_actors())}"
```

### Is Visible Code (Optional)

A Python expression evaluated when the menu opens. Returns `True` or `False` to show/hide the wedge.

```python
# Only show this wedge in Landscape mode
unreal.EditorLevelLibrary.get_editor_world() is not None
```

## Example: Batch Rename Actors

```python
import unreal
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
for i, actor in enumerate(actors):
    actor.set_actor_label(f"Prop_{i:03d}")
```

## Example: Scatter Actors Randomly

```python
import unreal
import random
actors = unreal.EditorLevelLibrary.get_selected_level_actors()
for actor in actors:
    loc = actor.get_actor_location()
    offset = unreal.Vector(
        random.uniform(-500, 500),
        random.uniform(-500, 500),
        0
    )
    actor.set_actor_location(loc + offset, False, False)
```

## Example: Quick Debug Log

```python
import unreal
for actor in unreal.EditorLevelLibrary.get_selected_level_actors():
    unreal.log(f"{actor.get_actor_label()} | "
               f"Class: {actor.get_class().get_name()} | "
               f"Location: {actor.get_actor_location()}")
```

## Tips

- **Test in the Output Log first** — open Window → Developer Tools → Output Log, then run your code via the Python console before putting it in a wedge
- **Use Display Name Code** for dynamic labels that update every time the menu opens
- **Use Is Visible Code** to hide wedges that don't apply to the current context
- **Keep it short** — pie menu actions should be fast. For complex scripts, call a function from a .py file instead

## Related

- [Python Examples](../customization/python-examples.md) — 11 ready-to-use snippets
- [Custom Code Node](../nodes/actions-utility.md#custom-code)
