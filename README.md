#es6 angular generator

Angular ES6 generator that uses latest es6 features and components, gulp and webpack to bundle.

##Getting started

* Install: npm install -g generator-es6-gulp-angular
* Run: yo es6-gulp-angular

##Commands

##What do you get?

##Description

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