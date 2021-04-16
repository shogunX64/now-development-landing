# NowDevelopment Lab. landing page & contact form

## Installing the app on local repository

1. Clone repository
2. Run 'npm install'
3. Run 'npm run dev'

## Using the app

To run use the app in the development mode in console run 'npm run dev'.\
Open [http://localhost:5000/send] for sending requests with Postman (http://localhost:3000) to view it in the browser.

## About the project

This a complete working landing page for NowDevelopment Lab. project. The project has been built using the MERN Stack. It's using React on the client side which is calling a custom build api on the servers side. On the Server side (NodeJS & Express) the called API is doing the following things:
1. sending the message the customer entered to the NowDevelopment customer support mail
2. sending a confirmation to the customer that his enquiry has been received and will be contacted shortly
3. calling a Zapier webhook which will get the api payload and trigger a notification message on Slack channel which will contain the customer name, email and message.

The page has 3 sections: 

1. Header & Nav - with company logo and background poster
2. Our Projects - contains 3 projects with description and a project link
3. Contact us form  - fully working and backend connected

## Live preview available at:

https://now-development.herokuapp.com/

