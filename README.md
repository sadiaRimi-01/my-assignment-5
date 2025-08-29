Answer to the question no : 01-
getElementById("id") selects one element by its ID and returns a single element .
getElementsByClassName("class") selects all elements with a given class name and returns an HTMLCollection.
querySelector("cssSelector") selects the first element matching a CSS selector and returns a single element.
querySelectorAll("cssSelector") selects all elements matching a CSS selector and returns a NodeList .

Answer to the question no : 02-
 const div = document.createElement("div"); div.textcontent = "Bye"; document.body.appenChild(div);

Answer to the question no : 03-
Event bubbling - when an event happens on an element, it first runs the handler on that element, then moves upward through its parents.

Answer to the question no : 04-
Event delegation is attaching a single event listener to a parent element instead of multiple child elements since events bubble up the parent can catch event from its children
it is useful because save memory and handle dynamically added element automatically

Answer to the question no : 05-
 preventDEfault means stop default action. stopPropagation means stop going to parents.
 
