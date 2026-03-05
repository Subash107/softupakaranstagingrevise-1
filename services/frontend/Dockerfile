FROM node:24-alpine AS assets
WORKDIR /workspace
COPY . .
RUN npm --global --silent install terser@5 clean-css-cli@5 \
  && find ./js -type f -name "*.js" -exec sh -c 'terser "$1" --compress --mangle --output "$1"' _ {} \; \
  && find . -maxdepth 1 -type f -name "*.css" -exec sh -c 'cleancss -O2 "$1" -o "$1"' _ {} \;

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=assets /workspace /usr/share/nginx/html
