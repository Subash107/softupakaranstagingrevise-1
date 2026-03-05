FROM python:3.13-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Ensure system CA certificates and build deps are installed so pip can verify HTTPS
# and allow building wheels for packages that require compilation (e.g. psycopg2)
RUN apt-get update \
	&& apt-get install -y --no-install-recommends ca-certificates build-essential libpq-dev \
	&& rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
# Upgrade packaging tools then install Python deps
RUN python -m pip install --upgrade --trusted-host pypi.org --trusted-host files.pythonhosted.org pip setuptools wheel \
	&& pip install --no-cache-dir --trusted-host pypi.org --trusted-host files.pythonhosted.org -r requirements.txt

COPY . .

# Create a non-root user and give ownership of the app directory
RUN useradd --create-home --shell /bin/bash django \
	&& chown -R django:django /app

USER django

CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
