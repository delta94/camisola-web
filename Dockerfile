# Stage 1 - the build process
FROM node:14.8.0-alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm audit fix
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.19-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]