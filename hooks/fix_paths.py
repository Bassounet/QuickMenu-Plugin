"""MkDocs hook: convert relative ../img/ paths to absolute /img/ paths."""
import re

def on_page_markdown(markdown, page, config, files):
    # Replace any ../img/ or ../../img/ with /img/
    markdown = re.sub(r'(?:\.\./)+img/', '/img/', markdown)
    return markdown
