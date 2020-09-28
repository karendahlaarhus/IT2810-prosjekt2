## React
We have implemented the project using Typescript and Node.js. You run the project by doing the following: 

Enter the folder called `p2` and write `npm start` in your terminal

To run the tests, first import `react-test-renderer` by writing `npm i react-test-renderer` in your terminal.  
To run the test, write: `npm run test`. 


### Component structure
We have chosen to structure our project by separating the functionalities for music, poetry and art into separate components. Throughout the project we have tried to outsource our code into different components as often as possible, to make the code more clean and functional. It is also easier to understand the project structure by having components that only contain one type of functionality. We have used a mix of both class and functional components, as required.  

All the functionalities are then displayed in the file called `Gallery.tsx`, which sets the whole interactive gallery together. Then we have `Frontpage.tsx` which renders `Gallery.tsx` and the welcome text. 


### State and props
We have used state and props to iterate through the interactive SVG images. A prop called `count` is updated every time a user displays a new image, and this prop is then passed to the other components which then updates the images based on its state. Same goes for the poetries. We have structured both the poems and the images in separate lists, which makes it easy for us to loop through the lists based on the already mentioned `state.count`. 


## Ajax
We have used <http://poetrydb.org/> to load the poems. Asynchronous JavaScript is used to fetch the poems based on the previous mentioned `state.count`. 

To implement user interactivity, we have made it possible for the user to choose between two authors. This is made by creating two separate lists, the toggle between them based on the *Change Author*-button's state. The list of poems by the chosen author is then fetched in `Poetry.tsx`. 

## HTML Web Storage
### Local storage
We have used local storage to let the user save and retrieve his/hers favourite art. A function called `handleFavorite` is called every time the *Save Favorite*-button is pressed. The function saves the count's, author's and music's current state into local storage, by using `localStorage.setItem(key, value)`. When the user then wants to review its favorite, the information about the saved state is retrieved using `localStorage.getItem(key)`. Since the states is saved as strings, it was necessary to parse them to JavaScript objects by using `JSON.parse(string)` to be able to view the states. 

We know that the SVG's color theme does not follow when retrieving your favorite combination of image, music and poetry. Due to lack of time and resources, we focused on implementing all the technologies in the list of requirements, such as implementing local and session storage, and context. So the local storage do have potential for improvement. 

### Session storage
We use session storage to remember which image and poetry the user is currently displaying. When the user refreshes the page, the same combination of image and poem is viewed. This is done by using `sessionStorage.setItem(key, JSON.stringify(value))` every time we set a new state to either one of the props. The saved information about the previous state is then loaded into the props at the beginning of each session, or a default value if there are not any previous state (i.e. if it is a new session). The session storage only works when reloading the page, meaning if the page session is closed, all information in session storage is set back to default. 


## SVG
We have used SVG for the images, and each image has an animation. By pressing the button bellow the images, you can change the colors of the whole gallery at once. We have used the Context-API for this interaction. By using the Context-API we save time because we do not have to write the same code in multiple components. 

 **p2/src/components/Artwork** contains all files with SVG elements (as .tsx files) and their corresponding css files. Here you also find theme-context.tsx which is where we create the context. 
 
 **p2/src/components/ArtDisplay.tsx** works as a container for each artwork. In this file we use the context by using context Provider. 
 
 **sources:**  
We did not make the SVG artworks ourselves, we did however make small changes in coloring and animations (as well as implementing them into React components). The different SVG source codes can be found here:

- Bus svg: <https://codepen.io/iNeedAdult/pen/ZEQqyMg>
- Window and house svg: <https://codepen.io/xlavoc/pen/OJMwPOy>
- Tree svg: <https://codepen.io/uiswarup/pen/MWWNOjo>
- Airplane svg: <https://codepen.io/lionelB/pen/gckDu>
- BeeHive svg: <https://codepen.io/joygarcia4/pen/NqqOZe>

## Music
In the gallery, it is possbile to switch between two songs. We have importet the melodies from <https://www.bensound.com/>, by using HTML5's support for audio imports. 

## Responsive web design
To make the webpage responsive we have used flexboxes. Instead of pixels we have often used vh and vw which scales better when the window shrinks or gets bigger, since vw and vh is relative to respectively 1% of the width and height of the viewport. 

We have declared the viewport as following: 
```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>´
```
We use mediaqueries to make the design adapt to smaller screens like smartphone and tablet. 

The media query for smartphone is limited to work on screens with max-width 959px. In this media query set `flex-direction:column` such that buttons arrange in a column instead of a row. 

Tablet media query is limited to screen-width between 960px and 2318px. 


## Testing
We have set up testing in Jest, and all tests are written in `App.tests.tsx`. Since the tests in this project not were supposed to be very comprehensive and mainly should show the setup, we only set up a snapshot test of our App component. 

We have also user tested our application on multiple units of different size, and performed cross-browser-testing (Safari and Google Chrome). The website has a responsive web design, and its user interface adapts to screens of different sizes. We have mainly used the developer tools in Google Chrome to simulate how the website will respond to different devices and sizes, but we have also tested on an iPhone 11, both horizontally and vertically. 
During the tests we systematically tested that all elements were shown and functionality worked as expected. 


## Git and Coding standards
We have actively used issues in GitLab to divide the project into smaller parts, and then made a branch for each issue. Using GitLab to create our branches made it easy to give our branches appropriate names, including the issuenumber. However the group has not been consistent in marking commit-messages with the #issuenumber, which would have made it clearer which issue the commits either contributes to or resolves.

After completing an issue, the branch has been merged into our dev-branch. When everything was done we pushed the project to master, after all team-members had reviewed the code. In this way the master-branch stayed protected. 

We have named our files, classes, functions and variables using the camelCase naming convention. 
