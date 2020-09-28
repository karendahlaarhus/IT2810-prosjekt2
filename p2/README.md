## React
We have implemented the project using Typescript and Node.js. You run the project by doing the following: 

Enter the folder called `p2` and write `npm start`

To run the tests, write `npm test`

### Component structure
We have chosen to structure our project by separating the functionalities for music, poetry and art into separate components. Throughout the project we have tried to outsource our code into different components as often as possible, to make the code more clean and functional. It is also easier to understand the project structure by having components that only contain on type of functionality. Since it was required to use both class and functional components, so we did.  

All the functionalities are then displayed in the file called `Gallery.tsx`, which sets the whole interactive gallery together. Then we have `Frontpage.tsx` which renders `Gallery.tsx` and the welcome text. 


### State and props
We have used state and props to iterate through the interactive SVG images. A prop called `count` is  updated every time a user displays a new image, and this prop  is then passed to the other components which then updates the images based on its state. Same goes for the poetries. We have structured both the poems and the images in separate lists, which makes it easy for us to loop through the lists based on the already mentioned `state.count`. 



## Ajax
We have used http://poetrydb.org/ to load the poems. Asynchronous JavaScript is used to fetch the poems based on the previous mentioned `state.count`. 

To implement user interactivity, we have made it possible for the use to choose between two authors. This is made by creating two separate lists, the toggle between them based on the *Change Author*-button's state. The list of poems by the chosen author is then fetched in `Poetry.tsx`. 

## HTML Web Storage
### Local storage
We have used local storage to let the user save and retrieve its favourite art. A function called `handleFavorite` is called every time the *Save Favorite*-button is pressed. The function saves the count's, author's and music's current state into local storage, by using `localStorage.setItem(key, value)`. When the user then wants to review its favorite, the information about the saved state is retrieved using `localStorage.getItem(key)`. Since the states is saved as strings, it was necessary to parse them to JavaScript objects by using `JSON.parse(string)` to be able to view the states. 

### Session storage
We use session storage to remember which image and poetry the user is currently displaying. When the user refreshes the page, the same combination of image and poem is viewed. This is done by using `sessionStorage.setItem(key, JSON.stringify(value))` every time we set a new state to either one of the props. The saved information about the previous state is then loaded into the props at the beginning of each session, or a default value if there are not any previous state (i. e. if it is a new session). The session storage only works when reloading the page, meaning of the page session is closed, all information in session storage is set back to default. 


## SVG

We have used SVG for the images. Each image has an animation. By pressing a button you can change the colors. We have used the Context-API for this change. By using the Context-API we save time because we do not have to write the same code in multiple components.

**folder p2/src/components/Artwork** contains all files with SVG elements (as .tsx files) and their corresponding css files. Here you also find theme-context.tsx which is where we create the context.

**p2/src/components/ArtDisplay.tsx** works as a container for each artwork. In this file we use the context by using context Provider.

**sources:**  
We did not make the SVG artworks ourselves, we did however make small changes in coloring and animations (as well as implementing them into React components). The SVG we used can be found here:

Bus svg: <https://codepen.io/iNeedAdult/pen/ZEQqyMg>
Window and house svg: <https://codepen.io/xlavoc/pen/OJMwPOy>
Tree svg: <https://codepen.io/uiswarup/pen/MWWNOjo>
Airplane svg: <https://codepen.io/lionelB/pen/gckDu>
BeeHive svg: <https://codepen.io/joygarcia4/pen/NqqOZe>
