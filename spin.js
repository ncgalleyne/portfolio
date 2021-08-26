/*var speedBtn = document.querySelector('#speedSlider');
var speedVal = document.querySelector('#speedVal');

var bgS = document.querySelector('#bgSlider');
var bgV = document.querySelector('#bgVal');
*/
//initial vertex coordinates
var x1 = -0.25, y1 = 0.25, z1 = 0.0, x2 = 0.25, y2 = 0.25, z2 = 0.0, x3 = 0.25, y3 = -0.25, z3 = 0.0;
var x4 = -0.25, y4 = 0.25, z4 = 0.0, x5 = -0.25, y5 = -0.25, z5 = 0.0, x6 = 0.25, y6 = -0.25, z6 = 0.0;

/*================Creating a canvas=================*/
const canvas = document.getElementById('draw_surface');
let gl = canvas.getContext('webgl2');

let vertex_buffer = gl.createBuffer();
let color_buffer = gl.createBuffer();
let vertCode =
    '#version 300 es \n' +
    'in vec3 v_position;' +
    'in vec3 v_shade;' +
    'out vec4 V_SHADE;' +
    'uniform float angle;' +
    'void main(void) { ' +
    ' float posX = v_position.x * cos(angle) - v_position.y * sin(angle);' +
    ' float posY = v_position.x * sin(angle) + v_position.y * cos(angle);' +
    ' gl_Position = vec4(posX, posY, v_position.z, 1.0); ' +
    ' V_SHADE = vec4(v_shade, 1.0);' +
    '}';

let fragCode =
    '#version 300 es \n' +
    'precision mediump float; \n' +
    'out vec4 outFragColor;' +
    'in vec4 V_SHADE;' +
    'void main(void) {' +
    // RED, Green, Blue, Alpha
    ' outFragColor = V_SHADE;' +
    '}';

var angle = 0.0;
var speed = 0.5;
var val = 0.9;

function initWebGL() {
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    renderT();
    reDraw();
}

function drawTriangle() {
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function renderT() {
  let vertShader = gl.createShader(gl.VERTEX_SHADER);
  let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  let shaderProgram = gl.createProgram();

  let vertices = [
    //triangle 1
      x1, y1, z1, // vertex 1
      x2, y2, z2, // vertex 2
      x3, y3, z3, // vertex 3
   //triangle 2
      x4, y4, z4,
      x5, y5, z5,
      x6, y6, z6
  ];

  let color_vertices = [
    //triangle 1
      1.0, 0.0, 0.0, // vertex 1
      1.0, 1.0, 0.0, // vertex 2
      1.0, 1.0, 1.0, // vertex 3
   //triangle 2
      0.5, 0.5, 0.0,
      0.0, 0.5, 0.5,
      0.5, 0.0, 0.5
  ];
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color_vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  gl.shaderSource(vertShader, vertCode);
  gl.compileShader(vertShader);
  gl.shaderSource(fragShader, fragCode);
  gl.compileShader(fragShader);
  gl.attachShader(shaderProgram, vertShader);
  gl.attachShader(shaderProgram, fragShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  let coords = gl.getAttribLocation(shaderProgram, "v_position");
  gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(coords);

  gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
  let positions = gl.getAttribLocation(shaderProgram, "v_shade");
  gl.vertexAttribPointer(positions, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positions);

  let angle_pointer = gl.getUniformLocation(shaderProgram, "angle");
  gl.uniform1f(angle_pointer, angle);

  drawTriangle();
}

function reDraw(){
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  renderT();
  angle += speed;
  var stop = requestAnimationFrame(reDraw);
}
/*
speedBtn.addEventListener('input', function () {
    speed = parseFloat(this.value);
    speedVal.innerHTML = this.value;
});

bgS.addEventListener('input', function () {
	val = parseFloat(this.value);
    bgV.innerHTML = this.value;
});
*/
