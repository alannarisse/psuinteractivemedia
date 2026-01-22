
 var theText = $(".typer").data("text"),
 theTextLength = theText.length,
 n = 0,
 theTyper = setInterval(function () {
   $(".typer").each(function () {
     $(this).html($(this).html() + theText[n]);
   });
   n += 1;
   if (n === theTextLength) {
     clearInterval(theTyper);
   }
 }, 120);
