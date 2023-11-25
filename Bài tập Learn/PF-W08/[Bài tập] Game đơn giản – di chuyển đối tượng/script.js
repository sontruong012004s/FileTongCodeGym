function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed || 200; // Tốc độ mặc định là 20 nếu không có giá trị được truyền vào

  this.getHeroElement = function () {
      return '<img width="' + this.size + '"' +
          ' height="' + this.size + '"' +
          ' src="' + this.image + '"' +
          ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
      this.left += this.speed;
      console.log('Moving right: ' + this.left);
  }

  this.moveLeft = function () {
      this.left -= this.speed;
      console.log('Moving left: ' + this.left);
  }

  this.moveDown = function () {
      this.top += this.speed;
      console.log('Moving down: ' + this.top);
  }

  this.moveUp = function () {
      this.top -= this.speed;
      console.log('Moving up: ' + this.top);
  }
}

var hero = new Hero('pikachu.png', 20, 30, 200, 20);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
      hero.moveRight();
  } else {
      hero.moveLeft(); // Nếu đến cạnh phải, di chuyển về bên trái
  }

  if (hero.top < window.innerHeight - hero.size) {
      hero.moveDown();
  } else {
      hero.moveUp(); // Nếu đến cạnh dưới, di chuyển lên trên
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500);
}

start();
