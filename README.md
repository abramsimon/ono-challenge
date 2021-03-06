# Ono Challenge

Here's an outline of what your application should do:

- Your app should ingest the csv (attached) as seed data. It contains a list of ingredients with accompanying images.
- Users should be able to sign up & login (feel free to keep auth simple).
- The user should see a list of ingredients in rank order along with their photos, names, score, and a way to vote the ingredient up or down.
- Voting should happen through ajax.
- After voting, the user should see a success message.
- Ingredients should be ranked according to a basic time-decay algorithm
- The user should be able to change their vote. They should only be able to assign 1 vote per board.
- The app should look and feel good, as if it were made for real users. It should be responsive.
- We expect the challenge to take about 3 hours. If you get past about 3.5 hours, please commit what you have finished so far and submit it.
- The application should have a README that explains clearly how to set it up and run it. Do us a favor and make setup easy!
- Note: all code should be written with reasonable performance in mind

## Web UI

The web ui was created using `react-create-app`. Use the following commands:

Run: `yarn start`

The web ui will be available at [localhost:3000](http://localhost:3000)

## Server

The server was created from scratch, using Express as the api layer. Use the following commands:

Run: `npm start`

The api will be available at [localhost:8080/api](http://localhost:8080/api)

Cool.