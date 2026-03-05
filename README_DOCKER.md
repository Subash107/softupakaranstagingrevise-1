# Run everything with Docker Compose (from this folder)

```powershell
docker compose up --build
```

- Frontend: http://localhost:8085
- Backend API: http://localhost:4000
- Backend health: http://localhost:4000/api/health
- Public settings (WhatsApp + eSewa QR URL): http://localhost:4000/api/public/settings
- Django admin: http://localhost:8000/admin/ (run `docker compose run --rm django_admin python manage.py createsuperuser` first to register an admin)

## Deploy backend on Render
1) Create a new Render Web Service and connect this repo.
2) Use `render.yaml` at the repo root (it sets build/start commands + env vars).
3) After deploy, set the frontend API base to your Render URL (e.g. https://your-service.onrender.com).

## Default admin (created automatically)
- Email: admin@softupakaran.local
- Password: admin12345

## AI assistant (optional)
- Set `OPENAI_API_KEY` before running `docker compose up` if you want the AI chat to reach OpenAI; otherwise the panel falls back to canned responses.
- You can override the model with `OPENAI_MODEL` (default `gpt-4o-mini`) and tweak the prompt via `OPENAI_SYSTEM_PROMPT` for your brand voice.
 - The Django admin service mounts the same `services/backend/data/softupakaran.db` file (via `DJANGO_DB_PATH`), so you can inspect the live data alongside Node.
