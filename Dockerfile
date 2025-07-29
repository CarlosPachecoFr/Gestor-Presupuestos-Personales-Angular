# Etapa 1: build de Angular
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: servir con Node.js para SSR
FROM node:20
WORKDIR /app
COPY --from=build /app/dist/gestor-prespuestos-personales/server /app/server
COPY --from=build /app/dist/gestor-prespuestos-personales/browser /app/browser
COPY package*.json ./
RUN npm install --production
EXPOSE 4000
CMD ["node", "server/server.mjs"]