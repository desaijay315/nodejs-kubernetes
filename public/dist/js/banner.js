function curtainBanner() {
  try {
    // set up our WebGL context and append the canvas to our wrapper
    var webGLCurtain = new Curtains({
      container: "bannerCanvas",
      watchScroll: false // no need to listen for the scroll in this example

    }); // if there's any error during init, we're going to catch it here

    webGLCurtain.onError(function () {
      // we will add a class to the document body to display original images
      document.body.classList.add("no-curtains");
    }); // get our plane element

    var planeElement = document.getElementsByClassName("plane");
    var vs = "\n            #ifdef GL_ES\n            precision mediump float;\n            #endif\n\n            // those are the mandatory attributes that the lib sets\n            attribute vec3 aVertexPosition;\n            attribute vec2 aTextureCoord;\n\n            // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix\n            uniform mat4 uMVMatrix;\n            uniform mat4 uPMatrix;\n        \n            // our texture matrix uniform (this is the lib default name, but it could be changed)\n            uniform mat4 uTextureMatrix0;\n\n                    // if you want to pass your vertex and texture coords to the fragment shader\n                    varying vec3 vVertexPosition;\n                    varying vec2 vTextureCoord;\n\n                    void main() {\n                        vec3 vertexPosition = aVertexPosition;\n\n                        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n                        // set the varyings\n                // thanks to the texture matrix we will be able to calculate accurate texture coords\n                // so that our texture will always fit our plane without being distorted\n                        vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;\n                        vVertexPosition = vertexPosition;\n                    }\n        ";
    var fs = "\n        #ifdef GL_ES\n        precision mediump float;\n        #endif\n\n        // get our varyings\n        varying vec3 vVertexPosition;\n        varying vec2 vTextureCoord;\n\n        // the uniform we declared inside our javascript\n        uniform float uTime;\n\n        // our texture sampler (default name, to use a different name please refer to the documentation)\n        uniform sampler2D uSampler0;\n\n        void main() {\n        // get our texture coords\n                vec2 textureCoord = vTextureCoord;\n\n                // displace our pixels along both axis based on our time uniform and texture UVs\n                // this will create a kind of water surface effect\n                // try to comment a line or change the constants to see how it changes the effect\n                // reminder : textures coords are ranging from 0.0 to 1.0 on both axis\n                const float PI = 3.141592;\n\n                textureCoord.x += (\n                    sin(textureCoord.x * 10.0 + ((uTime * (PI / 3.0)) * 0.031))\n                    + sin(textureCoord.y * 10.0 + ((uTime * (PI / 2.489)) * 0.017))\n                    ) * 0.0075;\n\n                textureCoord.y += (\n                    sin(textureCoord.y * 20.0 + ((uTime * (PI / 2.023)) * 0.023))\n                    + sin(textureCoord.x * 20.0 + ((uTime * (PI / 3.1254)) * 0.037))\n                    ) * 0.0125;\n\n                gl_FragColor = texture2D(uSampler0, textureCoord);\n            }\n        "; // set our initial parameters (basic uniforms)

    var params = {
      vertexShader: vs,
      // our vertex shader ID
      fragmentShader: fs,
      // our framgent shader ID
      crossOrigin: "",
      // codepen specific
      uniforms: {
        time: {
          name: "uTime",
          // uniform name that will be passed to our shaders
          type: "1f",
          // this means our uniform is a float
          value: 0
        }
      }
    }; // create our plane mesh

    var plane = webGLCurtain.addPlane(planeElement[0], params); // if our plane has been successfully created
    // we use the onRender method of our plane fired at each requestAnimationFrame call

    plane && plane.onRender(function () {
      plane.uniforms.time.value++; // update our time uniform value
    });
  } catch (e) {
    console.log(e);
  }
}

window.addEventListener("load", function () {
  curtainBanner();
});