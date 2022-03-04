function topNavList() {
  $('#topnavlist').html(
    `<li><a href="/index.html">Home</a></li>
        <li><a href="/videos/index.html">Videos</a></li>
        <li><a href="https://3.basecamp.com/3840950/projects/24178316">Basecamp</a></li>
        <li><a href="/resources.html">Resources</a></li>
        <li><a href="/terms/current/index.html">Student Links</a></li>
        <li><a href="http://teaching.alannarisse.com/grades/">Gradesheet</a></li>
        <li><a href="/inspiring.html">Inspiration</a></li>
        <li><a href="mailto:arisse@pdx.edu" class="button">email alanna</a></li>`
  )
}

function footerNavList() {
  $('#footernavlist').html(
    `<li><a href="mailto:arisse@pdx.edu">email alanna</a></li>
    <li><a href="/terms/current/index.html">student links</a></li>
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

const LINE_DURATION = 1
const LINE_WIDTH_START = 10

$(document).ready(function () {
  enableDrawingCanvas()
  resizeCanvas(window.innerWidth, window.innerHeight)
})

//////////////////////////
// Variable definitions //
//////////////////////////
var active = true

var canvas
var context

var newWidth = 1000
var newHeight = 800

var spread = 2

var lineColor = 'rgb(255, 255, 255)'
var lineDuration = LINE_DURATION
var lineFadeLinger = 1
var lineWidthStart = LINE_WIDTH_START
var fadeDuration = 50
var drawEveryFrame = 1 // Only adds a Point after these many 'mousemove' events

var clickCount = 0
var frame = 0

var flipNext = true

var points = new Array()

///////////////////////
// Program functions //
///////////////////////

// Find canvas reference & enable listeners
function enableDrawingCanvas() {
  if (canvas === undefined) {
    canvas = document.getElementById('myCanvas')
    context = canvas.getContext('2d')
    enableListeners()
    init()
  }
}

// Initialize animation start
function init() {
  draw()
}

// Draw current state
function draw() {
  if (active) {
    animatePoints()
    window.requestAnimFrame(draw)
  }
}

// Update mouse positions
function animatePoints() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)

  var duration = (lineDuration * 1000) / 60
  var point, lastPoint

  for (var i = 0; i < points.length; i++) {
    point = points[i]

    if (points[i - 1] !== undefined) {
      lastPoint = points[i - 1]
    } else {
      lastPoint = points[i]
    }

    point.lifetime += 1

    if (point.lifetime > duration) {
      points.splice(i, 1)
      continue
    }

    // Begin drawing stuff!
    var inc = point.lifetime / duration // 0 to 1 over lineDuration
    var dec = 1 - inc

    var spreadRate
    if (spread === 1) {
      spreadRate = lineWidthStart / (point.lifetime * 2)
    } // Lerp Decrease
    if (spread === 2) {
      spreadRate = lineWidthStart * (1 - inc)
    } // Linear Decrease

    var fadeRate = dec

    //context.strokeStyle = lineColor;
    context.lineJoin = 'round'
    context.lineWidth = spreadRate
    context.strokeStyle = 'rgb(' + Math.floor(3) + ',' + Math.floor(200 - 139 * dec) + ',' + Math.floor(255 - 0 * inc) + ')'

    var distance = Point.distance(lastPoint, point)
    var midpoint = Point.midPoint(lastPoint, point)
    var angle = Point.angle(lastPoint, point)

    context.beginPath()

    context.moveTo(lastPoint.x, lastPoint.y)
    context.lineTo(point.x, point.y)

    context.stroke()
    context.closePath()
  }

  //if (points.length > 0) { console.log(spreadRate + "|" + points.length + " points alive."); }
}

function addPoint(x, y) {
  flipNext = !flipNext
  var point = new Point(x, y, 0, flipNext)
  points.push(point)
}

//////////////////////////////
// Less Important functions //
//////////////////////////////

// RequestAnimFrame definition
window.requestAnimFrame = (function (callback) {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

// Update canvas dimensions based on input
function resizeCanvas(w, h) {
  if (context !== undefined) {
    context.canvas.width = w
    context.canvas.height = h

    newWidth = w
    newHeight = h
  }
}

// Listeners for mouse and touch events
function enableListeners() {
  //********* Mouse Listeners *********//
  $('#myCanvas').on('mousemove', function (e) {
    if (frame === drawEveryFrame) {
      addPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
      frame = 0
    }
    frame++
  })

  $('#myCanvas').on('mouseover', function (e) {})
  $('#myCanvas').on('mouseleave', function (e) {})

  //********* Touch Listeners *********//
  $('#myCanvas').on('touchstart', function (e) {
    var touch = e.touches[0]
  })
  $('#myCanvas').on('touchmove', function (e) {
    var touch = e.touches[0]
  })
  $('#myCanvas').on('touchend', function (e) {})
}

// POINT CLASS
// Cartersian location of where mouse location
// was previously at.
// Used to draw arcs between Points.
var Point = class Point {
  // Define class constructor
  constructor(x, y, lifetime, flip) {
    this.x = x
    this.y = y
    this.lifetime = lifetime
    this.flip = flip
  }

  // Get the distance between a & b
  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.sqrt(dx * dx + dy * dy)
  }

  // Get the mid point between a & b
  static midPoint(a, b) {
    const mx = a.x + (b.x - a.x) * 0.5
    const my = a.y + (b.y - a.y) * 0.5

    return new Point(mx, my)
  }

  // Get the angle between a & b
  static angle(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.atan2(dy, dx)
  }

  // Simple getter for printing
  get pos() {
    return this.x + ',' + this.y
  }
}
