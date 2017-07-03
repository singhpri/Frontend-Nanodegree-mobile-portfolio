## Website Performance Optimization portfolio project


1. To run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  terminal
  $ cd /path/to/your-project-folder
  $ ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try run it through PageSpeed Insights!
2. Buildup tool Grunt used
Instructions
$ cd /path/to/your-project-folder
$ npm install
$ grunt


#### Part 1: Optimize ./src/index.html

1. async render-blocking google-analytics
2. Image optimization - using Grunt and then image-optim
3. Minified render-blocking-css css/style.css and css/print.css using Grunt and added them to index.html
4. Minimized render-blocking-javascript js/perfmatters.js



#### Part 2: Optimize Frames per Second in pizza.html

1. Optimized resizePizzas - Removed determineDx and simply changed the sizes of pizza elements
2. Reduced the number of pizza choices to 30
3. Using Ilya's demo found at  https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html
   changed the calculation of var phase to var phase = Math.sin((cachedScrollTop / 1250) + (i % 5));

4. Line 523 - using requestAnimationFrame to updatePositions for movingPizzas1.
