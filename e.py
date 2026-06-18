

import os
import fnmatch

# =========================================================
# CONFIG
# =========================================================

SKIP_DIRS = {
    "node_modules",
    ".git",
    "__pycache__",
    "dist",
    "build",
    ".next",
    "coverage",
    "venv",
    ".venv",
    ".idea",
    ".vscode"
}

SKIP_FILES = {
    "plain.txt",
    "frontend.txt",
    "backend.txt",
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    ".DS_Store"
}

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB


# =========================================================
# MODULE FILE MAPPINGS
# =========================================================

MODULES = {
    "module1.txt": [
        "backend/models/user.py",
        "backend/models/organization.py",
        "backend/middleware/auth.py",
        "backend/middleware/tenant.py",
        "backend/api/auth.py",
        "backend/api/organizations.py",
        "backend/schemas/user.py",
        "backend/schemas/organization.py",
        "backend/schemas/common.py",
        "backend/database.py",
        "frontend/store/authStore.ts",
        "frontend/store/orgStore.ts",
        "frontend/lib/api.ts",
        "frontend/types/*"
    ],

    "module2.txt": [
        "backend/integrations/*",
        "backend/api/integrations.py",
        "frontend/app/api/callback/*",
        "frontend/components/integrations/*"
    ],

    "module3.txt": [
        "backend/scanner/*",
        "backend/api/scans.py",
        "backend/api/findings.py",
        "backend/celery/tasks/scan_task.py"
    ],

    "module4.txt": [
        "backend/orchestrator/*",
        "backend/fixer/*",
        "backend/llm/*",
        "backend/api/remediations.py",
        "frontend/components/remediation/*"
    ],

    "module5.txt": [
        "backend/models/control.py",
        "backend/models/policy.py",
        "backend/api/controls.py",
        "backend/api/policies.py",
        "frontend/app/frameworks/*",
        "frontend/app/policies/*",
        "frontend/components/policies/*"
    ],

    "module6.txt": [
        "backend/payments/*",
        "backend/api/billing.py",
        "frontend/app/api/stripe/webhook/*",
        "frontend/app/dashboard/billing/*"
    ],

    "module7.txt": [
        "backend/admin/*",
        "backend/api/admin.py",
        "frontend/app/admin/*",
        "frontend/components/admin/*"
    ],

    "module8.txt": [
        "backend/models/vendor.py",
        "backend/api/vendors.py",
        "frontend/app/vendors/*",
        "frontend/components/vendors/*"
    ],

    "module9.txt": [
        "backend/fixer/document/*",
        "backend/api/evidence.py",
        "backend/api/reports.py",
        "frontend/app/evidence/*",
        "frontend/app/reports/*"
    ],

    "module10.txt": [
        "backend/api/trust_center.py",
        "frontend/app/trust/*",
        "frontend/app/trust-center/*",
        "frontend/components/trust-center/*"
    ],

    "module11.txt": [
        "frontend/components/ui/*",
        "frontend/components/layout/*",
        "frontend/components/shared/*",
        "frontend/app/globals.css",
        "frontend/tailwind.config.js"
    ],

    "module12.txt": [
        "backend/schemas/*",
        "backend/utils/*",
        "frontend/types/*",
        "frontend/lib/constants.ts",
        "frontend/lib/utils.ts"
    ],

    "module13.txt": [
        "backend/celery/*",
        "backend/workers/*",
        "infra/*",
        ".github/workflows/*",
        "docker-compose.yml"
    ],

    "module14.txt": [
        "backend/migrations/*",
        "backend/tests/*",
        "backend/seed/*"
    ],

    "module15.txt": [
        "backend/prompts/*",
        "backend/rules/*"
    ]
}


# =========================================================
# HELPERS
# =========================================================

def should_skip_dir(dirname):
    return dirname in SKIP_DIRS


def should_skip_file(filename):
    return filename in SKIP_FILES


def write_file_content(outfile, file_path, ROOT):
    relative_path = os.path.relpath(file_path, ROOT)

    outfile.write("\n" + "=" * 80 + "\n")
    outfile.write(f"FILE: {relative_path}\n")
    outfile.write("=" * 80 + "\n")

    try:
        if os.path.getsize(file_path) > MAX_FILE_SIZE:
            outfile.write("SKIPPED: FILE TOO LARGE\n")
            return

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

            if content.strip():
                outfile.write(content + "\n")
            else:
                outfile.write("NULL\n")

    except UnicodeDecodeError:
        outfile.write("BINARY/NON-UTF8 FILE SKIPPED\n")

    except Exception as e:
        outfile.write(f"ERROR READING FILE: {e}\n")


# =========================================================
# GENERATE FULL PROJECT
# =========================================================

def generate_full_txt(target_folder, output_filename):
    ROOT = os.getcwd()

    target_path = os.path.join(ROOT, target_folder) if target_folder else ROOT
    output_path = os.path.join(ROOT, output_filename)

    with open(output_path, "w", encoding="utf-8") as outfile:

        for root, dirs, files in os.walk(target_path):

            dirs[:] = [d for d in dirs if not should_skip_dir(d)]

            for file in files:

                if should_skip_file(file):
                    continue

                file_path = os.path.join(root, file)

                write_file_content(outfile, file_path, ROOT)

    print(f"✅ Generated {output_filename}")


# =========================================================
# GENERATE MODULE TXT
# =========================================================

def generate_module_txt(output_filename, patterns):
    ROOT = os.getcwd()

    with open(output_filename, "w", encoding="utf-8") as outfile:

        for pattern in patterns:

            pattern_path = os.path.join(ROOT, pattern)

            # Handle wildcard paths
            if "*" in pattern:

                base_dir = pattern.split("*")[0]

                if not os.path.exists(base_dir):
                    continue

                for root, dirs, files in os.walk(base_dir):

                    dirs[:] = [d for d in dirs if not should_skip_dir(d)]

                    for file in files:

                        if should_skip_file(file):
                            continue

                        full_path = os.path.join(root, file)

                        relative = os.path.relpath(full_path, ROOT)

                        if fnmatch.fnmatch(relative, pattern):
                            write_file_content(outfile, full_path, ROOT)

            else:
                full_path = os.path.join(ROOT, pattern)

                if os.path.isfile(full_path):
                    write_file_content(outfile, full_path, ROOT)

    print(f"✅ Generated {output_filename}")


# =========================================================
# MAIN
# =========================================================

if __name__ == "__main__":

    print("\n📝 Generating full project files...\n")

    generate_full_txt("", "plain.txt")
    generate_full_txt("frontend", "frontend.txt")
    generate_full_txt("backend", "backend.txt")

    print("\n🧩 Generating module files...\n")

    for module_file, patterns in MODULES.items():
        generate_module_txt(module_file, patterns)

    print("\n🎉 ALL FILES GENERATED SUCCESSFULLY")


















