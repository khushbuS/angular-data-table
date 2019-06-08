Technology Used:

Angular (https://angular.io/), <br />
SCSS (https://sass-lang.com/), <br />
Angular Material (https://material.angular.io/) <br />

Software installation required:
1.	Node.js (https://nodejs.org/en/)
2.	Angular CLI (https://cli.angular.io/)

User Instructions: <br />
Navigate to the project folder in cmd. <br />
Run “ng serve” to view the application at url - http://localhost:4200/ in browser.

Application Workflow: <br />

AppModule: The root module of the application. <br />
AppComponent: The root component. <br />
CustomMaterialModule: Separate NgModule created, that imports and then re-exports all of the Angular Material components. <br />

Models: <br />
User: Interface defining the types of data which is rendering into the main data table. <br />
SubTableElement: Interface defining the types of data which is rendering into the sub table. <br />
UserConfirmationService: to manage api calls. <br />

First View:  <br />
LoadDataComponent: The component with the next button and data table. <br />
ConfirmDialogComponent: The component that shows the dialog box to ask the user confirmation for navigating  to the next screen. <br />
  -> Unit testing case: Test for data or the response is getting successfully fetched by the api or not. <br />

Second View: <br />
ShowBoxesComponent: The component that show the 3 boxes design. 
 




 


 
