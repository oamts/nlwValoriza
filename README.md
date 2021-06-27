# NLW Valoriza


## ✨ Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme) 

## 💻 Project

Valoriza is a platform to promote recognition among teammates.

## 🚀 How to run

- Clone the repository
- Run `yarn` to download dependencies
- Run `yarn typeorm migration:run` to create the database tables.
- Run `yarn dev` to start the application.

Finally, the application will be available at `http://localhost:3000`

The listing of the routes can be found in the insomnia.json file

## Rules

- User registration

   [x] It is not allowed to register more than one user with the same email

   [x] It is not allowed to register user without e-mail

- TAG registration
   
   [x] It is not allowed to register an unnamed tag

   [x] It is not allowed to register more than one tag with the same name

   [x] Registration by users who are not administrators is not allowed

- Registration of compliments

   [x] A user is not allowed to register a compliment for themselves

   [x] It is not allowed to register praise for invalid user

   [x] User must be authenticated in the application