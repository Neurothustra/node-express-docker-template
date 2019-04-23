# node-express-docker-template

A starter template for running a node/express app inside Docker.

## Getting Started

It's a simple app using node, typescript, nodemon to run inside of Docker Containers. There is a todo file that lists additional functionality that will be added.
run the docker-compose build command in the cli, then docker-compose up to start the server. To see it in the browser, add your system's IPv4 (find it with ipconfig)
then append the app's port, 8080

TypeScript files do not currently autocompile. In order to compile, attach a shell to the running container and run the tsc command

### Prerequisites

[Docker](https://www.docker.com/) - [Docker Machine](https://docs.docker.com/machine/install-machine/) (not required if you can enable Hyper-V on Windows OS)

## Authors

- **Bill Ahern** - _Initial work_ - [Neurothustra](https://github.com/neurothustra)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- no one yet, but i've got some people in mind
