/**
 * Main file
 */

/**
 * CONSTANTS
 */

// Debug
const debug = false;

// Renderer
const RESOLUTION_FACTOR = 2;
const SHADOW_RESOLUTION = 2048;

// 3D scene
const SIZE = 10;
const GROUND_SIZE = 100;
const LIGHT_SIZE = 2;

// Camera
const BASE_CAMERA_POS_X = 1.0620336947593905;
const BASE_CAMERA_POS_Y = 1.245165915247247;
const BASE_CAMERA_POS_Z = 1.1461631910508998;
const BASE_CAMERA_ROT_X = -0.7433940929271738;
const BASE_CAMERA_ROT_Y = 0.9847427173189627;
const BASE_CAMERA_ROT_Z = 0.6536145277176159;

let USED_BASE_CAMERA_POS_Y = BASE_CAMERA_POS_Y;

const CAMERA_MOTION_SPEED = 0.02;
const PARALLAX_SCROLL_AMOUNT = -1;

// Main
const MAIN_COLOR = 0xC9D3FF;




/**
 * IMPORTS
 */
// Import THREE.js
import * as THREE from 'three';
import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';




/**
 * 3D SCENE
 */
// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Camera position
camera.position.x = BASE_CAMERA_POS_X;
camera.position.y = USED_BASE_CAMERA_POS_Y;
camera.position.z = BASE_CAMERA_POS_Z;
// Camera rotation
camera.rotation.x = BASE_CAMERA_ROT_X;
camera.rotation.y = BASE_CAMERA_ROT_Y;
camera.rotation.z = BASE_CAMERA_ROT_Z;




// Renderer
const renderer = new THREE.WebGLRenderer(
    {
        antialias: true,
        alpha: true
    }
);
renderer.setClearColor( 
    MAIN_COLOR,
    0.5
);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio( window.devicePixelRatio * RESOLUTION_FACTOR);
// High Quality Shadow
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// Add the renderer to the DOM
let firstSectionBackground = document.getElementById('intro-section-background');
firstSectionBackground.appendChild( renderer.domElement );




// Debug
if (debug) {
    const controls = new OrbitControls( camera, renderer.domElement );

    // Camera position
    camera.position.x = BASE_CAMERA_POS_X;
    camera.position.y = USED_BASE_CAMERA_POS_Y;
    camera.position.z = BASE_CAMERA_POS_Z;
    // Camera rotation
    camera.rotation.x = BASE_CAMERA_ROT_X;
    camera.rotation.y = BASE_CAMERA_ROT_Y;
    camera.rotation.z = BASE_CAMERA_ROT_Z;
}




// Add ground of MAIN_COLOR
const groundGeometry = new THREE.PlaneGeometry( GROUND_SIZE, GROUND_SIZE, GROUND_SIZE, GROUND_SIZE );
const groundMaterial = new THREE.MeshStandardMaterial( { color: MAIN_COLOR } );
const ground = new THREE.Mesh( groundGeometry, groundMaterial );
ground.rotation.x = - Math.PI / 2;
ground.receiveShadow = true;
scene.add( ground );

// Light
// Create a DirectionalLight and turn on shadows for the light
const light = new THREE.DirectionalLight( MAIN_COLOR, 0.001, 100 );
light.position.set( 0, 3, 2 );
light.castShadow = true;
light.shadow.mapSize.width = SHADOW_RESOLUTION;
light.shadow.mapSize.height = SHADOW_RESOLUTION;
light.shadow.camera.left = LIGHT_SIZE;
light.shadow.camera.right = -LIGHT_SIZE;
light.shadow.camera.top = LIGHT_SIZE;
light.shadow.camera.bottom = -LIGHT_SIZE;
scene.add( light );

if (debug) {
    // Helper
    const helper = new THREE.CameraHelper( light.shadow.camera );
    scene.add( helper );
}




// Loader
const loader = new GLTFLoader();

// Load model
loader.load(
    '/main/content/assets/3d/main/phone.glb',
    ( model ) => {
        // Make model bigger
        model.scene.scale.set( SIZE, SIZE, SIZE );
        // Rotate the model by 20 degrees
        model.scene.rotation.y = Math.PI / 8;
        // Shadow
        model.scene.traverse( function ( child ) {
            child.castShadow = true;
            child.receiveShadow = false;
        });
        scene.add( model.scene );
        renderer.render( scene, camera );
    }
);





// Main

function animate() {
    requestAnimationFrame( animate );

    // Log camera pos and rotation
    if (debug) {
        console.log(
            'Camera pos:',
            camera.position.x,
            camera.position.y,
            camera.position.z,
            '\n',
            'Camera rot:',
            camera.rotation.x,
            camera.rotation.y,
            camera.rotation.z
        );
    }
    else {
        // Give the camera a natural motion
        camera.position.y = USED_BASE_CAMERA_POS_Y + Math.sin( Date.now() / 1000 ) * CAMERA_MOTION_SPEED;
        camera.rotation.y = USED_BASE_CAMERA_POS_Y + Math.sin( Date.now() / 1000 ) * CAMERA_MOTION_SPEED;
    }

    renderer.render( scene, camera );
};

animate();

window.addEventListener( 'resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
});


// Scroll Parallax
window.addEventListener( 'scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset;
    
    // Get the height of the intro section
    const introSectionHeight = document.querySelector('.intro-section').offsetHeight;

    // Compute percentage
    const percentage = scrollPosition / introSectionHeight;

    // Modify BASE_CAMERA_POS_Y
    USED_BASE_CAMERA_POS_Y = BASE_CAMERA_POS_Y + percentage * PARALLAX_SCROLL_AMOUNT;
});
