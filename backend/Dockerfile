FROM node:20-alpine
COPY package.json /backend/
COPY . /backend/
WORKDIR /backend
ENV PORT=8000
ENV DATABASE_URL=mongodb://mongodb:27017
RUN npm install
EXPOSE 8000
CMD ["npm","start"]