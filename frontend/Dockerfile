FROM node:20-alpine
COPY package.json /frontend/
COPY . /frontend/
WORKDIR /frontend
ENV API_URL=http://localhost:8000
RUN npm install
EXPOSE 3000
CMD ["npm","start"]