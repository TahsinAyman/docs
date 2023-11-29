FROM nginx:latest
COPY ./docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80