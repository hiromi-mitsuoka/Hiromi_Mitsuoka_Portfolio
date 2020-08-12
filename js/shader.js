let Shader;

function preload() {
  Shader = loadShader("../shader/shader.vert", "../shader/shader.frag");
}

function setup() {
  createCanvas(windowHeight / 3 * 2, windowHeight / 3 * 2, WEBGL);
  pixelDensity(1);
}

function draw() {
  Shader.setUniform('u_resolution', [width, height]);
  Shader.setUniform('u_time', frameCount * 0.01);
  shader(Shader);
  rect(0, 0, width, height);

}