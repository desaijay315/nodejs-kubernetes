$(document).ready(function(){

const mathUtils = {
    easeOutCubic: t => --t * t * t + 1
};


var g = document.getElementById('pagination');
const sliderChange = (index) => {
    try{
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

    }catch (e) {
        console.log();
    }
}

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
    autoClick = setTimeout(function(){
        var clickIndex;
        if(counter === g.children.length-1){
            clickIndex = 0
        }else{
            clickIndex = counter+1;
        }
        g.children[clickIndex].click();
    }, 5000);
}
window.onload = function() {
    setTimeout(function() {
        g.children[0].click();
    },500);
};

window.onload = () => {
    const navMain = document.querySelectorAll("#pagination span");
    let currentIndex = 0;
    let lastIndex = 0;
    let textureActive = "";
    let nextTexture = "";
    let start = performance.now();
    let progress = false;

    const createCanvas = () => {
        const shader = {
            vertex: `
    #ifdef GL_ES
    precision mediump float;
    #endif

    // those are the mandatory attributes that the lib sets
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    uniform mat4 textureActiveMatrix;
    uniform mat4 nextTextureMatrix;

    // if you want to pass your vertex and texture coords to the fragment shader
    varying vec3 vVertexPosition;
    varying vec2 vTextureActiveCoord;
    varying vec2 vNextTextureCoord;

    void main() {
        vec3 vertexPosition = aVertexPosition;
        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

        // set the varyings
        vTextureActiveCoord = (textureActiveMatrix * vec4(aTextureCoord, 0., 1.)).xy;
        vNextTextureCoord = (nextTextureMatrix * vec4(aTextureCoord, 0., 1.)).xy;
        vVertexPosition = vertexPosition;
    }`,
            fragment: `
    #ifdef GL_ES
    precision mediump float;
    #endif

    #define PI2 6.28318530718
    #define PI 3.14159265359
    #define TWO_PI 6.28318530718
    #define S(a,b,n) smoothstep(a,b,n)

    // get our varyings
    varying vec3 vVertexPosition;
    varying vec2 vTextureActiveCoord;
    varying vec2 vNextTextureCoord;

    // the uniform we declared inside our javascript
    uniform float uProgress;

    // our texture sampler (default name, to use a different name please refer to the documentation)
    uniform sampler2D textureActive;
    uniform sampler2D nextTexture;
    uniform sampler2D displacementMap;

    void main(){
        vec2 uv0 = vTextureActiveCoord;
        vec2 uv1 = vNextTextureCoord;

        float progress0 = uProgress;
        float progress1 = 1. - uProgress;

        vec4 disp0 = texture2D(textureActive, uv0);
        vec4 disp1 = texture2D(nextTexture, uv1);

        float t0 = progress0 * (disp0.r * .3) * 2.;
        float t1 = progress1 * (disp1.r * .3) * 2.;

        vec4 color0 = texture2D(textureActive, vec2(uv0.x, uv0.y + t1)) * progress1;
        vec4 color1 = texture2D(nextTexture, vec2(uv1.x, uv1.y - t1)) * progress0;

        gl_FragColor = color0 + color1;
    }
    `
        };

        // set up our WebGL context and append the canvas to our wrapper
        const webGLCurtain = new Curtains("canvas_banner");

        // get our plane element
        const planeElement = document.getElementsByClassName("plane")[0];

        // set our initial parameters (basic uniforms)
        const params = {
            vertexShader: shader.vertex, // our vertex shader ID
            fragmentShader: shader.fragment, // our framgent shader ID
            widthSegments: 40,
            heightSegments: 40, // we now have 40*40*6 = 9600 vertices !
            uniforms: {
                progress: {
                    name: "uProgress", // uniform name that will be passed to our shaders
                    type: "1f", // this means our uniform is a float
                    value: 0
                }
            }
        };

        webGLCurtain.disableDrawing();
        // create our plane mesh
        const plane = webGLCurtain.addPlane(planeElement, params);

        // use the onRender method of our plane fired at each requestAnimationFrame call
        plane
            .onReady(() => {
                webGLCurtain.needRender();

                textureActive = plane.createTexture("textureActive");
                nextTexture = plane.createTexture("nextTexture");

                textureActive.setSource(plane.images[currentIndex]);

                initEvents(webGLCurtain, plane);
            })
            .onRender(() => {
                update(webGLCurtain, plane);
            });
    };

    lastIndex = 0
    const update = (webGLCurtain, plane) => {
        if (progress) {
            const now = performance.now();
            const time = Math.min(1, (now - start) / 800);

            plane.uniforms.progress.value = mathUtils.easeOutCubic(time);

            if (time >= 1) {
                webGLCurtain.disableDrawing();
                textureActive.setSource(plane.images[currentIndex]);
                progress = false
            }
        }
    };

    const animateBanner = (webGLCurtain, plane, index) => {
        if(index === currentIndex) return

        webGLCurtain.enableDrawing();

        currentIndex = index;

        nextTexture.setSource(plane.images[currentIndex]);

        clearTimeout(timer)
        counter = currentIndex;
        sliderChange(currentIndex);
        timer = startCarousel();

        progress = true;
        start = performance.now();
    };

    const initEvents = (webGLCurtain, plane) => {
        navMain.forEach((span, i) => {
            span.addEventListener("click", () => {
                animateBanner(webGLCurtain, plane, i);
            });
        });
    };

    createCanvas();
};
});