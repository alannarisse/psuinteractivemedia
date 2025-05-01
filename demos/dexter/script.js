.flash { 
  animation - name: flash;
}
.intro { 
  animation - name: intro;
  animation - delay: 3;
  
}

@keyframes flash{ 
  0 % {}
  100 % {}
}


const myObj = [
  {
    id: 1,
    narrator: '',
    naratorClass: 'stnd-nar opac-half',
    person: '',
    personClass: '', 
    storyContent: '',
    storyClass: 'flash intro'
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
      
