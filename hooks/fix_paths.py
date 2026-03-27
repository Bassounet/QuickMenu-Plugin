"""MkDocs hook: convert relative ../img/ paths to absolute /img/ paths
and copy llms files from repo root into the built site."""
import re
import shutil
from pathlib import Path

def on_page_markdown(markdown, page, config, files):
    # Replace any ../img/ or ../../img/ with /img/
    markdown = re.sub(r'(?:\.\./)+img/', '/img/', markdown)
    return markdown

def on_post_build(config):
    """Copy llms.txt and llms-full.txt from repo root into site output."""
    repo_root = Path(config["config_file_path"]).parent
    site_dir = Path(config["site_dir"])
    for name in ("llms.txt", "llms-full.txt"):
        src = repo_root / name
        if src.exists():
            shutil.copy2(src, site_dir / name)
