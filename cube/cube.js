import * as THREE from 'https://unpkg.com/three/build/three.module.js';

//Se define la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color('#444654');

//Se define una de las cámaras en js
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 5, 20 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Crea un cubo
function piece(x, y, z){
    const piece = new THREE.Mesh();
    const geometryPrincipalBox = new THREE.BoxGeometry( 1, 1, 1 );
    const materialPrincipalBox = new THREE.MeshBasicMaterial( { color: 0x595959 } );
    const principalBox = new THREE.Mesh( geometryPrincipalBox, materialPrincipalBox);
    piece.add(principalBox);
    //////////////////////////////////////////////////////////////////
    if(x != 0){
        const geometryColorBox_x = new THREE.BoxGeometry(0.05 , 0.9 , 0.9);
        const materialColorBox_x = new THREE.MeshBasicMaterial( { color: x == 1 ? 0xff5500 : 0xff012d } );
        const colorBox_x = new THREE.Mesh( geometryColorBox_x, materialColorBox_x);
        colorBox_x.position.x += 0.5 * x;
        piece.add(colorBox_x);
    }
    //////////////////////////////////////////////////////////////////
    if(y != 0){
        const geometryColorBox_y = new THREE.BoxGeometry(0.9 , 0.05 , 0.9);
        const materialColorBox_y = new THREE.MeshBasicMaterial( { color: y == 1 ? 0xcacd00 : 0xdceae1 } );
        const colorBox_y = new THREE.Mesh( geometryColorBox_y, materialColorBox_y);
        colorBox_y.position.y += 0.5 * y;
        piece.add(colorBox_y);
    }
    //////////////////////////////////////////////////////////////////
    if(z != 0){
        const geometryColorBox_z = new THREE.BoxGeometry(0.9 , 0.9 , 0.05);
        const materialColorBox_z = new THREE.MeshBasicMaterial( { color: z == 1 ? 0x0094c6 : 0x0aaa0a } );
        const colorBox_z = new THREE.Mesh( geometryColorBox_z, materialColorBox_z);
        colorBox_z.position.z += 0.5 * z;
        piece.add(colorBox_z);
    }
    piece.position.y += y;
    piece.position.x += x;
    piece.position.z += z;
    return piece
}
var cube = new THREE.Object3D();
const positions = [1, 0, -1];
for (let x of positions) {
    for (let y of positions) {
        for (let z of positions) {
            if (x === 0 && y === 0 && z === 0) continue;
            cube.add(piece(x, y, z));
        }
    }
}

//Añade el cubo
scene.add(cube);

//Se define la posición de la cámara
var angleteta = 65;
var anglephi = 60;
const radio = 8;
camera.position.x = radio * Math.sin(toRadians(angleteta)) * Math.cos(toRadians(anglephi));
camera.position.z = radio * Math.sin(toRadians(angleteta)) * Math.sin(toRadians(anglephi));
camera.position.y = radio * Math.cos(toRadians(angleteta));
camera.lookAt( cube.position );

//Se declara una variable que indica si el mause está presionado o no
var mousePressed = false;

//Se agrega el evento para indicar el click del mause
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);
function onMouseDown(event) {
    mousePressed = true;
}
function onMouseUp(event) {
    mousePressed = false;
}

//Función que transforma los ángulos a radianes
function toRadians(angle){
    return angle * (Math.PI / 180);
}

let targetRotationX = 0;
let targetRotationY = 0;
let targetRotationZ = 0;

document.addEventListener('keydown', onKeyDown, false);

function onKeyDown(event) {
    if (event.code === 'KeyS') {
        targetRotationX -= Math.PI/2;
        TweenMax.to(cube.rotation, 1, { x: targetRotationX, ease: Power2.easeOut, onComplete: () => {
            cube.rotation.x = targetRotationX;
        }});
    }
    if (event.code === 'KeyW') {
        targetRotationX += Math.PI/2;
        TweenMax.to(cube.rotation, 1, { x: targetRotationX, ease: Power2.easeOut, onComplete: () => {
            cube.rotation.x = targetRotationX;
        }});
    }
    if (event.code === 'KeyA') {
        targetRotationY += Math.PI/2;
        TweenMax.to(cube.rotation, 1, { y: targetRotationY, ease: Power2.easeOut, onComplete: () => {
            cube.rotation.y = targetRotationY;
        }});
    }
    if (event.code === 'KeyD') {
        targetRotationY -= Math.PI/2;
        TweenMax.to(cube.rotation, 1, { y: targetRotationY, ease: Power2.easeOut, onComplete: () => {
            cube.rotation.y = targetRotationY;
        }});
    } 
}

//Se ejecuta la animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
}
animate();