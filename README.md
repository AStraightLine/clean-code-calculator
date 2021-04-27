This is an attempt at refactoring my earlier calculator build, with a focus on:
    Clean code, 
    Modularity, 
    Commenting, 
    and implementing keyboard functionality once the refactoring is complete.

1. Project setup - carried across the very basic pre-existing code which was already arranged nicely. 
2. Removed duplicated step when handling 'backspace' event.
3. Functionality up to the level of old calculator.
4. Fixed the user spam on operator bug.
5. Fixed bugs when dealing with results derived from / 0 or which are too large, aka NaN.
6. All eventListerner functionality put into reusable functions for implementing keyboard functionality. 
7. Keyboard functionality implemented for all operators. Bug with 'Enter' having functionality even when none is specified. 
8. Implemented keyboard functionality for number entry
9. Fixed bug on 'Enter' keypress.