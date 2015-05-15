#Local Storage Age Gate

Age Gate using HTML5 local storage.

This is an alternative to using cookies and redirects for age gates, which appear mostly on alcoholic beverage websites.

##Use

Create an absolute positioned element with a class of "age-gate" to block the visitor from using the site. The element should contain a button with an id of "button-yes" which the user clicks on if they are old enough to view the site. Then a local storage object will be stored in the browser, which will prevent the element from showing up in the future.
