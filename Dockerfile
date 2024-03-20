# Estágio de construção
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build

# Estágio de execução
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main"]
