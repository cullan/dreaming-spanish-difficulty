# Dreaming Spanish Firefox Extension

This extension displays the video difficulty ratings on the Watch page, Library
page, and the Series pages.

The Dreaming Spanish web application has difficulty ratings gathered from user
feedback. The ratings are not surfaced in the user interface unless the user
sorts by difficulty or selects a difficulty range on the Watch page.

The backend already sends the difficulty ratings to the user interface and they
are passed in an argument to all of the components that should display them. It
is a matter of adding a couple of lines of code to each component to make them
visible. To accomplish this, the extension intercepts the javascript source code
as it is loaded and rewrites it to append the modified functions to the end,
replacing the original ones.
