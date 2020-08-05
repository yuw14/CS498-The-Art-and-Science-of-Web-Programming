# MP 2: New Clear REACTive App
### Due: March 11th, 2019, 11.59PM CDT

## Table of Contents
1. [Assignment](#assignment)
2. [Grading Breakdown](#grading-breakdown)
3. [Tips](#tips)
4. [Rules](#rules)
5. [Getting Started](#getting-started)
6. [Submission Details](#submission-details)

## Assignment

#### Task
In this programming assignment, you will implement a front-end interface using React that consumes an API. Please read through the entire MP before you start.

#### Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs.
  - TMDB (https://www.themoviedb.org/documentation/api)
  - Spotify (https://developer.spotify.com/web-api/)
  - Pokemon (https://pokeapi.co/)
  - Marvel (https://developer.marvel.com/)
  - NASA (https://api.nasa.gov/index.html)

Note that you may need to create an account and/or acquire an API key for some of the APIs.
Additionally, the API you are working with may become temporarily unavailable.
If/when this happens, it doesn't mean you are blocked from working on the MP.
You can mock the data, i.e. create a local hard coded response and use that instead of making the request.
This is also a good opportunity to think about how your app should handle errors.

Your app should have the following features:
  - **A list view**:  where users can input a search query and the app returns a list of results that match the query (i.e. searching movies or albums). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
  - **A gallery view**: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
  -  **A detail view**: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects.

You will also be required to use following tools:
  - Use React Router for routing.
  - Use Axios for API calls.
  - Use PropTypes. https://facebook.github.io/react/docs/typechecking-with-proptypes.html

## Grading Breakdown
Total Points : 100

List View:
  - Does the list view display relevant items from the chosen API ? (4 points)
  - Does the search bar filter down the items based on the search? (8 points)
  - Can you sort by at least 2 properties?  (8 points)
  - Can the properties be sorted in Ascending and Descending order?  (8 points)

Gallery View:
  - Is the gallery composed of item media?  (4 points)
  - Does clicking on a filter change the results?  (8 points)

Details View:
  - Does clicking on an item in List View take you to the Details View?  (10 points)
  - Does clicking on an item in Gallery View take you to the Details View?  (10 points)
  - Does the Details View contain item details?  (8 points)
  - Do the PREVIOUS and NEXT buttons work correctly?  (10 points)

Other:
  - Does the implementation use React Router and PropTypes?  (12 points)
  - Design (10 points)

## Tips
  - Start early! This is first MP that uses React so start ahead.
  - Visit https://reactjs.org/docs/faq-structure.html for examples on how to structure your React files.
  - You may use a React component library for this MP. We suggest Semantic UI.
  - We recommend using [Normalize.css](https://necolas.github.io/normalize.css/).
  - We recommend using [CSS Modules](https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e).

## Rules
1. This is an individual assignment. No collaboration is permitted.
2. It is not permitted to copy/paste code that is not your own. You are, however, free to look at different code sources for inspiration and clarity. All sources (code as well as reading material) that you reference to complete this assignment must be declared in the submission.
3. There should be no use of inline styling.
4. No inline script tags should be used.
5. HTML tables cannot be used for layout.
6. If you think something you’re doing might not be acceptable, please ask on Piazza.
7. You must utilize some SCSS features (variables, mixins, etc). A plain CSS file will receive less points.
8. We *strongly* recommend using `Create React App` to get your MP started. If you ignore this, we will not help with any environment issues.

## Getting Started
1. Use `Create React App` (CRA) (see below) to generate your MP starter code in a directory of your choice.
2. After running `npm start` open a browser and go to `http://localhost:3000/` to view your page.
3. Open up `src/app.js` to start building your first component. Visit https://reactjs.org/docs/getting-started.html for many official, high quality resources to help get you started.

### Create React App
`create-react-app` is a tool that allows you to generate a react starter project that requires no immediate configuration. Visit the [getting started guide](https://facebook.github.io/create-react-app/docs/getting-started) to read more.

You may be wondering how the command `npx create-react-app my-app` works and why there is no installation step. Click [here](https://www.bram.us/2017/07/15/introducing-npx-an-npm-package-runner/) for an explanation of `npx`.


## Submission Details

Here's what you will need to submit:
1. Create a private repository on GitLab. Make sure "Initialize this repository with a README" is not checked.
2. Change the remote url for the mp2 directory to the url of the new private repository you created.
```
git remote rename origin old-origin
git remote add origin git@gitlab.com:<your-gitlab-username>/mp2.git
```
3. Commit and push your local changes to this new repository.
4. `.gitlab-ci.yml` file automatically makes a Gitlab CI pipeline run to deploy your code. After the pipeline finishes, your site should be live at `https://<your-gitlab-username>.gitlab.io/mp2`. **It may take up to 10-30 minutes for the site to go live after the first deployment.**
5. Invite `uiucwp` as a collaborator. This should be as a **reporter**, not as a *guest*, otherwise we can't see your code.
6. Fill out and submit the form [here](https://forms.gle/BAxKqHmw4FemLwyh7).

