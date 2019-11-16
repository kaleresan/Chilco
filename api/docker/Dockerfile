# Building Image
ARG BUILDING_IMAGE

# PULL IMAGE
FROM $BUILDING_IMAGE AS builder
FROM node:alpine

# Arguments
ARG SERVICE_NAME
ARG WORKDIR="/home/api"

# Enviorment
ENV work ${WORKDIR}
ENV service ${SERVICE_NAME}

RUN mkdir ${work}

WORKDIR ${work}
COPY --from=builder ${work} .

CMD node $work/packages/$service/lib/server.js
