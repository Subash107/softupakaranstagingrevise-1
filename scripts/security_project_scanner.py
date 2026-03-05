import os
import re
import csv
import math
from datetime import datetime

BACKUP_DIR = r"D:\backup"

IGNORE_DIRS = {
    "node_modules",
    ".git",
    "venv",
    "__pycache__",
    "dist",
    "build"
}

ALLOWED_CODE_EXTENSIONS = [
    ".py", ".js", ".ts", ".java", ".kt",
    ".env", ".yml", ".yaml", ".json",
    ".php", ".rb", ".go", ".cs"
]

SUSPICIOUS_PATTERNS = {
    "Hardcoded Password": {
        "pattern": r"password\s*=\s*['\"].{4,}['\"]",
        "severity": "HIGH"
    },
    "JWT Secret": {
        "pattern": r"jwt[_-]?secret\s*=\s*['\"].{8,}['\"]",
        "severity": "HIGH"
    },
    "Debug Enabled": {
        "pattern": r"debug\s*=\s*true",
        "severity": "MEDIUM"
    },
    "Private Key": {
        "pattern": r"-----BEGIN PRIVATE KEY-----",
        "severity": "CRITICAL"
    },
    "AWS Access Key": {
        "pattern": r"AKIA[0-9A-Z]{16}",
        "severity": "CRITICAL"
    },
    "AWS Secret Key": {
        "pattern": r"aws_secret_access_key\s*=\s*['\"][A-Za-z0-9/+=]{40}['\"]",
        "severity": "CRITICAL"
    },
    "GitHub Token": {
        "pattern": r"ghp_[A-Za-z0-9]{36}",
        "severity": "CRITICAL"
    }
}


def calculate_entropy(data):
    if not data:
        return 0
    entropy = 0
    for x in set(data):
        p_x = float(data.count(x)) / len(data)
        entropy -= p_x * math.log2(p_x)
    return entropy


def scan_project(project_path):
    findings = []

    for root, dirs, files in os.walk(project_path):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        for file in files:
            if not any(file.lower().endswith(ext) for ext in ALLOWED_CODE_EXTENSIONS):
                continue

            file_path = os.path.join(root, file)

            try:
                with open(file_path, "r", errors="ignore") as f:
                    for line_number, line in enumerate(f, start=1):

                        # Pattern-based detection
                        for issue, data in SUSPICIOUS_PATTERNS.items():
                            if re.search(data["pattern"], line):
                                findings.append([
                                    datetime.now().isoformat(),
                                    issue,
                                    data["severity"],
                                    file_path,
                                    line_number
                                ])

                        # TODO detection
                        if "TODO" in line or "FIXME" in line:
                            findings.append([
                                datetime.now().isoformat(),
                                "TODO/FIXME Found",
                                "LOW",
                                file_path,
                                line_number
                            ])

                        # Entropy detection (long suspicious strings)
                        tokens = re.findall(r"[A-Za-z0-9+/=]{20,}", line)
                        for token in tokens:
                            entropy = calculate_entropy(token)
                            if entropy > 4.5:
                                findings.append([
                                    datetime.now().isoformat(),
                                    "High Entropy String",
                                    "HIGH",
                                    file_path,
                                    line_number
                                ])

            except Exception:
                pass

    return findings


def calculate_risk_score(findings):
    score = 0
    severity_weight = {
        "CRITICAL": 10,
        "HIGH": 5,
        "MEDIUM": 3,
        "LOW": 1
    }

    for f in findings:
        score += severity_weight.get(f[2], 0)

    return score


def save_csv_report(findings):
    os.makedirs(BACKUP_DIR, exist_ok=True)

    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    csv_path = os.path.join(BACKUP_DIR, f"security_report_{timestamp}.csv")

    with open(csv_path, "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["Timestamp", "Issue Type", "Severity", "File Path", "Line"])
        writer.writerows(findings)

    return csv_path


def save_html_report(findings, risk_score):
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    html_path = os.path.join(BACKUP_DIR, f"security_report_{timestamp}.html")

    severity_color = {
        "CRITICAL": "red",
        "HIGH": "orange",
        "MEDIUM": "blue",
        "LOW": "gray"
    }

    with open(html_path, "w", encoding="utf-8") as f:
        f.write("<html><head><title>Security Report</title></head><body>")
        f.write(f"<h1>Project Security Report</h1>")
        f.write(f"<h2>Risk Score: {risk_score}</h2>")
        f.write("<table border='1' cellpadding='5'>")
        f.write("<tr><th>Timestamp</th><th>Issue</th><th>Severity</th><th>File</th><th>Line</th></tr>")

        for row in findings:
            color = severity_color.get(row[2], "black")
            f.write(
                f"<tr>"
                f"<td>{row[0]}</td>"
                f"<td>{row[1]}</td>"
                f"<td style='color:{color}'>{row[2]}</td>"
                f"<td>{row[3]}</td>"
                f"<td>{row[4]}</td>"
                f"</tr>"
            )

        f.write("</table></body></html>")

    return html_path


if __name__ == "__main__":
    project_folder = input("Enter full project path to scan: ").strip()

    if not os.path.exists(project_folder):
        print("Invalid path.")
    else:
        print("Scanning project...")
        results = scan_project(project_folder)
        risk_score = calculate_risk_score(results)

        csv_report = save_csv_report(results)
        html_report = save_html_report(results, risk_score)

        print(f"\n[+] CSV Report saved to: {csv_report}")
        print(f"[+] HTML Report saved to: {html_report}")
        print(f"[+] Total Issues Found: {len(results)}")
        print(f"[+] Risk Score: {risk_score}")