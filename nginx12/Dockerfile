# FROM nginx:alpine
# COPY default.conf /etc/nginx/nginx.conf
# CMD ["nginx", "-g", "daemon off;"]
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

