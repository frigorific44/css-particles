const Anim = {
  FLOAT: 0,
  BURST: 1,
  WALK_IN: 2
};
const linearDensityRate = 0.1;
function animation(id, shapeClass, anim) {
  if (anim == Anim.FLOAT) {
    beddingAnimation(id, shapeClass, 'floating');
  } else if (anim == Anim.BURST) {
    burstAnimation(id, shapeClass);
  } else if (anim == Anim.WALK_IN) {
    beddingAnimation(id, shapeClass, 'walk-in');
  }
}
animation("to-animate", "four-star", Anim.BURST);

function randomInt(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function beddingAnimation(id, shapeClass, animClass) {
  const name = document.getElementById(id);
  var heartCount = name.clientWidth * linearDensityRate;
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
    name.append(heart);
  }
}

function burstAnimation(id, shapeClass) {
  const name = document.getElementById(id);
  var heartCount = name.clientWidth * 2 * linearDensityRate;
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
