# Version Compatibility

Quick Menu supports Unreal Engine 5.0 through 5.8.

## Feature Support by Version

| Feature | UE 5.0-5.1 | UE 5.2-5.4 | UE 5.5-5.8 |
|---------|-------------|-------------|-------------|
| Core pie menu | Yes | Yes | Yes |
| Graph editor | Yes | Yes | Yes |
| All Switch nodes | Yes | Yes | Yes |
| All action nodes | Yes | Yes | Yes |
| Custom Code (Python) | Requires plugin | Requires plugin | Requires plugin |
| Content Browser context menu | Yes | Yes | Yes |
| Asset Definition (thumbnails) | 5.1+ only | Yes | Yes |
| Sequencer Op: Toggle Curve Editor / Create Camera + Cut Track *(1.0.7)* | Yes | Yes | Yes |
| Property Clipboard *(1.0.7)* | Yes | Yes | Yes |
| Setup Transfer (`.qmsetup`) *(1.0.7)* | Yes | Yes | Yes |

## Notes

- **Custom Code (Python)** requires the **Python Editor Script Plugin** to be enabled, regardless of UE version.
- **Asset Definition** (thumbnail overlay in Content Browser) is available in UE 5.1+.
- The two 1.0.7 **Sequencer operations** behave identically across the whole range but route differently internally: direct `ISequencer` / `FSequencerUtilities` APIs on 5.7+, native Sequencer command bindings on older engines.
- **`.qmsetup` files are cross-version**: a setup exported from a UE 5.8 project imports cleanly into a UE 5.0 project.
