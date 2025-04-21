`<img id="demo" src="myImage.png">

<button onclick="myFunction()">Click Me!</button>`

function myFunction() {
  document.getElementById('demo').src = "myImage.png";
  }



  for (let i = 0; i < jsonData.length; i++) {
    const person = jsonData[i];
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }