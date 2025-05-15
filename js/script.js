function topNavList() {
  $('#topnavlist').html(
    `<li><a href="/index.html">Home</a></li>
        <li><a href="/videos/index.html">Videos</a></li>
        <li><a href="/resources.html">Resources</a></li>
        <li><a href="/shortcuts.html">Shortcuts</a></li>
        <li><a href="/terms/current/index.html">Student Links</a></li>
        <li><a href="/terms/past/index.html">Student Work Archive</a></li>
        <li><a href="/inspiring.html">Inspiration</a></li>
        <li><a href="/projects">Projects</a></li>
        `
  )
}

function glossaryTab() { 
  $('.glossary-tab').html(`
  <a href="/glossary.html"><img src="/images/icons/glossary.png"> Glossary</a>
  `)
}

function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}

function footerNavList() {
  $('#footernavlist').html(
    `<li><a href="mailto:arisse@pdx.edu">email alanna</a></li>
      <li><a href="/portfolios.html">Portfolio Inspiration</a></li>
      <li><a href="/glossary.html">Glossary</a></li>
      <li><a href="https://www.pdx.edu/registration/academic-calendar">PSU calendar</a></li>
    <li>&copy; Alanna Risse 2025</li>`
  )
}


function init() {
  topNavList()
  footerNavList()
  glossaryTab()
}

$(init)
//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)
