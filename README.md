Note: There are still things to do, like adding tests, documentation, publish the generator, but you can use it locally (see instructions).

#ES6 Gulp Angular Generator 

##Description
Yeoman generator for angular applications that uses latest es6 features and components, gulp and webpack to bundle.

##Getting started
```
# Clone into your computer
> git clone https://github.com/EdsonAlcala/generator-es6-gulp-angular.git
# Go to the main folder and in order to used in your computer run
> npm link
```

Now the generator will be available in your computer, run
> yo es6-gulp-angular

##Commands
> Gulp 
> Gulp component --name componentName

##What do you get?

* Install: npm install -g generator-es6-gulp-angular
* Run: yo es6-gulp-angular
##Contributing

##License

##Folder structure
-src (aqui programo solamente con typescript, pero deberia tener estructura igual a
app, que será donde meteré todos los scripts compilados)
-tests
-babelrc
-README.md
-gulpfile.babel.js
-gitignore
-gitattributes
-package.json
-app
--index.js (el bootstrapper, este solo orquesta)
--sources/utils/components (estos son utilidades para el index.js)
----prompts
----validators
--templates (los archivos del generador)
----gulpfile.babel.js
----eslintrc
----gitignore
----gitattributes
----webpack.config.js
----webpack.config.prod.js
----package.json
----babelrc
----bowerrc
----helpers
----hooks
----resources
----www
----src
------app
--------common
--------components
----------about
----------categories
----------comments
----------favorites
------content
--------css
--------fonts
--------img
--------lib
--------scripts
------index.html


##Pasos del generador

- app name
- app id
- description
- author name
- autor email


##Tests

- que no se pueda correr el generador cuando el folder no esté vacio

##Ex bower dependencias (now in npm)

- angular-ui-router
- angular
- angular-animate
- angular-mocks
- angular-sanitize

##bower dependencies