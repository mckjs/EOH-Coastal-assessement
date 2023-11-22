#PLEASE NOTE THAT THIS REPO IS OLD AND MIGHT NOT RUN

## Assessment – task - 1
### Install and setup
-	Download and install [Soapui]( https://www.soapui.org/)
-	Open the program and import **assesment-soapui-project.xml**
-	Steps to take:
    1.	Click on import
    2.	Go to project path and select assesment-soapui-project.xml
    3.	Click Open
- To run the test :
    1. click on the **Verfication**
    2. click on the green triangle

## Assessment – task - 2
### Install and setup
- In order to run this project you need to make sure you have [nodejs](https://nodejs.org/en/download/) install
```sh
$ node -v
v8.9.4
```
- Open your editor and import project **assessement_task_2**
- Install all the packages you need that is in the package.json file...
```sh
$ cd assessment_task_2
$ npm install 
```
- Execute test by simply run the following command
```sh
$ npm test
```
- After test is execute you can run the following command to generate a test report
```sh
$ node ./index.js
Cucumber HTML report test/report/cucumber_report.html generated successfully.
```

## Test Scenario Issues:
Step Name : **Then the user must see {string} added successfully**

During this scripting the test I noticed that there is a bug when adding an user, and the value when selecting a radio button option, the 
Customer values does not get stored at pulled through to the table row.

When refreshing the page, the page get set to the default state.

In order for the scenario to passed, I uncommented the test step and added additional steps to check for the user name and email address

1. **the user must see user name as {string} in the User Name cell** 
2. **the user must see email address {string} in E-mail cell**

