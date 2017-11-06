## List of modifications to HTML file:

* All <style> elements moved to <head>. Type attribute added.
* Type attribute added to all <script> elements.
* <meta name="description"...> moved inside <head>.
* <noscript> element moved to body as iframe is invalid in <head>. Opening and closing tags fixed.


## Best practices suggestions:

Remove all inline style and script declarations and have these on seperate .css and .js files respectively.


## Preformance suggestions:

Add defer attribute to JavaScript file invocations. If for example the content of shadowbox.js is very large it will take a long time for any content to be displayed. Adding defer attribute allows the page content to displayed before the JavaScript files are loaded.
Also it would be good if these external files were minified.