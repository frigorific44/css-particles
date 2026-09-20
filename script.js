const Anim = {
  FLOAT: 0,
  BURST: 1,
  DRIFT_IN: 2
};
function animation(id, shapeClass, anim) {
  if (anim == Anim.FLOAT) {
    floatingAnimation(id, shapeClass);
  } else if (anim == Anim.BURST) {
    burstAnimation(id, shapeClass);
  }
}
animation("to-animate", "four-star", Anim.FLOAT);

function randomInt(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function floatingAnimation(id, shapeClass) {
  const name = document.getElementById(id);
  var heartCount = (name.clientWidth / 50) * 5;
  for (var i = 0; i < heartCount; i++) {
    var heartSize = randomInt(60, 120) / 10;
    const heart = document.createElement("span");
    heart.setAttribute("class", shapeClass + " floating particle");
    heart.setAttribute(
      "style",
      [
        `top: ${randomInt(40, 80)}%`,
        `left: ${randomInt(0, 100)}%`,
        `width: ${heartSize}px`,
        `height: ${heartSize}px`,
        `animation-delay: -${randomInt(0, 3)}s`,
        `animation-duration: ${randomInt(2, 5)}s`
      ].join(";")
    );
    name.append(heart);
  }
}

function burstAnimation(id, shapeClass) {
  const name = document.getElementById(id);
  var heartCount = (name.clientWidth / 50) * 5;
  for (var i = 0; i < heartCount; i++) {
    var heartSize = randomInt(80, 160) / 10;
    const heart = document.createElement("span");
    heart.setAttribute("class", shapeClass + " shooting-star particle");
    heart.setAttribute(
      "style",
      [
        `width: ${heartSize}px`,
        `height: ${heartSize}px`,
        `--r:${randomInt(0, 360)}deg`,
        `animation-delay: -${randomInt(0, 3000)}ms`,
        `animation-duration: ${randomInt(1000, 2000)}ms`
      ].join(";")
    );
    name.append(heart);
  }
}
