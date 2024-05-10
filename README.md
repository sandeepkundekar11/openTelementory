User Guide

This guide will walk you through the steps to run both the frontend and backend .

Clone the Projet.

        Command to clone the Project, 
        - git clone https://github.com/sandeepkundekar11/openTelementory.git


Step 1. Running the Backend
       
       Prerequisites
       Ensure you have Node.js installed on your machine.
       
       1) Open a new terminal window.
       2) Navigate to the directory where the backend code is located.
       3) Install dependencies by running the following command:
              - npm install
       4) After the installation is complete, start the backend server by running:
              - npm run dev  
       5) After that  backend will be running on http://localhost:8000 



Step 2. Running the Frontend

        Prerequisites
        Ensure you have Node.js installed on your machine.

        1) Open a terminal window.
        2) Navigate to the directory where the frontend code is located.
        3) Install dependencies by running the following command:
                - npm install
        4) After the installation is complete, start the frontend server by running:
                - npm run start
        5) navigate to http://localhost:1234 in your browser





Step 3. Running Zipkin distributed tracing system

        Prerequisites
        Ensure you have Docker installed on your machine.
        
       * What is Docker?
       -Docker simplifies software development by creating virtual containers that package applications and their dependencies. 
        These containers ensure consistency across different environments, making it easy to develop, test, and deploy applications. 
        With Docker, developers can build, ship, and run applications seamlessly on any system with Docker installed

        1) Open a terminal window and run the docker zipkin container by running:
                - docker run -d -p 9411:9411 openzipkin/zipkin 
        2) After that navigate to http://localhost:9411/zipkin/ in your browser

        ---------------

        To run Zipkin without Docker, follow the steps outlined in the Zipkin Quickstart Guide https://zipkin.io/pages/quickstart.




