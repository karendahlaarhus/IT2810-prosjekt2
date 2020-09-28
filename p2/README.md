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
