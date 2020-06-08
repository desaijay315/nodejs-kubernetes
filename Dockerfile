FROM node:12

ENV PORT 8080

# Create app directory
#RUN mkdir /var/movable/ && mkdir /var/movable/app
WORKDIR '/usr/app'

# Installing dependencies
COPY package*.json ./
RUN npm install



# Copying source files
COPY ./ ./

# Building app
RUN npm run build
#EXPOSE 8080

# Running the app
CMD npm run start