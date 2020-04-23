
(function() {

	window.requestAnimationFrame =
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback) {
			return setTimeout(callback, 1000 / 60);
		};

	var mouseX = -500,
		mouseY = -500,
		scale,
		motion = 1,
		totalPoints = 20,
		points,
		viscosity = 30,
		damping = 0.1,
		dist = 150,
		canvas,
		context;

	function Point(x, y) {
		this.x = x;
		this.ix = x;
		this.vx = 0;
		this.y = y;
		this.iy = y;
		this.vy = 0;
	}

	Point.prototype.move = function() {
		var width = canvas.width / scale;
		var height = canvas.height / scale;
		this.vx += (this.ix - this.x) / viscosity * width;
		this.vy += (this.iy - this.y) / viscosity * height;

		var dx = this.x * width - mouseX / scale,
			dy = this.y * height - mouseY / scale;

		if (Math.sqrt(dx * dx + dy * dy) < dist) {
			var a = Math.atan2(dy, dx);
			this.vx += (Math.cos(a) * viscosity - dx) / viscosity;
			this.vy -= (Math.sin(a) * viscosity - dy) / viscosity;
		}

		this.vx *= (1 - damping);
		this.vy *= (1 - damping);
		this.x += this.vx / width;
		this.y += this.vy / height;

		if (this.y < 0) {
			this.y = 0;
		} else if (this.y > 1) {
			this.y = 1;
		}
	};

	function draw() {
		if (motion < 0.04) {
			return;
		}

		var p = points[totalPoints - 1],
			cx,
			cy;

		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = '#fafafa';
		try {
			context.fillStyle = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
		} catch (error) {}
		context.beginPath();
		context.moveTo(p.x * canvas.width, p.y * canvas.height);

		motion = 0;

		for (var i = totalPoints - 1; i > 0; i--) {
			p = points[i];
			p.move();

			motion += Math.abs(p.vx) + Math.abs(p.vy);

			cx = (p.x + points[i - 1].x) / 2 * canvas.width;
			cy = (p.y + points[i - 1].y) / 2 * canvas.height;

			if (i === 1) {
				cx = canvas.width;
			} else if (i === totalPoints - 1) {
				context.bezierCurveTo(p.x * canvas.width, p.y * canvas.height, cx, cy, cx, cy);
				p.x = 0;
			}

			context.bezierCurveTo(p.x * canvas.width, p.y * canvas.height, cx, cy, cx, cy);
		}

		context.lineTo(canvas.width, canvas.height);
		context.lineTo(0, canvas.height);
		context.closePath();
		context.fill();
	}

	function update() {
		requestAnimationFrame(update);
		draw();
	}

	function wobble() {
		for (var i = totalPoints - 1; i > 0; i--) {
			points[i].vy += Math.random() * 120 - 60;
		}
	}

	function resize() {
		var body = document.body,
			html = document.documentElement,
			width = Math.min(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth),
			height = 400,
			backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || 1;

		scale = (window.devicePixelRatio || 1) / backingStore;
		canvas.width = width * scale;
		canvas.height = height * scale;
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';

		motion = 1;
		points = [];
		totalPoints = Math.max(Math.round(width / 50), 10);
		for (var i = totalPoints; i--; ) {
			points.push(new Point(i / (totalPoints - 3), 0.5));
		}
		draw();
	}

	function init() {
		// iPadOS
		if (navigator.standalone !== undefined) {
			document.body.className = 'mobile';
			return;
		}

		if (document.body.className === 'mobile') {
			return;
		}

		canvas = document.querySelector('.surface');
		try {
			context = canvas.getContext('2d');
		} catch (error) {
			return;
		}

		canvas.className = 'surface'; // Instead of: canvas.classList.remove('disabled');

		canvas.onmousedown = wobble;
		window.onmousemove = function(event) {
			try {
				mouseX = (event.pageX || (event.clientX + document.body.scrollLeft)) * scale;
				mouseY = (event.pageY || (event.clientY + document.body.scrollTop)) * scale;
				motion = 1;
			} catch (error) {}
		};

		canvas.onmouseleave = function() {
			mouseX = mouseY = -500;
		};

		window.onresize = resize;

		resize();
		update();
	}

	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', init);
	}

}());