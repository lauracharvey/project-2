![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# GA Project 2

![screenshot of project](https://i.imgur.com/FnBW97v.png)

## Overview

This was joint project from General Assembly, completed in week 6 of the Software Engineering Immersive course. The project was a 48 hours 'hackathon' building a React application that accessed a public API.

You can see our solution [here](https://lauracharvey.github.io/project-2/).

##Brief 


* Consume a public API 
* Have several components - At least one classical and one functional.
* The app should include a router - with several "pages".
* Include wireframes - that you designed before building the app.
* Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* Be deployed online and accessible to the public.

##Tech Stack

* React
* SCSS
* Git & GitHub

##Approach

We were tasked with identifying a public API that we could use for this project, my team mate found the Harvard Art Museum API and, being a designer, came up with the initial grid layout idea.

We very quickly realised that some objects within the API did not have an image so we used a 'verify images' function to weed out any objects that did not have a primaryimageurl.

![carbon screenshot of code](https://i.imgur.com/qd1pbDU.png)

We added a search bar to our page and amended the API url using a template literal. If no search term is entered, the grid will display results with the keyword "red". Otherwise it will use the search term.

![carbon screenshot of code](https://i.imgur.com/oUDpxPr.png)

We then used React Router and props to create a link to another page which gave information about the image. 

This included a new fetch from the API, using the id of image that was clicked to access a specific object inside the API and used a template literal to add that ID into the API url.

![carbon screenshot of code](https://i.imgur.com/33UX07f.png)

We intially had issues displaying the Artist of the image as it was stored as an array inside the object we had to include an if statement to bypass the asyncronicity.

![carbon screenshot of code](https://i.imgur.com/EyNjycn.png)

##Conclusion

I thoroughly enjoyed collaborating on a project and both being creative I think we came up with a really aesthetically pleasing design.

I am really pleased to be able to produce something of good quality after learning React for 5 days. I can't wait to learn more.
