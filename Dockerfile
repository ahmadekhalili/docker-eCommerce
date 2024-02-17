FROM python:3.8-slim-bullseye
WORKDIR /project
RUN apt-get update && \
    apt-get install -y unzip curl && \
    apt-get install -y python3-dev libpq-dev gcc  && \
    apt-get install -y postgresql-server-dev-all postgresql-client
RUN curl -L https://github.com/ahmadekhalili/eCommerce-web-api/archive/refs/heads/master.zip -o repo-main.zip \
    && unzip repo-main.zip -d /tmp \
    && mv /tmp/eCommerce-web-api-master .
RUN pip install psycopg2
RUN pip install --no-cache-dir -r eCommerce-web-api-master/ictsun/requirements.txt