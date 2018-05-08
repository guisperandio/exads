## Question 1 - Given below setngs menu and routes object could you explain what is the purpose of below HTML template and describe what we would see in the browser.

Answer - The purpose of this html markup is create a nav bar using Angular Material, which has 2 links ("API Keys" & "My Profile"). Each link has two property bindings ("routerLink" & "active" - to declare active the developer used # declaration to assign the value of routerLinkActive to rla)

## Question 2 - Provide the HTML mark-up using the component below to reproduce the view from screenshot provided.

Answer -

<exa-no-data [icon]="&#xE051" [title]="No Sites" [description]="You have not created any sites yet, use button bellow to create a site" [actonBtnTxt]="NEW SITE" (btnAction)="onActonBtnClick($event)">

OR I can define the values in variables in the parent component and just pass the variables in the html markup.


