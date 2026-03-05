# SoftUpakaran Monorepo

SoftUpakaran is a full-stack web application with:
- `services/frontend`: static frontend served by Nginx
- `services/backend`: Node.js API (SQLite-backed)
- `services/django-admin`: optional Django admin service

## Repository Layout

```text
services/
  backend/        # API, auth, tests
  frontend/       # web app (HTML/CSS/JS)
  django-admin/   # admin panel service
docs/             # deployment and architecture docs
infrastructure/   # infra and Terraform config
terraform/        # additional Terraform workspace files
```

## Quick Start (Docker)

```bash
docker compose up -d --build
```

Main URLs:
- Frontend: `http://localhost:8080`
- Backend API: `http://localhost:4000`
- Django Admin service: `http://localhost:8000`

## Development Notes

- Do not commit generated files (`node_modules`, Terraform state/cache, local DB files).
- Keep secrets in local `.env` files only.
- Use the service-level READMEs for deeper setup details:
  - `services/backend/README.md`
  - `services/frontend/README.md`
  - `README_DOCKER.md`
