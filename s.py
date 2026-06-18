#!/usr/bin/env python3

"""
==============================================================
PROJECT STRUCTURE EXTRACTOR
==============================================================

This script scans your ENTIRE project recursively and creates:

    structure.txt

inside your ROOT project folder.

It generates a clean architecture/tree structure like:

project/
├── backend/
│   ├── api/
│   │   └── auth.py
│   └── main.py
├── frontend/
│   └── package.json
└── README.md

==============================================================
USAGE
==============================================================

1. Save this file as:

    extract_structure.py

2. Place it in your PROJECT ROOT

3. Run:

    python extract_structure.py

4. It creates:

    structure.txt

==============================================================
"""

import os
from pathlib import Path

# ==========================================================
# CONFIGURATION
# ==========================================================

# Root project directory
ROOT_DIR = Path(".").resolve()

# Output file
OUTPUT_FILE = ROOT_DIR / "structure.txt"

# Ignore directories
IGNORE_DIRS = {
    ".git",
    "__pycache__",
    "node_modules",
    ".next",
    ".nuxt",
    ".venv",
    "venv",
    "env",
    "dist",
    "build",
    ".idea",
    ".vscode",
    ".pytest_cache",
    ".mypy_cache",
    ".cache",
    ".turbo",
    "coverage",
    ".sass-cache",
    ".parcel-cache",
}

# Ignore files
IGNORE_FILES = {
    ".DS_Store",
    "Thumbs.db",
}

# Ignore extensions
IGNORE_EXTENSIONS = {
    ".pyc",
    ".pyo",
    ".log",
    ".tmp",
    ".lock",
}

# ==========================================================
# HELPERS
# ==========================================================

def should_ignore(path: Path) -> bool:
    """
    Check whether a file/folder should be ignored.
    """

    name = path.name

    # Ignore directories
    if path.is_dir() and name in IGNORE_DIRS:
        return True

    # Ignore files
    if name in IGNORE_FILES:
        return True

    # Ignore extensions
    if path.suffix.lower() in IGNORE_EXTENSIONS:
        return True

    return False


# ==========================================================
# TREE GENERATOR
# ==========================================================

def generate_tree(directory: Path, prefix: str = ""):
    """
    Recursively generate project tree.
    """

    lines = []

    try:
        entries = sorted(
            [e for e in directory.iterdir() if not should_ignore(e)],
            key=lambda x: (x.is_file(), x.name.lower())
        )

    except PermissionError:
        return [prefix + "└── [Permission Denied]"]

    total_entries = len(entries)

    for index, entry in enumerate(entries):

        connector = "└── " if index == total_entries - 1 else "├── "

        # ==================================================
        # DIRECTORY
        # ==================================================

        if entry.is_dir():

            lines.append(f"{prefix}{connector}{entry.name}/")

            extension = "    " if index == total_entries - 1 else "│   "

            sub_tree = generate_tree(
                entry,
                prefix + extension
            )

            lines.extend(sub_tree)

        # ==================================================
        # FILE
        # ==================================================

        else:
            lines.append(f"{prefix}{connector}{entry.name}")

    return lines


# ==========================================================
# MAIN
# ==========================================================

def main():

    print("=" * 60)
    print("PROJECT STRUCTURE EXTRACTOR")
    print("=" * 60)

    print("\nScanning project...\n")

    tree_lines = generate_tree(ROOT_DIR)

    # Final structure text
    structure = ROOT_DIR.name + "/\n"
    structure += "\n".join(tree_lines)

    # Save structure.txt
    with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
        file.write(structure)

    print("DONE!")
    print(f"\nCreated file:")
    print(f"  {OUTPUT_FILE}")

    print("\nTotal lines written:", len(tree_lines))

    print("\n" + "=" * 60)


# ==========================================================
# ENTRY POINT
# ==========================================================

if __name__ == "__main__":
    main()