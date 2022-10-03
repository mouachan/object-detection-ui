# Install the application dependencies in a full UBI Node docker image
FROM registry.access.redhat.com/ubi8/nodejs-14:latest

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production
RUN npm i -D crossorigin-webpack-plugin

# Copy the dependencies into a minimal Node.js image
#FROM registry.access.redhat.com/ubi8/nodejs-14-minimal:latest

# Install app dependencies
#COPY --from=0 /opt/app-root/src/node_modules /opt/app-root/src/node_modules
COPY . /opt/app-root/src

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080
ENTRYPOINT ["npm", "start"]