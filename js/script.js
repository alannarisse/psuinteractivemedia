function topNavList() {
  $("#topnavlist").html(
    `<li><a href="/index.html">Home</a></li>
        <li><a href="/videos/index.html">Videos</a></li>
        <li><a href="https://3.basecamp.com/3840950/projects/21449773">Basecamps</a></li>
        <li><a href="/resources.html">Resources</a></li>
        <li><a href="/terms/sp21des342/index.html">Student Links</a></li>
        <li><a href="http://teaching.alannarisse.com/grades/">Gradesheet</a></li>
        <li><a href="/inspiring.html">Inspiration</a></li>
        <li><a href="mailto:arisse@pdx.edu" class="button">email alanna</a></li>`
  )
}

function footerNavList() {
  $("#footernavlist").html(
    `<li><a href="mailto:arisse@pdx.edu">email alanna</a></li>
    <li><a href="/terms/wi21des34x/index.html">student links</a></li>
      <li><a href="/portfolios.html">Portfolio Inspiration</a></li>
      <li><a href="/keep-sane.html">Keep Sane</a></li>
      <li><a href="https://psu.gd" target="_blank">PSU.gd</a></li>
      <li><a href="/glossary.html">Glossary</a></li>

      <li><a href="https://www.facebook.com/PSUArtandDesign/?tn-str=k*F" target="_blank">PSUGD on Facebook</a></li>
      <li><a href="https://designportland.org/directory" target="_blank">Design PDX Directory</a></li>
      <li><a href="https://www.pdx.edu/registration/academic-calendar">PSU calendar</a></li>
    <li>&copy; Copyright Alanna Risse 2021</li>`
  )
}
function init() {
  topNavList()
  footerNavList()
}

$(init)
