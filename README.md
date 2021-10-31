# CYPRESS TEST AUTOMATION
------------------------------------------------------------
1. Which tools you picked for the job and why? I choose Cypress,because it's very simple to start with, learn and setup,\
    it provides detailed debugging capabilities e.g console logs and view stack trace, to mention few.\
    It's also one of the best end-to-end web testing automation frameworks alongside selenium.

2. How would you present the output of the automated tests?  
      For more details see test report.We can use cypress dashboard or cli to present details reporting e.g All test runs, number of failed/passed tests,pending,         common errors in test and many more.
    
    
3. Which user actions and/or page elements you have decided to test and why?

          I decide to test elements user's will interact with.
          a. Page navigation(homepage and careers).
          b. Validated href links (CAREERS and VIEW HOT ROLES).
          c. Existence of open positions and Backend role in open position.
          e. Ability to apply for Backend role position by validating the form input fields
          (input name and email, message textarea and Send button).

          
 4. How do you run the test cases.

      **To run the test cases**
        From the **dashboard**
          npm cypress open or yarn cypress open then click on the spec.js file

        From the **terminal(cli)**
          npm cypress run or yarn cypress run


**Note: I could also test the following**

**TextBox:**\
          Form Send Confirmation message\
          Empty text box\
          Email address validation - invalid format\
          Verify name is mandatory or not\
          Verify email is mandatory or not\
          Verify application message is mandatory or not\
          Verify captcha is mandatory\
          Enter the value as blank spaces on mandatory fields\
          Enter the value as Special Character & Numbers on mandatory field\
          Minimum and Maximum character\
          Check tab validation is working or not\
          Check mouse hover functionality\
          Check spelling and Grammar in Confirmation message\
          Navigate forward, backward, refresh

**Captcha:**\
          CAPTCHA is present on the page.
          CAPTCHA code should not be repeated.\
          CAPTCHA should not be copyable by mouse/selection.\
          CAPTCHA should be changed if the page is refreshed.\
          New CAPTCHA should be generated if the wrong CAPTCHA was entered by user.\
          New CAPTCHA should be generated if skip button is clcked.\
          CAPTCHA should be readable/visible by human.\
          CAPTCHA should be displayed completely. Not cut by sides.\
          CAPTCHA should displayed related error when verify button is clicked without image selection.\
          CAPTCHA should expire and displayed related error after specific duration without image selection(timeout).


**Requirements:**
------------------------------------------------------------
* Node


# Installing + Testing
------------------------------------------------------------

## clone this repo to a local directory
git clone /repo link / or download and extract.

## cd into the cloned repo from the terminal
cd /your/project/path

## Install node_modules
npm install

## launch cypress test case/s with dashboard
npm cypress open or yarn cypress open

## launch cypress test case/s with cli
npm cypress run or yarn cypress run


**Help**
---------------------------------------------------------------
https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install


