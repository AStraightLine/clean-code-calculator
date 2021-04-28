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
9. Removed functionality on 'Enter' key, equals only mapped to '='. As it seems 'Enter' also resends the currently selected key.
10. On user feedback, Implemented measures around use of '=' so that a user can either, chain operations after an equals with the result by pressing an operation button, or start a new calculation by selecting a new number directly after equals. Operations can still be chained without an equals, with an equals, but now the user doesn't have to hit
AC to start a completely new calculation after '='.