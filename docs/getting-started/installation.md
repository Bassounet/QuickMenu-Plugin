# Installation

## From Fab

1. Get Quick Menu on [Fab](https://www.fab.com/) <!-- TODO: add real link -->
2. In the Epic Games Launcher, go to **Library → Vault**
3. Click **Install to Engine** and select your UE version
4. Open your project in the editor
5. Go to **Edit → Plugins**, search for "Quick Menu", and enable it
6. Restart the editor when prompted

## Manual Installation

1. Download the plugin archive
2. Extract to your project's `Plugins/` folder:
   ```
   YourProject/
   └── Plugins/
       └── QuickMenu/
           ├── QuickMenu.uplugin
           ├── Source/
           ├── Content/
           └── Resources/
   ```
3. Open your project — the plugin will be compiled automatically
4. Verify: **Edit → Plugins** → search "Quick Menu" → should show as enabled

## Verify Installation

Press **V** in the viewport. If Quick Menu is installed but no graph is set as active, you'll see a prompt to create one.

## Next Steps

- [Create your first wheel](first-wheel.md)
