# Responsive CSS In-Class Exercise

Now that you've learned how to use media rule blocks to create responsive pages, let's practice those skills. The `index.html` file in this directory contains six blocks of content, contained with a `div` element that acts as the row. Add style rules to the `css/main.css` file to accomplish the following:

- By default, all the six blocks should stack on top of each other and stretch across the entire width of the `body`'s content area.
- On screens `768px` and wider, it should change to a 2x3 layout, with 2 blocks of content per line and 3 lines
- On screens `992px` and wider, it should change to a 3x2 layout
- On screens `1200px` and wider, it should change to a 6x1 layout, with all blocks next to each other on the same line. 

Once you get that working, then try to make the SVG icons appear to the left of the `h2` and `p` element within each content block **without changing the HTML at all**. You can do this entirely using CSS style rules. See if you can figure it out. It should look something like this:

![screen shot of icon on left](screenshots/icon-left.png) 

Consult the [flexbox reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for details on the various flexbox properties.
