0. Learn by doing: build an app. What kind of app?
A [doodle](http://doodle.com/ry3utyr8fzqgzncn#)? Or something of your choosing!?

1. Me
    - I am Alex
    - Introduce yourselves: name, why the frontend track? what are your expectations in an ideal world?
    - admin stuff:
        - install chrome: sudo apt-get install chromium-browser
        - Get a github account
        - Get a cloud9ide account (login with Github)
        - Create a new html app
        - Think of a good app subject
        - It is a LOT of info and it is not meant to be digested now. SO TAKE NOTES!
    - ask questions, get out of the room when you feel like going, 10 min breaks every hour.
    - ABOVE EVERYTHING: disagree with me, let me know what you do not like/understand/expect.

4. State of the art in application development
    - distributed
    - in cloud, virtualization, SaaS, PaaS, IaaS
    - microservices
    - databases
    - browser platform is part of a larger distributed system. It is the client.
        Can be other things, like desktop apps, mobile apps, smart watches, etc.

5. Stay in school! (Focus on timeless concepts!)
    * Why do I need to know each of these ?

    - algorithms!!! (focus on datastructures more) If you want to work at Fb.
    - C/C++ (learn how to work dirrectly with memory, problems, hacks!)
    - cpu (embedded systems)
    - networking (TCP/IP stack)
    - storage systems (how data is stored on disk, why some reads are faster then others)
    - high level programming language
        - backend: java, c++ (performance requirements), python, ruby (speed of development)
        - frontend: javascript (unavoidable)
    - virtualization: vms, containers.
    - distributed systems: databases, file systems, processing systems, architectures, etc.
    - cloud (cloud providers, their services, their cost, benchmarks, implementations)
        - all of them have free quotas, so you can try things out.
        - how to build scalable systems: distributed queues, load ballancing, etc.

    - software develpment methodologies: agile, TDD (Keep code quality high)
    - OOP
    - design patterns
    - functional programming (essential in multi core virtualization)
    - git (& github)

    * Building a distributed system means you have to be aware of all these things
    * Try to be full-stack, but do specialize on something as niche as possible.

6. What you do not learn in school
    - Be extremly well organized. There are apps/tools to help you do that.
    - Build an entrepreneurial mindset! (Related to engineering, optimization: How can I make this better?!)

2. Ajax
    - the term is old. nobody uses it anymore.
    - means building an app on the browser platform. It is the same as any other platform.

3. The browser platform
    - http protocol.
        - How does the web work? Think of the web as a set of resources, each
        uniquely addressable.
        - what is a web page? A resouces which has connections to other resources.
        - structure of the HTTP message: url, status code, headers, body
    - html/css/js (ie. semantics, presentation, logic)
    - URLs
        - format: protocol://subdomain.domain.tld/path/to/a/file?query=string#hashpath

6. Rest
     - Why? You need a _convention_ to have all your machines talk to each other
     - Simple, declarative and flexible
     - actors are web resources, they have a URL
     - Actions OR verbs: GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove)
        - draw example: the users resource

     - play with an existing REST api.

7. JSON
    - format for transmitting data: objects, arrays, numbers, strings, booleans.

ACTIVITY learn to use JSON.parse() / JSON.stringify()
ACTIVITY use curl to create/fetch users from the api.

7. App development

ASK what kind of app would you like to do? It has to have didactic purpose.

    a. start with use-cases! what we want to do? called "user scenarios". simplify! make assumptions!

        0. a user should be able to identify itself.
        1. a user should be able to create a doodle.
        2. users should be able to see all doodles.
        3. users should be able to add a line to the doodle.
        4. users should be able to edit any line in the doodle.
        4. users should be able to delete a line for the doodle.

ACTIVITY: build the boilerplate html code: jquery, underscore, bootstrap example.

    b. apps should be build around data. Can you identify the data entities here?
        Hint! Look at things that change! User names, emails, user decisions, number of rows, doodle title, doodle columns, etc.
        Hint! Keep it simple!

        - users: name, email
        - row: user, choice
        - doodle: title, options (distinct columns), rows (list of users and their choices)

        These are called Models. Their job is to hold data and to let anyone interested know when data has changed.

ACTIVITY: a small presentation on the developer tools
ACTIVITY let us learn how to do this from jquery. jQuery primer: DOM manipulation and AJAX

    c. actions:
        - view all doodles
        - create a doodle
        - view a doodle contents
        - add your own row to the doodle. Then save it.
        - edit any row in the doodle. Then save it.
        - remove any row from the doodle

    d. define the pages:
        - a page with a list of doodles and to create a doodle
        - a doodle page: add you choice, modify, remove, etc.

        These are called Views. Views modify ONLY models, not other views.
        Views get modified ONLY when models they render modify!

    e. write some code! The doodle list page and add page.
        - jQuery primer: DOM manipulation and AJAX calls.

TODO write a simple backend: using NeDB(https://github.com/louischatriot/nedb) and express.js

    e. let us add some structure:
        - Learn about OOP in Javascript. How to write a class: properties, methods, prototype, super
        - Functions in javascript: JS is functional; first order types; multiple invocation patterns.

ACTIVITY write a base class for the application to implement pubsub

        ````
        var A = function () {
            this.property = value; // instance property.
        };
        A.prototype.method = function () {}; // instance method.

        A.staticMethod = function () {}; // static method.

        var B = function () {
            A.apply(this, arguments); // calling super constructor.
        };

        B.prototype = Object.create(A.prototype); // extend.
        B.prototype.constructor = B // weird javascript bug.

        B.prototype.method = function () {
            A.prototype.method.apply(this, arguments); // call super method
        };
        ````

        - Learn about Pub/Sub Or Observer Pattern.
ACTIVITY build an implementation of Pub/Sub. Describe the api on the board. Write a test for it.
HINT when you do not know something, use MDN!

        - Learn about the mediator pattern. How we are going to use it?! MVC.

    WHY MVC? Are you familiar with the mediator pattern?
    Lowers coupling, every component only talks to the mediator.

ACTIVITY implement a model class
i
    f . a view class for the entire application container.
        - views are responsable for a portion of the screen, ie. a DOM element.
        - they handle user

    g. create a view which adds a new doodle.
