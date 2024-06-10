CSS)
1) Bootstrap
2) Tailwind
3) Material UI
4) font awesome cdn link

Plugins -
1) notistack 
2) react icons
3) react hook form

State Management tool - 
1) redux
2) overmind
3) context API


You can use any component for your project and delete the rest. Make Sure to delete routes and make changes in the routes....after deleting the components and pages you are not using. You can also uninstall the packages you dont want by yarn remove.

Structure -

Pages- All pages are in pages folder which is connected to components
Components - Every CSS framework demo and other Components are stored in components folder and State Management tools are in state management components demo. These all will be linked to their respactive pages.
Routes - 
1) App.js has the main browser router and navigation bar will be here. A component named DemoHeader is attached in the App.js for boilerplate navigation. you can delete the navigation if you build your own navigation component and replace it with the given one. 
2) App.js has another component named MainRoutes.js where will declare our route. Mainroutes.js is connected to a util name mainroutes.js which will have all the routes available.


CSS Frameworks -

Bootstrap - If you dont want to use bootstrap uninstall bootstrap by giving the command "yarn remove react-bootstrap". Also remove the scripts and css link from index.html. also remove the bootstrap import from index.js. Remove the bootstrap page, route and component too.
Link - https://react-bootstrap.github.io/getting-started/introduction

Tailwind - if you dont want to use tailwind uninstall tailwind by giving the command "yarn remove -D tailwindcss postcss autoprefixer". Also remove the tailwind.config.js and postcss.config.js. Remove the tailwind codes from index.css too. After that just remove tailwind page, component anmd route.
Link - https://tailwindcss.com/docs/installation

Material UI - We will use v4 material ui for the boilerplate. You can just uninstall v4 and install v5 if you want. If you dont want to use material ui uninstall it by giving the command "yarn remove @material-ui/core". We have also installed material ui icons.which you can remove easily by "yarn remove @material-ui/icons"
Link - https://v4.mui.com/getting-started/installation/


State Management tools -

Redux -
Overmind -
Context API -