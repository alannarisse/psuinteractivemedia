$(".button").click(function () {
  //a random number is generated
  //that number chooses which string to display
  //the string displays in html
  let numVal = Math.floor(Math.random() * 10)
  const expr = numVal
  switch (expr) {
    case 1:
      console.log("Maybe")
      $("#show-me").html("Maybe")
      $("#picture").attr("src", "http://placekitten.com/201/200")
      break
    case 2:
      console.log("Absolutely Not")
      $("#show-me").html("Absolutely Not")
      $("#picture").attr("src", "http://placekitten.com/200/200")
      break
    case 3:
      console.log("Dont leave your house")
      $("#show-me").html("Dont leave your house")
      $("#picture").attr("src", "http://placekitten.com/200/210")
      break
    case 4:
      console.log("Yes yes yes")
      $("#show-me").html("Yes yes yes")
      $("#picture").attr("src", "http://placekitten.com/200/201")
      break
    case 5:
      console.log("Bananapants")
      $("#show-me").html("Bananapants")
      $("#picture").attr("src", "http://placekitten.com/202/200")
      break
    case 6:
      console.log("You will live a long life, maybe")
      $("#show-me").html("You will live a long life, maybe")
      $("#picture").attr("src", "http://placekitten.com/204/200")
      break
    case 7:
      console.log("Probably yes")
      $("#show-me").html("Probably yes")
      $("#picture").attr("src", "http://placekitten.com/205/200")
      break
    case 8:
      console.log("u will survive 2022")
      $("#show-me").html("u will survive 2022")
      $("#picture").attr("src", "http://placekitten.com/200/203")
      break
    case 9:
      console.log("ice cream solves most problems")
      $("#show-me").html("ice cream solves most problems")
      $("#picture").attr("src", "http://placekitten.com/207/200")
      break
    case 10:
      console.log("you will be rewarded")
      $("#show-me").html("you will be rewarded")
      $("#picture").attr("src", "http://placekitten.com/200/209")
      break
    default:
      console.log("No")
      $("#show-me").html("No")
  }
})

// Math.floor(Math.random() * 10) + 1

// if(something=true){
//   then do some stuff
// }
