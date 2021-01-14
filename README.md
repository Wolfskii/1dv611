# Customer portal for Kalmar Energi

## Versions

#### Server
Ubuntu: 18.04.4 LTS  

#### Backend
Node: 12.16.2  
Npm: 6.13.4  
Docker: 19.03.8  

#### Frontend
Angular/CLI: 9.1.0

## Frontend

### Development environment

Pre-requisites: You need Node.js and npm installed globally on your local machine.

In order to start a local development environment for the frontend application, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the `~/frontend/kalmar-energi` directory.
3. Install all required dependencies with the `npm install` command.
3. Start a local server with the `ng serve` command. The terminal should tell you to navigate to
`http://localhost:4200` when the server is started. Alternatively, append the `--open` flag to
automatically open a browser window and go to localhost when the server is started
(i.e. `ng serve --open`).

### Angular Material UI components

#### How to add new Angular Material components

The frontend application utilizes the Angular Material library for UI components. In order to
add new components, each component need to be imported to the Angular project separately. This
is all handled in the `material.ts` file, which is exported as a module and then imported in
the `app.module.ts` file.

This is how you add a new component from the Angular Material UI library.

1. Go to [the Angular Material documentation](https://material.angular.io/).
2. Click on 'Components' and then find the component you wish to add.
3. Select the API tab of the chosen component's documentation and copy the import statement that
ususally is visible at the top of the API tab.
4. Open the `material.ts` file.
5. Paste the import statement after the other material component imports.
6. Add the imported class name to the imports and the exports arrays right before the row where
the `MaterialModule` class is exported.
7. You can now use the Angular Material module in any component by using the selector for that
component (the selector can be found at the Angular Material documentation).

## Backend

### Instructions for generating RSA keys

The RSA keys are used to crypt and decrypt the JWT used for the login system.

`ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key`  
IMPRORTANT: Do not enter any "passphrase"  

`openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub`

Two files will have been generated: jwtRS256.key and jwtRS256.key.pub. 
Store these files in /backend.

### Instructions for .env viariables.
There is a file in /backend called "sample-env.env". This file has fields for the variables that needs to be set in order for the application to work.  
Example:
> CUSTOMERPROFILE_URL={url with the endpoint for getting a customer by code}    

should be replaced with  

> CUSTOMERPROFILE_URL=http://ExampleURLToCustomerProfile.com/Enpoint/To/CustomerProfile  

After completing these fields, the name of the file should be removed and only the extension name should be kept, so the file is named ".env".

### Setup Docker image and container.
To start the backend as a docker container navigate to /backend and run these commands.

`npm run docker-build`
This command is for building the image from the Dockerfile in /backend, this creates an docker-image called "dev-kalmar-energi/backend". This command is only needed if there is no image named "dev-kalmar-energi/backend". The image exposes the port 8080.

`npm run docker-run`
To create a container from the image "dev-kalmar-energi/backend" in interactive mode, with a volume set to the working directory (in this case /backend). The name om the container is set to "DEV-kalmar-energi-server". This command also starts the container. This command is only needed if there is no container named "DEV-kalmar-energi-server". Port 8080 in the container is mapped to port 8080 on host machine.

`npm run docker-start`
Command for starting the the container namend "DEV-kalmar-energi-server" in interactive mode.

`npm run docker-stop`
Command for stopping the container named "DEV-kalmar-energi-server".

### Testing

There are unit and integration tests in both the frontend and backend.

#### Backend

The backend uses a combination of Supertest (for REST/API-testing), Mocha and Chai. To run the tests, first stand in the backend directory and then enter "npm test" in the console.

##### Test result (updated 28/5 2020)

![result of frontend tests](https://i.imgur.com/JmVxjkm.png)

#### Frontend

The frontend uses a combination of Jasmine and Karma to test the Angular components. To run the tests, first stand in the frontend directory and then enter "ng test" in the console.

##### Test result (updated 28/5 2020)

![result of frontend tests](https://i.imgur.com/1jAs2eU.png)
