//localStorage.setItem('name', 'alanna') ///localStorage.removeItem('name')
//localStorage.setItem('age', '30')
// all are strings in loca storage
//localStorage.getItem('age')
//localStorage.key(1) //starts at 0.

let inpKey = document.getElementById('inpKey')
let inpVal = document.getElementById('inpVal')
let btnSub = document.getElementById('btnSub')
let lsOutput = document.getElementById('lsOutput')
let lsClear = document.getElementById('lsClear')

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i)
  let value = localStorage.getItem(key)
  lsOutput.innerHTML += `${key}: ${value}<br>`
}

btnSub.onclick = function () {
  let key = inpKey.value
  let val = inpVal.value
  //console.log(key)
  //console.log(val)

  if (key && val) {
    localStorage.setItem(key, val)
    lsOutput.innerHTML += `${key}: ${val}<br>`
    inpKey.value = ''
    inpVal.value = ''
  }
}

lsClear.onclick = function () {
  localStorage.clear()
  location.reload()
}

//console.log(localStorage)
