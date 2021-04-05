# NowDevelopment Lab. landing page & contact form

## Installing the app on local repository

1. Clone repository
2. Run 'npm install'

## Using the app

To run use the app in the development mode in console run 'npm run dev'.\
Open [http://localhost:5000] for sending requests with Postman (http://localhost:3000) to view it in the browser.

## About the project

This a complete working landing page for NowDevelopment Lab. project.\
The landing page uses the Now UI Kit from creative-tim: https://www.creative-tim.com/product/now-ui-kit with modified page structure. This page can be further enhanced with a dashboard: https://www.creative-tim.com/product/now-ui-dashboard .\

The page has 3 sections: .\

1. Header & Nav - with company logo and background poster
2. Our Projects - contains 3 projects with description and a project link
3. Contact us form \* - fully working and backend connected

- The contact form uses a gmail address to receive customer messages. It also sends:
  a. confirmation to the customer that his message has been received
  b. notification message on a Slack channel - this inetgration is made with a Zapier webhook that gets the data from the contact form payload and sends it to Slack

## Reviw the project

https://now-development.herokuapp.com/

might neeed to turn on the container.
heroku account: hello.nowdevelopment@gmail.com

## Further needed enhancements:

1. client side confirmation that the message has been sent
2. page refresh after the message has been sent
3. move all passwords to environment variavbles when the project will be live
