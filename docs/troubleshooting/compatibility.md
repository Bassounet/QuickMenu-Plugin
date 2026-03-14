# Version Compatibility

Quick Menu supports Unreal Engine 4.27 through 5.7.

## Feature Support by Version

| Feature | UE 4.27 | UE 5.0-5.1 | UE 5.2-5.4 | UE 5.5-5.7 |
|---------|---------|-------------|-------------|-------------|
| Core pie menu | Yes | Yes | Yes | Yes |
| Graph editor | Yes | Yes | Yes | Yes |
| All Switch nodes | Yes | Yes | Yes | Yes |
| Most action nodes | Yes | Yes | Yes | Yes |
| BP: Component Op | No | Yes | Yes | Yes |
| BP: Component Property | No | Yes | Yes | Yes |
| Custom Code (Python) | Requires plugin | Requires plugin | Requires plugin | Requires plugin |
| Content Browser context menu | No | Yes | Yes | Yes |
| Asset Definition (thumbnails) | No | 5.1+ only | Yes | Yes |

## Notes

- **BP: Component Op** and **BP: Component Property** require the SubobjectEditor module, available in UE 5.0+. On 4.27, these actions are hidden from the menu and registry.
- **Custom Code (Python)** requires the **Python Editor Script Plugin** to be enabled, regardless of UE version.
- **Content Browser context menu** (right-click a graph → "Set as Active Menu") is available in UE 5.0+ only. On 4.27, use Project Settings or the Quick Menu Panel to set the active graph.
- **Asset Definition** (thumbnail overlay in Content Browser) is available in UE 5.1+.
