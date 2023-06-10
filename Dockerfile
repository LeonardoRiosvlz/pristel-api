FROM node:16


COPY package*.json tsconfig*.json ./
RUN yarn install
COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 4000
CMD npm run start