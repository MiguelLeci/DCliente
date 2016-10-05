var cookbookString = new Array();
cookbookString[0] = "Joe's Cooking Book";
cookbookString[1] = "Sam's Cookbook";
cookbookString[2] = "JavaScript CookBook";
cookbookString[3] = "JavaScript BookCook";
 
// patrón de búsqueda
var pattern = /Cook.*Book/;
for (var i = 0; i < cookbookString.length; i++)
alert(cookbookString[i] + " " + pattern.test(cookbookString[i]));
