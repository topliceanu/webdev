Angular.js
==========


How to
------

1. clone the repo on localhost: `$ git clone git@github.com:topliceanu/webdev.git`
2. open this tutorial in the browser: [https://github.com/topliceanu/webdev/blob/master/2014/angular/slides.md](https://github.com/topliceanu/webdev/blob/master/2014/angular/slides.md)
3. create a separate directory structure and follow the instructions.
4. if you get lost, lag behing, do not understand something, check the [complete code](https://github.com/topliceanu/webdev/tree/master/2014/angular/code/app)
5. to move on, go to the checkpoints folder in the webdev repo and checkout the corresponding checkpoint tag.


Steps
-----

`1.` Application planning

- use cases (aka. _user stories_)

 * As a _user_ I want to _be able to login_ so that I can _access the functionality of the app_.
 * As a _user_ I want to _view all doodles_ created by me and other users so that _I can participate_.
 * As a _user_ I want to _create a new doodle_ so that _I can ask people to fill this in_.
 * As a _user_ I want to _edit a doodle_ so that _I remove mistakes and/or make it better_.
 * As a _user_ I want to _join a doodle_ so that _I can participate in the poll_.

- data entities: users and doodles

 * users object format:

  ````json
  {
      _id: String,
      username: String,
      createdOn: Number
  }
  ````

 * doodles object format:

  ````json
  {
       _id:String,
       title:String,
       creator: {
           _id: String,
           username: String
      },
      options: Array<String>,
      joined: {
           username: {
               option: Boolean
           }
      },
      createdOn: Number
  }
  ````

- pages:

 * user login
 * doodle create
 * doodle edit
 * doodle list
 * doodle join

`2.` Setup the environment.

- setup the following directory tree structure

````bash
├── app/
│   ├── css/
│   │   ├── app.css
│   │   └── bootstrap.css  ## <-- download from https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.css
│   ├── index.html  ## <-- empty
│   ├── js/
│   │   ├── controllers/
│   │   │   └── ...
│   │   ├── filters/
│   │   │   └── ...
│   │   ├── init.js  ## <-- empty
│   │   ├── lib/
│   │   │   ├── angular-cookies.js  ## <-- download from https://code.angularjs.org/1.3.1/angular-cookies.js
│   │   │   ├── angular.js   ## <-- download from https://code.angularjs.org/1.3.1/angular.js
│   │   │   ├── angular-resource.js   ## <-- download from https://code.angularjs.org/1.3.1/angular-resource.js
│   │   │   ├── angular-route.js   ## <-- download from https://code.angularjs.org/1.3.1/angular-route.js
│   │   │   └── underscore.js   ## <-- download from http://underscorejs.org/underscore.js
│   │   ├── resources/
│   │   │   ├── Doodle.js
│   │   │   └── User.js
│   │   └── services/
│   │       └── ...
│   └── partials/
│       ├── doodle-create.html
│       ├── doodle-edit.html
│       ├── doodle-join.html
│       ├── doodle-list.html
│       └── user-login.html
````

- start a simple http server serving static content from the app folder using:

````bash
python -m SimpleHTTPServer
````
- use your browser to navigate to `http://localhost:8000`

__Checkpoint__ `$ git checkout checkpoint-1`


`3.` Implement the login page

- add the `User` resource.
- bootstrap the `index.html`.
- bootstrap the `init.js`.
- add a simple router to `routes.js`.
- add html to `partials/user-login.html`
- add the `currentUser` service.
- add the `UserLoginController`

__Checkpoint__ `$ git checkout checkpoint-2`


`4.` Implement the doodle create page.

- add the `doodle` resource.
- add appropriate routing in `routes.js`.
- add html to `partials/doodle-edit.html`.
- implement the controller for this page: `DoodleCreateController`
- modify the index.html to load the new js files.

__Checkpoint__ `$ git checkout checkpoint-3`


`5.` Implement the doodle list page.

- add appropriate routing in `routes.js`.
- add the html to list all doodles in `partials/doodle-list.html`
- implement the `DoodleListController`. Uses the `Doodle` resource to fetch data.
- link _create doodle_ with _doodle list_: after a user creates a doodle, redirect him to doodle list.
- modify the index.html to load the new js files.

__Checkpoint__ `$ git checkout checkpoint-4`

`6.` Implement the doodle edit page.

- very similar to doodle create page: same template! `partials/doodle-edit`.
- controller (`DoodleEditController`) is different: it will not create a new doodle, it will fetch the existing one using `Doodle` resource.
- update `routes.js`.
- add button on `doodle-list` which route to this page.
- modify the index.html to load the new js files.

__Checkpoint__ `$ git checkout checkpoint-5`

`7.` Implement the doodle join page.

- first start with the ui, ie. add the template `doodle-join`.
- Users have to pick their choices from among the doodle options.
- Implement controller `DoodleJoinController` which handles adding the current user choices or removing the current user choices.
- add a button on the doodle list to allow users to join a doodle.
- modify the index.html to load the new js files.
- add routing for this page in the doodle list page.

__Checkpoint__ `$ git checkout checkpoint-6`


Glossary of Concepts
--------------------

1. __MVC (Model-View-Controller)__

- Why? Separate data processing (business logic) from data presentation? Why?
- MVC process:

![MVC process](http://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/200px-MVC-Process.svg.png)

- MVC components in angular

* Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties are accessed through bindings.
* View — The template (HTML with data bindings) that is rendered into the View.
* Controller — The ngController directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values


2. Other usefull __Design Patterns__: Factory, MVC, Mediator, Pub/Sub, Composite, Singleton.


3. __ngApp__ - defines the root scope.


4. __ngController__ - defines a portion of html bound to a named controller.


5. __Services__ - substitutable objects that are wired together using dependency injection. Properties:

Lazily instantiated – Angular only instantiates a service when an application component depends on it.
Singletons – Each component dependent on a service gets a reference to the single instance generated by the service factory.


5. __$resource__ - A factory which creates a resource object that lets you interact with RESTful server-side data sources.


6. __ngView__ - ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service.


7. __Filters__ - A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.


Exercises
---------

1. General

 * Implement two way binding on your own!
 * Implement a navigation bar for our application. Should have two links: doodle list and logout.

2. Users.

 * Implement a page `user/register` where you create a new user only if it does not exist. After creation, redirect to `user/login`
 * On page `user/login` do not create new users, only allow users who already exist.
 * Implement a button for user logout. After loggin out, redirect to `user/login` page.
 * Add a page listing all the users in the application.
 * Add a user page where you can see all doodle a user has created.

3. On `doodle/list` page.

 * implement delete buttons only for doodles created by the current user.
 * allow edit button only for users who created the doodle. See [ng-show](https://docs.angularjs.org/api/ng/directive/ngShow)
 * list the number of user which participated on each doodle.
 * implement sorting alfabetically (asc/desc) by user title/creator/participants.

4. On `doodle/create` and `doodle/edit` pages.

 * Merge the `doodle/create` and `doodle/edit` pages to use the same controller. Currently they are using the same template and they are pretty much the same.
 * Allow editing of existing options (maybe we misspelled the name of an option). Carefull to correctly update the doodle object.
 * Add validation, do not allow empty options. Do not allow duplicate options.

5. On `doodle/join` page.

 * attach next to each options in the table, the number of users who have picked that option.
 * print the most popular option.
