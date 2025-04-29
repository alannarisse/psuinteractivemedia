const myObj = [
  {
    id: 1,
    narrator: '',
    naratorClass: 'stnd-nar opac-half',
    person: '',
    personClass: '', 
    storyContent: '',
    storyClass: ''
  },
]

$('.story-window .left').html(
  if(myObj[index].narratorClass == null || '') { 

  `
  <p class="${myObj[index].storyClass}">
  ${myObj[index].story}
  </p>
  `
  }
  `
  <p class="${myObj[index].narratorClass}">
  ${myObj[index].narrator}
  </p>
  `

)
  $('.story-window .right').html(
  `
  <p class="${myObj[index].naratorClass}">
  ${myObj[index].person}
  </p>
  `
)


  <main class="story-window">
    <div class="left">
    <p class=""></p>
      </div>
    <div class="right">
<p class=""></p>
    </div>
    </main>
      
