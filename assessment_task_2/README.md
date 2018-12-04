# assessment
Automation assessment using open source tools

## assessment - task 2

This assessment consist out of the following structure:
   > - features
   >    - support
   >    - step_definitions
   > - node_modules
   > - pages

   > - screenshots
   > - test
   >     - history
   >     - report
   > - .gitignore
   > - debug.log
   > - index.js
   > - package.json
   > - package-lock.json
   > - README.md
   > - rerun.txt
   > - usage.txt

To run the test use the following command
```sh
$ npm test
```

To generate test report after the test has run, execute the command
```sh
$ node ./index.js
Cucumber HTML report test/report/cucumber_report.html generated successfully.
```

## Test Scenario Issues:
During this test execution you will notice that there is a bug when adding an user, and the value when selecting a
Customer does not get stored at all.

I have update the test to refresh first, before searching for the user and verifying the user is update successfully



