function curtainBanner(){
    try{
        // set up our WebGL context and append the canvas to our wrapper
        var webGLCurtain = new Curtains({
            container: "bannerCanvas",
            watchScroll: false // no need to listen for the scroll in this example
        });
        
        // if there's any error during init, we're going to catch it here
        webGLCurtain.onError(function() {
            // we will add a class to the document body to display original images
            document.body.classList.add("no-curtains");
        });

        // get our plane element
        var planeElement = document.getElementsByClassName("plane");

        var vs = `
            #ifdef GL_ES
            precision mediump float;
            #endif

            // those are the mandatory attributes that the lib sets
            attribute vec3 aVertexPosition;
            attribute vec2 aTextureCoord;

            // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
            uniform mat4 uMVMatrix;
            uniform mat4 uPMatrix;
        
            // our texture matrix uniform (this is the lib default name, but it could be changed)
            uniform mat4 uTextureMatrix0;

                    // if you want to pass your vertex and texture coords to the fragment shader
                    varying vec3 vVertexPosition;
                    varying vec2 vTextureCoord;

                    void main() {
                        vec3 vertexPosition = aVertexPosition;

                        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

                        // set the varyings
                // thanks to the texture matrix we will be able to calculate accurate texture coords
                // so that our texture will always fit our plane without being distorted
                        vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
                        vVertexPosition = vertexPosition;
                    }
        `;
    
        var fs = `
        #ifdef GL_ES
        precision mediump float;
        #endif

        // get our varyings
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        // the uniform we declared inside our javascript
        uniform float uTime;

        // our texture sampler (default name, to use a different name please refer to the documentation)
        uniform sampler2D uSampler0;

        void main() {
        // get our texture coords
                vec2 textureCoord = vTextureCoord;

                // displace our pixels along both axis based on our time uniform and texture UVs
                // this will create a kind of water surface effect
                // try to comment a line or change the constants to see how it changes the effect
                // reminder : textures coords are ranging from 0.0 to 1.0 on both axis
                const float PI = 3.141592;

                textureCoord.x += (
                    sin(textureCoord.x * 10.0 + ((uTime * (PI / 3.0)) * 0.031))
                    + sin(textureCoord.y * 10.0 + ((uTime * (PI / 2.489)) * 0.017))
                    ) * 0.0075;

                textureCoord.y += (
                    sin(textureCoord.y * 20.0 + ((uTime * (PI / 2.023)) * 0.023))
                    + sin(textureCoord.x * 20.0 + ((uTime * (PI / 3.1254)) * 0.037))
                    ) * 0.0125;

                gl_FragColor = texture2D(uSampler0, textureCoord);
            }
        `;
    

        // set our initial parameters (basic uniforms)
        var params = {
            vertexShader: vs, // our vertex shader ID
            fragmentShader: fs, // our framgent shader ID
            crossOrigin: "", // codepen specific
            uniforms: {
            time: {
                name: "uTime", // uniform name that will be passed to our shaders
                type: "1f", // this means our uniform is a float
                value: 0,
            },
            }
        }

        // create our plane mesh
        var plane = webGLCurtain.addPlane(planeElement[0], params);

        // if our plane has been successfully created
        // we use the onRender method of our plane fired at each requestAnimationFrame call
        plane && plane.onRender(function() {
            plane.uniforms.time.value++; // update our time uniform value
        });
    }catch(e){
        console.log(e);
    }
}
    
    window.addEventListener("load", function() {
        curtainBanner();
    });
    