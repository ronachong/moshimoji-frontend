FROM node:8-alpine

# Add `package.json` to build Debian compatible NPM packages

WORKDIR /src
RUN mkdir moshimoji-frontend
WORKDIR /src/moshimoji-frontend
ADD package.json .

# The official image has verbose logging; change it to npm's default
ENV NPM_CONFIG_LOGLEVEL notice

# Install everything (and clean up afterwards)
RUN apk add --no-cache --virtual .gyp \
    autoconf \
    automake \
    g++ \
    libpng-dev \
    libtool \
    make \
    nasm \
    python \
    git \
  && npm i \
  && apk del .gyp


# Add the remaining project files
ADD . .

# Set the default host/port
ENV HOST 0.0.0.0
ENV PORT 4000

# Build distribution
ARG STAGE
RUN STAGE=${STAGE} npm run build

# Start the server by default
CMD npm run server
