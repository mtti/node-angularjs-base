# Node/AngularJS base project

This is my personal Node/AngularJS base project.

In the frontend:

* AngularJS 1.x with UI router and ng-resource
* Webpack
* Babel with es2015 preset
* Bootstrap
* LESS

In the backend:

* Express
* Sequelize to use with PostgreSQL
* Morgan for access logs
* Winston for other logging, with syslog levels.

Other:

* Standard NodeJS .gitignore, with `dist` added.
* A .gitattributes file that stops git from converting line endings. I do web development on Windows regularly and this helps me a bit.
* MIT License. It's debatable whether a repository like this is even copyrightable, but I've added a license anyway for the sake of clarity.

Missing/todo:

* Linting
* Testing
* Dockerfile
