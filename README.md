# TerriblyTinyTales - TTT Assignment

## Libraries Used
- create-react-app
- react-router-dom
- styled-components
- d3

## Run Live Development Server
```(shell)
npm start
```

## Code Components
- `index.js` - Router Component to handle navigation across home page and histogram page, with a 404 page, to handle direct URL manipulation

- `device.js` - Used to specify screen width's to add responsive design through media queries in css

### hooks
- `useD3.js` - Integrating D3 data visualization library with React. We cannot use D3 directly since it requires direct manipulation with the DOM elements.

### pages
- `Histogram.js` - The page responsible for displaying the histogram. The returned JSX element is conditional on the passed `location.state`, which would contain the sorted array of the top 20 words along with their occurances if the histogram page is reached as intended, and would be undefined if accessed through direct URL manipulation.

- `Home.js` - The first page that is displayed when the site is loaded.

- `NotFound.js` - The 404 Page

- `index.js` - Not a component. It exists to ease the imports in the root index.js file for the router

### parser
- `core.js` - Contains the core logic to parse the String into words. The string is split on the set of Splitters and Escape Characters, and all alphabets are converted to lowercase to increase recall. Thus, 'The', and 'the' are counted as the same word. Further, words separated by hyphen in url strings (such as https://abc.def/terribly-tiny-tales) would split the words at hyphen and count the words terribly, tiny, and tales separately, again, to increase the recall.

### res
- `backdrop.png` - Image taken from TerriblyTinyTales' website (https://www.terriblytinytales.com/) to make it visually appealing

### styled-components
- `global.js` - Contains CSS styled elements to be used directly in React Components, and avoid cluterring with classnames or ids.

### ui-components
- `Chart.js` - Contains the core logic to tell d3 how to create the chart svg given the data elements. Makes the chart interactive such as hover over chart to view values.
- `Page.js` - Adds uniformity across multiple page projects. Adde for good practice since it's not really necessary for a small project as this.
