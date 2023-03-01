# \_Assignment 01 - Inception

## 1: What is Emmet?

Emmet is a free add-on for your text editor. It is an essential tool for developers. It is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time. Also relying on Emmet's auto completion means fewer typos and missing tags, leading to more robust and valid files.

## 2: Difference between a Library and Framework?

- A library is a collection of prewritten code that can be used to simplify tasks. The term library simply refers to a collection of code that is reused repeatedly. It is essentially a set of pre-defined functions and classes that programmers can use to simplify their work and speed up the development process. So, developers do not have to write code to accomplish specific functionality because the library already includes code for those functionalities. Standard libraries are available with most programming languages, but programmers can also make their own custom libraries. Library implements a particular function. Some examples of popular libraries are React, and JQuery.
- Framework as a collection of libraries implementing a particular methodology. When it comes to coding, developers must worry about syntax, declarations, garbage collection, statements, exceptions, and more. Software frameworks make development easier by providing a common platform from which developers can control all or most of the software development process. We can focus on high-level functionalities, while the low-level functions are handled by the framework itself.
- An application code uses a library, the developer writing the code is in charge of the application flow. This means the developer decides when to call the library. However, when we use a framework, the framework decides when to call the library.
- In simple meaning, Library is like building your home from the ground up. The house can be made in any style you prefer and the rooms can be arranged and decorated however you like. Framework, on the other hand, is like buying a new home. The house is already built, so you do not have to worry about building problems, but you cannot choose how the rooms are arranged.

## 3: What is CDN? Why do we use it?

- A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.
- A CDN is a network of servers linked together with the goal of delivering content as quickly, cheaply, reliably, and securely as possible. In order to improve speed and connectivity, a CDN will place servers at the exchange points between different networks.
- These Internet exchange points (IXPs) are the primary locations where different Internet providers connect in order to provide each other access to traffic originating on their different networks. By having a connection to these high speed and highly interconnected locations, a CDN provider is able to reduce costs and transit times in high speed data delivery.
- The globally distributed nature of a CDN means reduce distance between users and website resources. Instead of having to connect to wherever a websites origin server may live, a CDN lets users connect to a geographically closer data center. Less travel time means faster service.

## 4: Why is React known as React?

- it’s called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.
- React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
- The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
- React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

## 5: What is crossorigin in script tag?

- The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
- Web pages often make requests to load resources on other servers. Here is where CORS comes in.
- The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
- The crossorigin attribute on a `<script>` tag specifies that CORS is supported when loading an external script file from a third party server or domain. CORS is a standard mechanism used to retrieve files from other domains.

### _Syntax_

```
<script crossorigin="anonymous|use-credentials">
```

## 6: What is difference between React and ReactDOM?

- React is a JavaScript library for building User Interfaces and it is specifically designed to interact with DOM for us.
- With React we can create DOM/React elements but browser does not understand the React element. ReactDOM is the middleman that renders the React element in the browser.
  _Example_: To render the above list element(listElement) in DOM.

```
const listElement = React.createElement( 'li', {
    className: 'list'
}, 'React.js' );

ReactDOM.render( listElement, document.querySelector( '#root' ) );
```

## 7: What is difference between react.development.js and react.production.js files via CDN?

- Development is the stage of an application before it's made public while production is the term used for the same application when it is made public.
- Development JS for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
- The production build, on the other hand, runs in production mode which means this is the code running on your client’s machine.
- Development build is several times (maybe 3-5x) slower than the production build.

## 8: What is async and defer?

- Async

  - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed **AS SOON AS IT IS AVAILABLE** (do not block HTML DOM construction during downloading process ) and don’t wait for anything.
  - Async in script tag in JavaScript is a way to load scripts asynchronously. That means, if a script is async, it will be loaded independently of other scripts on the page, and will not block the page from loading.
  - If you have a page with several external scripts, loading them all asynchronously can speed up the page load time, because the browser can download and execute them in parallel.

  ### _Syntax_

  ```
  <script async src="script.js"></script>
  ```

- Defer

  - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed **ONLY AFTER** the page has finished parsing (when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
  - This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load.

  ### _Syntax_

  ```
  <script defer src="script.js"></script>
  ```

- _Note_: The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.
