Docker Container Storage - Mounts | Command Summary

Excellent job on completing this section on storage and mounts with Docker containers. Knowing how to persist data across multiple containers and back to the host machine is crucial so that we can access the important information generated within containers.

In this section, we covered three approaches to docker container storage.

The volume mount persists data across containers by storing data in a docker-managed directory on the host machine. This is valuable when you need to hold on to container-created data, even if the container is removed.

The bind mount takes a directory from the host machine and maps them to container directories. This helps when you need to constantly update a directory on the Docker host machine that contains valuable files for containers.

The tmpfs mount is unique since data in this kind of directory only lasts during the lifetime of the running container using it. The tmpfs mount is beneficial when you need to use secret data like passwords.

Next, we’ll learn how to use multiple containers simultaneously. We’ll discover how to multiple containers can and should interact. By having more than one container to work with, we’ll dive into more advanced features and concepts. Not to mention, we’ll build more complex and capable applications with Docker!

In the meantime, here’s a summary of the Docker commands we have mainly used so far:

Docker Containers

Create an interactive terminal container with a name, an image, and a default command:

Usage: docker create -it --name=<name> <image> <command>

Example: docker create -it --name=foo ubuntu bash

List all running containers:

docker container ls

(list all containers, running or not): docker container ls -a

Start a docker container:

Usage: docker start <container name/id>

Example: docker start foo

Attach to a docker container:

Usage: docker attach <container name/id>

Example: docker attach foo

Remove a container:

Usage: docker rm <container name/id>

Example: docker rm foo

Force remove: docker rm foo -f

Run a new container:

Usage: docker run <image> <command>

Example with options: docker run --name=bar -it ubuntu bash

Remove all containers:

docker container ls -aq | xargs docker container rm

Execute a command in a running container:

Usage: docker exec <container name/id> <command>

Example (interactive, with tty): docker exec -it express bash

Docker Images

Remove a docker image:

Usage: docker image rmi <image id>

Example (only uses first 3 characters of image id): docker rmi 70b

Remove all images:

docker image ls -aq | xargs docker rmi -f

Search for a docker image on dockerhub:

Usage: docker search <image>

Example: docker search ubuntu

List docker images:

docker image ls

Build a Docker image:

Usage: docker build <path>

Example (also tags and names the build): docker build . -t org/serve:0.0.0

Dockerfiles

Specify a base image:

Usage: FROM <base image>

Example: FROM node:latest

Set a working directory for the container:

Usage: WORKDIR <dir>

Example: WORKDIR /usr/src/app

Run a command for the container image:

Usage: RUN command

Command: RUN npm install -g serve

Copy files into the container:

Usage: COPY <local files/directories> <container files/directories>

Example: COPY ./display ./display

Inform that a port should be exposed

Usage: EXPOSE <port>

Example: EXPOSE 80

Specify a default command for the container:

Usage (shell format): CMD <default command>

Example: CMD serve ./display

Usage (exec format, recommended): CMD [“default command”, “arguments”]

Example: CMD [“node”, “server.js”]

Cross-Container Storage

Volumes

Create a volume

Usage: docker volume create <volume name>

Example: docker volume create shared-vol

Inspect a volume

Usage: docker volume inspect <volume name>

Example: docker volume inspect shared-vol

Mount a container with a volume using docker run

Usage: --mount source=<volume name>, target=<container dir>

Example:

docker run -it --name=foo --mount source=shared-vol,target=/src/shared ubuntu bash

Bind Mounts

Mount a container with a bind mount using docker run

Usage: --mount type=bind source=<host dir>, target=<container dir>

Example:

docker run -it --name=foo --mount type=bind source=/Users/foo/bindmountdir, \

target=/src/mountdir ubuntu bash

Tmpfs mounts

Mount a container with a tmpfs mount using docker run

Usage: --mount type=tmpfs, destination=<container dir>

Example:
docker run -it --name=baz --mount type=tmpfs, destination=/tmpdir ubuntu bash

