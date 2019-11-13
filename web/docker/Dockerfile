# Building Image
ARG BUILDING_IMAGE

# PULL IMAGE
FROM $BUILDING_IMAGE AS builder
FROM nginx

# Arguments
ARG APP_NAME
ARG WORKDIR="/usr/share/nginx/html/app"

# Enviorment
ENV work ${WORKDIR}
ENV app ${APP_NAME}

RUN mkdir ${work}

WORKDIR ${work}
COPY --from=builder /home/app/packages/${APP_NAME}/build .

EXPOSE 80
RUN rm -rf /etc/nginx/conf.d
COPY --from=builder /home/app/nginx /etc/nginx
CMD ["nginx", "-g", "daemon off;"]
