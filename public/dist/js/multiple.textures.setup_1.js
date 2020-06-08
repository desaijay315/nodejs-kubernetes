$(document).ready(function () {
  var mathUtils = {
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    }
  };
  var g = document.getElementById('pagination');

  var sliderChange = function sliderChange(index) {
    try {
      //var g = document.getElementById('pagination');
      for (var i = 0, len = g.children.length; i < len; i++) {
        g.children[i].classList.remove('active');
      }

      g.children[index].classList.add('active');
      var k = document.getElementById('carouselText');

      for (var j = 0, jlen = k.children.length; j < jlen; j++) {
        k.children[j].classList.remove('active');
      }

      k.children[index].classList.add('active');
      var k_desc = document.getElementById('one_liner');

      for (var j_desc = 0, jlen_desc = k_desc.children.length; j_desc < jlen_desc; j_desc++) {
        k_desc.children[j_desc].classList.remove('active');
      }

      k_desc.children[index].classList.add('active');
    } catch (e) {
      console.log();
    }
  };

  var carouselContainer = document.getElementById('carouselText');
  carouselContainer.onmouseover = carouselContainer.onmouseout = carouselHandler;

  function carouselHandler(event) {
    if (event.type == 'mouseover') {
      clearTimeout(autoClick);
    }

    if (event.type == 'mouseout') {
      startCarousel();
    }
  }

  var counter = 0;
  var timer;
  var autoClick;
  timer = startCarousel();

  function startCarousel() {
    autoClick = setTimeout(function () {
      var clickIndex;

      if (counter === g.children.length - 1) {
        clickIndex = 0;
      } else {
        clickIndex = counter + 1;
      }

      g.children[clickIndex].click();
    }, 5000);
  }

  window.onload = function () {
    setTimeout(function () {
      g.children[0].click();
    }, 500);
  };

  window.onload = function () {
    var navMain = document.querySelectorAll("#pagination span");
    var currentIndex = 0;
    var lastIndex = 0;
    var textureActive = "";
    var nextTexture = "";
    var start = performance.now();
    var progress = false;

    var createCanvas = function createCanvas() {
      var shader = {
        vertex: "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    // those are the mandatory attributes that the lib sets\n    attribute vec3 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix\n    uniform mat4 uMVMatrix;\n    uniform mat4 uPMatrix;\n\n    uniform mat4 textureActiveMatrix;\n    uniform mat4 nextTextureMatrix;\n\n    // if you want to pass your vertex and texture coords to the fragment shader\n    varying vec3 vVertexPosition;\n    varying vec2 vTextureActiveCoord;\n    varying vec2 vNextTextureCoord;\n\n    void main() {\n        vec3 vertexPosition = aVertexPosition;\n        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n        // set the varyings\n        vTextureActiveCoord = (textureActiveMatrix * vec4(aTextureCoord, 0., 1.)).xy;\n        vNextTextureCoord = (nextTextureMatrix * vec4(aTextureCoord, 0., 1.)).xy;\n        vVertexPosition = vertexPosition;\n    }",
        fragment: "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    #define PI2 6.28318530718\n    #define PI 3.14159265359\n    #define TWO_PI 6.28318530718\n    #define S(a,b,n) smoothstep(a,b,n)\n\n    // get our varyings\n    varying vec3 vVertexPosition;\n    varying vec2 vTextureActiveCoord;\n    varying vec2 vNextTextureCoord;\n\n    // the uniform we declared inside our javascript\n    uniform float uProgress;\n\n    // our texture sampler (default name, to use a different name please refer to the documentation)\n    uniform sampler2D textureActive;\n    uniform sampler2D nextTexture;\n    uniform sampler2D displacementMap;\n\n    void main(){\n        vec2 uv0 = vTextureActiveCoord;\n        vec2 uv1 = vNextTextureCoord;\n\n        float progress0 = uProgress;\n        float progress1 = 1. - uProgress;\n\n        vec4 disp0 = texture2D(textureActive, uv0);\n        vec4 disp1 = texture2D(nextTexture, uv1);\n\n        float t0 = progress0 * (disp0.r * .3) * 2.;\n        float t1 = progress1 * (disp1.r * .3) * 2.;\n\n        vec4 color0 = texture2D(textureActive, vec2(uv0.x, uv0.y + t1)) * progress1;\n        vec4 color1 = texture2D(nextTexture, vec2(uv1.x, uv1.y - t1)) * progress0;\n\n        gl_FragColor = color0 + color1;\n    }\n    "
      }; // set up our WebGL context and append the canvas to our wrapper

      var webGLCurtain = new Curtains("canvas_banner"); // get our plane element

      var planeElement = document.getElementsByClassName("plane")[0]; // set our initial parameters (basic uniforms)

      var params = {
        vertexShader: shader.vertex,
        // our vertex shader ID
        fragmentShader: shader.fragment,
        // our framgent shader ID
        widthSegments: 40,
        heightSegments: 40,
        // we now have 40*40*6 = 9600 vertices !
        uniforms: {
          progress: {
            name: "uProgress",
            // uniform name that will be passed to our shaders
            type: "1f",
            // this means our uniform is a float
            value: 0
          }
        }
      };
      webGLCurtain.disableDrawing(); // create our plane mesh

      var plane = webGLCurtain.addPlane(planeElement, params); // use the onRender method of our plane fired at each requestAnimationFrame call

      plane.onReady(function () {
        webGLCurtain.needRender();
        textureActive = plane.createTexture("textureActive");
        nextTexture = plane.createTexture("nextTexture");
        textureActive.setSource(plane.images[currentIndex]);
        initEvents(webGLCurtain, plane);
      }).onRender(function () {
        update(webGLCurtain, plane);
      });
    };

    lastIndex = 0;

    var update = function update(webGLCurtain, plane) {
      if (progress) {
        var now = performance.now();
        var time = Math.min(1, (now - start) / 800);
        plane.uniforms.progress.value = mathUtils.easeOutCubic(time);

        if (time >= 1) {
          webGLCurtain.disableDrawing();
          textureActive.setSource(plane.images[currentIndex]);
          progress = false;
        }
      }
    };

    var animateBanner = function animateBanner(webGLCurtain, plane, index) {
      if (index === currentIndex) return;
      webGLCurtain.enableDrawing();
      currentIndex = index;
      nextTexture.setSource(plane.images[currentIndex]);
      clearTimeout(timer);
      counter = currentIndex;
      sliderChange(currentIndex);
      timer = startCarousel();
      progress = true;
      start = performance.now();
    };

    var initEvents = function initEvents(webGLCurtain, plane) {
      navMain.forEach(function (span, i) {
        span.addEventListener("click", function () {
          animateBanner(webGLCurtain, plane, i);
        });
      });
    };

    createCanvas();
  };
});