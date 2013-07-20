local-storage-age-gate
======================

Age Gate using HTML5 local storage.

This is an alternative to using cookies and redirects for age gates, which appear mostly on alcoholic beverage websites.

The code creates a absolute positioned div that overlays the site, preventing visitors from seeing content until they affirm that they are over 21. It stores a value in local storage and remembers it until the value is deleted. This means that the website visitor will not be inconvenienced by the splash screen as often as they would if cookies were being used.

Feel free to use in any of your projects. If you make it better, feel free to let me know so I can do the same. 


TO USE:
1) Copy scripts to the <head> of all entry pages.
2) Copy the HTML content to the <body> of same pages. I suggest the content be added to the very end of your existing content, so search engines are less likely to include the "Are you over 21?" copy in the snippets.
3) Place CSS file in a directory called "CSS" in the website's root, or copy the styles to your existing CSS document.

