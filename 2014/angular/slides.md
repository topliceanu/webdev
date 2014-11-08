Angular
=======


ngApp - defines the root scope.
ngController - defines a portion of html bound to this controller.


MVC components in angular
-------------------------

* Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties are accessed through bindings.
* View — The template (HTML with data bindings) that is rendered into the View.
* Controller — The ngController directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values


Dependency Injection
--------------------

Services are managed by Angulars DI subsystem. Dependency injection helps to make your web apps both well-structured (e.g., separate components for presentation, data, and control) and loosely coupled (dependencies between components are not resolved by the components themselves, but by the DI subsystem).


$resource
---------

A factory which creates a resource object that lets you interact with RESTful server-side data sources.

Design Patterns
---------------

Factory, MVC, Mediator, Pub/Sub, Composite, Singleton.


ngView
------

ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service.


MVC
---

Separate code that handles data (ie. business logic) from code that handles presentaion. Why?

Concepts
--------



Filters
-------

A filter formats the value of an expression for display to the user. They can be used in view templates, controllers or services and it is easy to define your own filter.


Exercises
---------

1. General

a. Implement two way binding on your own!
b. Implement a navigation bar for our application. Should have two links: doodle list and logout.

2. Users.

a. Implement a page `user/register` where you create a new user only if it does not exist. After creation, redirect to `user/login`
b. On page `user/login` do not create new users, only allow users who already exist.
c. Implement a button for user logout. After loggin out, redirect to `user/login` page.

3. On `doodle/list` page.

a. implement delete buttons only for doodles created by the current user.
b. allow edit button only for users who created the doodle.
c. list the number of user which participated on each doodle.
d. implement sorting alfabetically (asc/desc) by user title/creator/participants.

4. On `doodle/create` and `doodle/edit` pages.

a. Merge the `doodle/create` and `doodle/edit` pages to use the same controller. Currently they are using the same template and they are pretty much the same.
b. Allow editing of existing options (maybe we misspelled the name of an option). Carefull to correctly update the doodle object.
c. Add validation, do not allow empty options. Do not allow duplicate options.

5. On `doodle/join` page.

a. attach next to each options in the table, the number of users who have picked that option.
b. print the most popular option.
