# Dreaming UI Enhancement Firefox Extension

Displays difficulty ratings and series watch progress in the Dreaming
Spanish/Dreaming French user interface.

The Dreaming Spanish web application has difficulty ratings gathered from user
feedback. The ratings are not surfaced in the user interface unless the user
sorts by difficulty or selects a difficulty range on the Watch page.

## How it works

The backend already sends the difficulty ratings to the user interface and they
are passed in an argument to all of the components that should display them. It
is a matter of adding a couple of lines of code to each component to make them
visible. To accomplish this, the extension intercepts the javascript source code
as it is loaded and rewrites it to append the modified functions to the end,
replacing the original ones.

## Screenshots

[watch page](screenshots/watch-page.jpg)

[series page](screenshots/series-progress.jpg)

[series detail page](screenshots/series-details.jpg)

[watching a video](screenshots/playing-a-video.jpg)

[library page](screenshots/library.jpg)

[series level page](screenshots/series-level-page.jpg)
