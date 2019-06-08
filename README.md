Technology Used:

Angular (https://angular.io/), 
SCSS (https://sass-lang.com/), 
Angular Material (https://material.angular.io/)

Software installation required:
1.	Node.js (https://nodejs.org/en/)
2.	Angular CLI (https://cli.angular.io/)

User Instructions:
Navigate to the project folder in cmd.
Run “ng serve” to view the application at url - http://localhost:4200/ in browser.

Application Workflow:

AppModule: The root module of the application.
AppComponent: The root component.
CustomMaterialModule: Separate NgModule created, that imports and then re-exports all of the Angular Material components.

Models:
User: Interface defining the types of data which is rendering into the main data table.
SubTableElement: Interface defining the types of data which is rendering into the sub table.
UserConfirmationService: to manage api calls.

First View: 
LoadDataComponent: The component with the next button and data table.
ConfirmDialogComponent: The component that shows the dialog box to ask the user confirmation for navigating  to the next screen.
  -> Unit testing case: Test for data or the response is getting successfully fetched by the api or not. 

Second View:
ShowBoxesComponent: The component that show the 3 boxes design. 
 




 


 
