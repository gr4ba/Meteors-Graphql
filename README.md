# Meteors - Graphql

In this repository, the NASA API is used to verify which meteorites are close to the earth and in the same way to determine their characteristics, such as whether they are dangerous, size, state, etc.

---
## Requeriments

For development, you will only need Node.js and a node global package.

### Node
- ### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- ### Node installation on Ubuntu
    You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

- ### Other Operating Systems
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.
    
    $ node --version
    v.16.15.0

    $ npm --version
    9.1.3

---
## Install

    $ git clone https://github.com/JDiegox86/Meteors-Graphql.git
    $ cd Meteors-Graphql
    $ npm install nodemon graphql graphql-yoga node-fetch

## Running the project 

    $ npm start

## Display

* http://localhost:4000/graphql

---

## Used tools
| Node.js    | Nodemon  | Graphql     |  Graphql-yoga | Node-Fetch  | 
|------------| -------- |------------ |---------------|-------------|
|![nodejs]| ![nodemon] |  ![graphql]  | ![graphql-yoga]   | ![node-fetch]             |

[nodejs]: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png
[nodemon]: https://static.javatpoint.com/blog/images/nodemon.png
[graphql]: https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png
[graphql-yoga]: https://res.cloudinary.com/apideck/image/upload/v1652998222/icons/graphql-yoga.jpg
[node-fetch]: https://raw.githubusercontent.com/node-fetch/node-fetch/HEAD/docs/media/Banner.svg