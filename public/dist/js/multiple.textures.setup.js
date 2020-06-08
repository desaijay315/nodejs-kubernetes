$(document).ready(function () {
  var g = document.getElementById('pagination');

  function sliderChange(index) {
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
  }

  var counter = 0;
  var timer;
  timer = startCarousel();

  function startCarousel() {
    setTimeout(function () {
      var clickIndex;

      if (counter === g.children.length - 1) {
        clickIndex = 0;
      } else {
        clickIndex = counter + 1;
      }

      g.children[clickIndex].click();
    }, 8000);
  }

  window.onload = function () {
    setTimeout(function () {
      g.children[0].click();
    }, 500);
  };

  window.addEventListener("load", function () {
    // set up our WebGL context and append the canvas to our wrapper
    var webGLCurtain = new Curtains({
      container: "canvas",
      watchScroll: false // no need to listen for the scroll in this example

    }); // get our plane element

    var planeElements = document.getElementsByClassName("multi-textures"); // here we will handle which texture is visible and the timer to transition between images

    var slideshowState = {
      activeTextureIndex: 1,
      nextTextureIndex: 2,
      // does not care for now
      maxTextures: planeElements[0].querySelectorAll("img").length - 1,
      // -1 because displacement image does not count
      isChanging: false,
      transitionTimer: 0
    }; // handling errors

    webGLCurtain.onError(function () {
      // we will add a class to the document body to display original images
      document.body.classList.add("no-curtains", "image-1"); // handle simple slides management here

      planeElements[0].addEventListener("click", function () {
        if (slideshowState.activeTextureIndex < slideshowState.maxTextures) {
          slideshowState.nextTextureIndex = slideshowState.activeTextureIndex + 1;
        } else {
          slideshowState.nextTextureIndex = 1;
        }

        document.body.classList.remove("image-1", "image-2", "image-3", "image-4");
        document.body.classList.add("image-" + slideshowState.nextTextureIndex);
        slideshowState.activeTextureIndex = slideshowState.nextTextureIndex;
      });
    }).onContextLost(function () {
      // on context lost, try to restore the context
      webGLCurtain.restoreContext();
    }); // disable drawing for now

    webGLCurtain.disableDrawing();
    var vs = "\n        precision mediump float;\n        // default mandatory variables\n        attribute vec3 aVertexPosition;\n        attribute vec2 aTextureCoord;\n        uniform mat4 uMVMatrix;\n        uniform mat4 uPMatrix;\n        // varyings : notice we've got 3 texture coords varyings\n        // one for the displacement texture\n        // one for our visible texture\n        // and one for the upcoming texture\n        varying vec3 vVertexPosition;\n        varying vec2 vTextureCoord;\n        varying vec2 vActiveTextureCoord;\n        varying vec2 vNextTextureCoord;\n        // textures matrices\n        uniform mat4 activeTexMatrix;\n        uniform mat4 nextTexMatrix;\n        // custom uniforms\n        uniform float uTransitionTimer;\n        void main() {\n            gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n            // varyings\n            vTextureCoord = aTextureCoord;\n            vActiveTextureCoord = (activeTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n            vNextTextureCoord = (nextTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n            vVertexPosition = aVertexPosition;\n        }\n    ";
    var fs = "\n        precision mediump float;\n        varying vec3 vVertexPosition;\n        varying vec2 vTextureCoord;\n        varying vec2 vActiveTextureCoord;\n        varying vec2 vNextTextureCoord;\n        // custom uniforms\n        uniform float uTransitionTimer;\n        // our textures samplers\n        // notice how it matches the sampler attributes of the textures we created dynamically\n        uniform sampler2D activeTex;\n        uniform sampler2D nextTex;\n        uniform sampler2D displacement;\n        void main() {\n            // our displacement texture\n            vec4 displacementTexture = texture2D(displacement, vTextureCoord);\n            // slides transitions based on displacement and transition timer\n            vec2 firstDisplacementCoords = vActiveTextureCoord + displacementTexture.r * ((cos((uTransitionTimer + 90.0) / (90.0 / 3.141592)) + 1.0) / 1.25);\n            vec4 firstDistortedColor = texture2D(activeTex, vec2(vActiveTextureCoord.x, firstDisplacementCoords.y));\n            // same as above but we substract the effect\n            vec2 secondDisplacementCoords = vNextTextureCoord - displacementTexture.r * ((cos(uTransitionTimer / (90.0 / 3.141592)) + 1.0) / 1.25);\n            vec4 secondDistortedColor = texture2D(nextTex, vec2(vNextTextureCoord.x, secondDisplacementCoords.y));\n            // mix both texture\n            vec4 finalColor = mix(firstDistortedColor, secondDistortedColor, 1.0 - ((cos(uTransitionTimer / (90.0 / 3.141592)) + 1.0) / 2.0));\n            // handling premultiplied alpha\n            finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);\n            gl_FragColor = finalColor;\n        }\n    "; // some basic parameters

    var params = {
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        transitionTimer: {
          name: "uTransitionTimer",
          type: "1f",
          value: 0
        }
      }
    };
    var multiTexturesPlane = webGLCurtain.addPlane(planeElements[0], params);

    if (multiTexturesPlane) {
      multiTexturesPlane.onLoading(function () {
        webGLCurtain.needRender();
      }).onReady(function () {
        // the idea here is to create two additionnal textures
        // the first one will contain our visible image
        // the second one will contain our entering (next) image
        // that way we will deal with only activeTex and nextTex samplers in the fragment shader
        // and we could easily add more images in the slideshow...
        // first we set our very first image as the active texture
        var activeTex = multiTexturesPlane.createTexture({
          sampler: "activeTex",
          fromTexture: multiTexturesPlane.textures[slideshowState.activeTextureIndex]
        }); // next we set the second image as next texture but this is not mandatory
        // as we will reset the next texture on slide change

        var nextTex = multiTexturesPlane.createTexture({
          sampler: "nextTex",
          fromTexture: multiTexturesPlane.textures[slideshowState.nextTextureIndex]
        });
        var g = document.getElementById('pagination');

        for (var i = 0, len = g.children.length; i < len; i++) {
          (function (index) {
            g.children[i].addEventListener("click", function () {
              //alert(index)  ;
              var activeIndex = index;

              if (!slideshowState.isChanging) {
                // enable drawing for now
                webGLCurtain.enableDrawing();
                slideshowState.isChanging = true; // check what will be next image

                /*if(slideshowState.activeTextureIndex < slideshowState.maxTextures) {
                    slideshowState.nextTextureIndex = slideshowState.activeTextureIndex + 1;
                }
                else {
                    slideshowState.nextTextureIndex = 1;
                }*/

                slideshowState.nextTextureIndex = activeIndex + 1; // apply it to our next texture

                nextTex.setSource(multiTexturesPlane.images[slideshowState.nextTextureIndex]);
                clearTimeout(timer);
                counter = activeIndex;
                sliderChange(activeIndex);
                timer = startCarousel();
                setTimeout(function () {
                  // disable drawing now that the transition is over
                  webGLCurtain.disableDrawing();
                  slideshowState.isChanging = false;
                  slideshowState.activeTextureIndex = slideshowState.nextTextureIndex; // our next texture becomes our active texture

                  activeTex.setSource(multiTexturesPlane.images[slideshowState.activeTextureIndex]); // reset timer

                  slideshowState.transitionTimer = 0;
                }, 1700); // add a bit of margin to the timer
              }
            });
          })(i);
        }
        /* planeElements[0].addEventListener("click", function() {
           });*/

      }).onRender(function () {
        // increase or decrease our timer based on the active texture value
        if (slideshowState.isChanging) {
          // use damping to smoothen transition
          slideshowState.transitionTimer += (91 - slideshowState.transitionTimer) * 0.03; // force end of animation as damping is slower the closer we get from the end value

          if (slideshowState.transitionTimer >= 88.5 && slideshowState.transitionTimer !== 90) {
            slideshowState.transitionTimer = 90;
          }
        } // update our transition timer uniform


        multiTexturesPlane.uniforms.transitionTimer.value = slideshowState.transitionTimer;
      });
    }
  });
});