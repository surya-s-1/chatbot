FROM node:20-alpine
COPY package.json /backend/
COPY . /backend/
WORKDIR /backend
RUN npm install
EXPOSE 8000
CMD ["npm","start"]