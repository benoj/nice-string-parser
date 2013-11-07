Mathematical Expression Parser
=========

Method:
------

This solution was implemented using TDD and CI. Starting from the simplest tests and gaining more complexity. (see commit log)

The expression parser was refactored into a POSTFIX parsed solution in order to deal with presciences more cleanly.

Acceptance
----------
The following file contains the specified acceptance requirements  

    ./test/acceptance


Setup
-----

On a windows environment go to: http://nodejs.org/ and install node.js > 0.6.3
 
in the command line navigate to the project root and execute  `npm install`. This will install the dependencies required to run the program.

run `npm test` to run the tests

