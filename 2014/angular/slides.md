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


Exercise
--------

Implement two way binding on your own!


$resource
---------

A factory which creates a resource object that lets you interact with RESTful server-side data sources.


ngView
------

ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service.
