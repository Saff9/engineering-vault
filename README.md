# 📚 Master Computer Science & Software Engineering Vault

<p align="center">
  <a href="https://razorpay.me/@CodeChap?amount=kXxURMaXFk%2Bmrv%2B9uGrYpg%3D%3D" target="_blank">
    <img src="https://img.shields.io/badge/Buy_Me_A_Coffee-☕-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee" />
  </a>
</p>

Welcome to your unified study and engineering workspace! This monorepo consolidates complete curriculums, courses, reference guides, and production templates covering systems programming, database architecture, Python language mastery, modern backend engineering (Flask & FastAPI), and computer science fundamentals.

---

## 🗺️ Master Directory Structure

```
engineering-vault/
├── 00_Mentorship_Logs/                  # Session notes, learning logs & mentorship roadmaps
├── 01_Linux_and_Systems/                # Linux infrastructure, Terminal mastery & WSL2
├── 02_PostgreSQL_and_Databases/         # Relational theory, SQL, pgvector, indexing & DB admin
├── 03_C_and_Low_Level/                  # C11 programming, memory management & data structures
├── 04_Python_Language/                  # Python 3.12+ core language & 25 Standard Library deep dives
│   ├── Python-Core-Vault/               # Python foundations, control flow, OOP, async/await
│   └── Python-Standard-Libraries/       # 25 deep dives: typing, functools, itertools, contextlib, etc.
├── 05_Backend_Engineering/              # Unified Web & API Frameworks
│   ├── Flask/                           # Flask 3.x Reference Manual & 16-chapter course notes
│   │   ├── Flask-Reference-Manual/
│   │   └── Flask-Course-Notes/
│   └── FastAPI/                         # FastAPI Engineering Academy & Fullstack Projects
│       ├── FastAPI-Core-Academy/        # 25 modules: Pydantic V2, SQLAlchemy, Auth, DevOps
│       └── Projects-and-Apps/           # Boardly fullstack app, templates & exercises
├── 06_Computer_Science_and_OOP/         # OOP, SOLID, 23 GoF Design Patterns & CS Theory
├── docs/                                # Centralized documentation site for deployment
├── raw_repos/                           # Untouched original copies of all 4 repositories for safety
├── mkdocs.yml                           # Searchable MkDocs Material configuration
└── .github/workflows/deploy-docs.yml    # Automated CI/CD deployment to GitHub Pages
```

---

## 🚀 Domain Breakdown

### 1. 🐧 [01_Linux_and_Systems](./01_Linux_and_Systems)
* **[linux_infrastructure](./01_Linux_and_Systems/linux_infrastructure)**: 10-module guide covering Linux basics, networking, systemd, security (`iptables`/`ufw`), storage, and monitoring.
* **[terminal_course](./01_Linux_and_Systems/terminal_course)**: Command-line mastery, pipelines, and text processing (`sed`, `awk`, `grep`).
* **[Ubuntu-WSL-Obsidian-Vault](./01_Linux_and_Systems/Ubuntu-WSL-Obsidian-Vault)**: WSL2 environment configuration, Zsh/Tmux setups, and cheatsheets.
* **[Session_Logs/linux.md](./01_Linux_and_Systems/Session_Logs/linux.md)**: Interactive Linux tutorial session log.

---

### 2. 🐘 [02_PostgreSQL_and_Databases](./02_PostgreSQL_and_Databases)
* **[postgreSQL-Masterclass-A-Z](./02_PostgreSQL_and_Databases/postgreSQL-Masterclass-A-Z)**: 23 modular lessons covering schema design, indexing, partitioning, replication, `pgvector` AI embeddings, PgBouncer pooling, and cloud deployments (AWS RDS, GCP, Supabase).
* **[postgresql_tutorial](./02_PostgreSQL_and_Databases/postgresql_tutorial)**: Step-by-step SQL tutorial including ACID, MVCC, CTEs, and Window Functions.
* **[postgresql-mastery-vault](./02_PostgreSQL_and_Databases/postgresql-mastery-vault)**: Structured database vault covering query optimization and `EXPLAIN ANALYZE`.

---

### 3. ⚙️ [03_C_and_Low_Level](./03_C_and_Low_Level)
* **[c_programming_course](./03_C_and_Low_Level/c_programming_course)**: 23 modules covering memory management (`malloc`/`free`), pointer arithmetic, Valgrind leak detection, GDB debugging, and POSIX system calls.
* **Executable Data Structures**: Linked List, BST, Hash Table, Stack, Queue with a production `Makefile`.

---

### 4. 🐍 [04_Python_Language](./04_Python_Language)
* **[Python-Core-Vault](./04_Python_Language/Python-Core-Vault)**: 10 modules covering Python 3.12+ typing, `asyncio.TaskGroup`, `itertools`/`functools`, `tracemalloc`, and PEP 703 GIL removal.
* **[Python-Standard-Libraries](./04_Python_Language/Python-Standard-Libraries)**: 25 deep dives on standard library internals (`typing`, `functools`, `contextlib`, `collections`, `dataclasses`, `itertools`, `pathlib`, `enum`, `asyncio-primitives`, `re`, `logging`).

---

### 5. 🌐 [05_Backend_Engineering](./05_Backend_Engineering)
* **Flask Track**:
  * **[Flask-Reference-Manual](./05_Backend_Engineering/Flask/Flask-Reference-Manual)**: Flask 3.x internals, Application Factories, Blueprints, Security, Task Queues, and fullstack sample apps (Blog App & RESTful Microservices).
  * **[Flask-Course-Notes](./05_Backend_Engineering/Flask/Flask-Course-Notes)**: 16-chapter course from foundations to production deployment.
* **FastAPI Track**:
  * **[FastAPI-Core-Academy](./05_Backend_Engineering/FastAPI/FastAPI-Core-Academy)**: 25 in-depth modules covering Pydantic V2, Async SQLAlchemy 2.0, PostgreSQL, Alembic, JWT & OAuth2, Testing, Celery/Redis, Docker & DevOps.
  * **[Projects-and-Apps](./05_Backend_Engineering/FastAPI/Projects-and-Apps)**: Boardly production portfolio project and architectural templates.

---

### 6. 🧠 [06_Computer_Science_and_OOP](./06_Computer_Science_and_OOP)
* **[OOP](./06_Computer_Science_and_OOP/OOP)**: 9-module vault covering the 4 Pillars, dunder methods, metaclasses, descriptors, protocols, SOLID principles, DDD, Hexagonal Architecture, and 23 GoF Design Patterns rewritten with Python 3.10+ `match / case`.
* **[CS Self-Taught](./06_Computer_Science_and_OOP/CS%20Self-Taught)**: Core CS topics (Algorithms, Data Structures, Operating Systems, Networks, Distributed Systems) and Interview Question Bank.

---

### 7. 🛡️ [raw_repos](./raw_repos)
Contains exact, untouched original copies of all 4 source repositories for safety and historical preservation:
- `raw_repos/learning-material`
- `raw_repos/flask-notes`
- `raw_repos/fastapi-notes`
- `raw_repos/fastapi-libraries`

*(Note: `raw_repos/` is tracked in git but excluded from `docs/` to keep documentation builds clean and lightweight).*

---

## 🌐 Easy Deployment & Viewing

### 1. Automated GitHub Pages (Recommended)
This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy-docs.yml`).
Whenever you push changes to `main`, GitHub Pages automatically builds and publishes the entire searchable site to:
**`https://saff9.github.io/engineering-vault/`**

### 2. Local Preview
To preview the documentation website locally in your browser:
```bash
uv pip install -r requirements.txt
uv run mkdocs serve
```
Open **`http://localhost:8000`** to browse notes with full-text search and dark mode.

---

## ☕ Support the Project

If you find this learning repository valuable, consider supporting the work:

<p align="center">
  <a href="https://razorpay.me/@CodeChap?amount=kXxURMaXFk%2Bmrv%2B9uGrYpg%3D%3D" target="_blank">
    <img src="https://img.shields.io/badge/Buy_Me_A_Coffee-Support_via_Razorpay-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee - Razorpay" />
  </a>
</p>
