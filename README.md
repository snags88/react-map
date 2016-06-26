# Google Maps + React.js
This client side app is intended to use the React framework with the
Google API to allow users to do the following:

- Search for a location based on a phrase (i.e. 'Pizza in New York' or
  'Gyms near Santa Monica'
- The user will be able to get more details regarding the location by
  clicking on the search result or on the marker on the map.
- This app also uses GeoLocation so it is recommended to turn that
  feature on in your browser.

# Technologies Used

## Google API
This project uses the Google Places API for the following:
- Places Search
- Autocomplete
- Places Detail
- Map

Note that the Google Places JS library is also used for creating map
markers and information windows.

## Package Manager
This repo uses [npm](https://www.npmjs.com/) to install dependencies
such as Gulp, Browserify, etc. You will need npm installed in order to
create a local build of this application.

## React.js
React.js is used as the framework for this client side app. [React.js](https://facebook.github.io/react/index.html) is the client-side framework developed by Facebook. It uses a uni-directional data binding which makes keeping states across the app very simple. In this particular app, the search query will trigger a new set of results being assigned to the main app state, which automatically updates the search results and map display.

## JSX
React can be written in plain JS using React.DOM or with [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html). This
particular project uses JSX which allows you to write HTML into your
js files. When the files are built, JSX files are compiled into syntactically
correct javascript files.

## SASS
This project uses [SASS](http://sass-lang.com/) for its stylesheets. Similar to JSX, the
`.scss` files are compiled into syntactically correct `.css` files.

## Gulp
This project uses [Gulp](http://gulpjs.com/) as the task runner. The
primary tasks for the build task are
- Use Browserify to transform the `.jsx` and `.js` files into a single main javascript file.
- Use `gulp-sass` to compile the `.scss` files into `.css` files.
- Rename an place the `html`, `css`, and `js` files appropriately.
- Watch for changes in project source files and rerun the build as
  necessary.

## Browserify
This project uses [Browserify](http://browserify.org/) so that the
source files can be kept in organized folders and to run transforms on
the files at the time of compiling.

## When.js
There was necessity for using Javascript Promises for this project. The
library used is [When.js](https://github.com/cujojs/when).

# Folder structure
This project contains the `src/` folder which contains the source code.
Within this folder, there are subfolders to contain different types of
files (i.e. javascript, stylesheets, html).

Within the `src/js/` folder React components are placed in `components/`
folder. The `lib/` folder contains reusable library files not specific to any component.

When the project build is run, the output for `.js` and `.css` will be
placed in the `public/` folder. The `.html` file will be placed at the
root of the directory since this is the main entry point for the user.

# Local Build Instructions
In order to build this app locally, run the following

1. In the project folder, run `$ npm install` to install dependencies.
2. Run `$ gulp` to run the build and watcher.
3. Run `$ open index.html` to view page.
