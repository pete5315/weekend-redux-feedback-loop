# Redux Feedback Loop

## Description

_Duration: Weekend Challenge_

This is a website to handle feedback submission from users. It needed to handle multiple inputs, submission to the server, editing inputs, and deleting inputs. It also includes an admin page for deleting submissions and flagging them.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Material UI](https://mui.com/)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [ReactRedux](https://react-redux.js.org/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. A user will enter the site via the "/" address. They will be prompted to enter a number into a form from 1-5. If they enter anything other than a number 1-5 they will see an alert. Once they submit a valid input, they will move to the next page.
2. This will happen 3 additional times, allowing them to enter inputs for Feelings, Support, Understanding, and additional Comments.
3. After filling out these 4 feedback forms, they will be shown their inputs and given a chance to review them. If they look correct, they will hit submit and be taken to a completion page which would let them enter new feedback.
4. If they made some mistakes filling out the forms, they will be prompted to fully complete all fields in before submitting. They can click on any of the fields to jump to that page.
5. If the user goes to "/admin", they can view all submitted feedback on the server.
6. From there, they can delete any of the feedback or flag it.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who provided an interesting problem to take on for this challenege. Thanks to Zackaria, Adam, and Isaac for reviewing my code with me and giving advice. Thanks to my instructors at Prime and thanks to the lecture notes for providing an easy framework to pick up these new skills.