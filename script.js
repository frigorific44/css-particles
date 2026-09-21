const linearDensityRate = 0.1;

document.querySelectorAll('.to-animate').forEach(function(element) {
  var anim = element.dataset.animation;
  var shape = element.dataset.shape;
  console.log(`animation: ${anim}`);
  console.log(`shape: ${shape}`);
  if (anim == 'float') {
    beddingAnimation(element, shape, 'floating');
  } else if (anim == 'burst') {
    burstAnimation(element, shape);
  } else if (anim == 'walk-in') {
    beddingAnimation(element, shape, 'walk-in');
  } else if (anim == 'emanate') {
    emanationAnimation(element, shape);
  }
})

function randomInt(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function lerp(start, end, amount) {
  return (start*amount) + (end * (1-amount));
}

function beddingAnimation(element, shapeClass, animClass) {
  var heartCount = element.clientWidth * linearDensityRate;
  for (var i = 0; i < heartCount; i++) {
    var heartSize = randomInt(60, 120) / 10;
    const heart = document.createElement("span");
    heart.setAttribute("class", [shapeClass, animClass, "particle"].join(" "));
    heart.setAttribute(
      "style",
      [
        `top: ${randomInt(40, 80)}%`,
        `left: ${randomInt(0, 100)}%`,
        `width: ${heartSize}px`,
        `height: ${heartSize}px`,
        `animation-delay: -${randomInt(0, 3000)}ms`,
        `animation-duration: ${randomInt(2000, 5000)}ms`
      ].join(";")
    );
    element.append(heart);
  }
}

function emanationAnimation(element, shapeClass) {
  var heartCount = element.clientWidth * 2 * linearDensityRate;
  console.log(`Height: ${element.clientHeight}`);
  for (var i = 0; i < heartCount; i++) {
    var heartSize = randomInt(80, 160) / 10;
    var top = randomInt(20, 80);
    var left = randomInt(0, 100);
    var theta = lerp(90, -90, left/100);
    if (top > 50) {
      theta = 180 - theta;
    }
    const heart = document.createElement("span");
    heart.setAttribute("class", shapeClass + " shooting-star particle");
    heart.setAttribute(
      "style",
      [
        `top: ${top}%`,
        `left: ${left}%`,
        `width: ${heartSize}px`,
        `height: ${heartSize}px`,
        `--r:${theta}deg`,
        `animation-delay: -${randomInt(0, 3000)}ms`,
        `animation-duration: ${randomInt(1000, 2000)}ms`
      ].join(";")
    );
    element.append(heart);
  }
}

function burstAnimation(element, shapeClass) {
  var heartCount = element.clientWidth * 2 * linearDensityRate;
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
    element.append(heart);
  }
}
