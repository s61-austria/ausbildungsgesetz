FROM nginx
COPY . /usr/share/nginx/html

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils nodejs
RUN apt-get -y install npm