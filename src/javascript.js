//import * as THREE from '../node_modules/three/build/three.js'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

//import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

//import {GLTFLoader} from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js'



const paksanUrl = new URL('./assets/fuarson.glb',import.meta.url)




const renderer= new THREE.WebGLRenderer({ 
	canvas: document.getElementById("mycanvas"),
	antialias: true,
	powerPerformance: 'high-performance',
	physicallyCorrectLights: true


})
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.OrthographicCamera( window.innerWidth / - 300, window.innerWidth / 300, window.innerHeight / 300, window.innerHeight / - 300, 1, 1000 )
camera.position.set(200, 100, 200)
//camera.position.set(20,10,20)
camera.lookAt(new THREE.Vector3(0,0,0))


/*const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

scene.add( camera );*/

const orbit= new OrbitControls(camera,renderer.domElement)
orbit.update()

renderer.render(scene,camera)

/*camera.position.set(0,2,4.3)
camera.lookAt(new THREE.Vector3(0,0,0))*/


/*const planeGeometry = new THREE.PlaneGeometry(8,8)
//const planeGeometry = new THREE.CircleGeometry(6,6)
const planeMaterial = new THREE.MeshBasicMaterial({
    //color: 0xffffff,
	//color: 0xC0C0C0,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry,planeMaterial)
scene.add(plane)
plane.rotation.x= -0.5*Math.PI*/


const assetLoader = new GLTFLoader()
assetLoader.load(paksanUrl.href,function(gltf){
	const makine = gltf.scene
	
	scene.add(makine)
	makine.position.set(-0.5,0,0.9)

	//const makineOrbit =new OrbitControls(makine,renderer.domElement)
	//makineOrbit.update()
	

	function animate () {

	//makine.rotation.y +=0.0030
	makine.rotateY(0.003)
	
		renderer.render(scene,camera)
	}
	renderer.setAnimationLoop(animate)

}, undefined, function(error) {
		console.error(error)
})

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(0,10,0)
scene.add(spotLight)

const yanspot1 = new THREE.SpotLight(0xffffff)
yanspot1.position.set(10,0,0)
scene.add(yanspot1)

const yanspot2 = new THREE.SpotLight(0xffffff)
yanspot2.position.set(-10,0,0)
scene.add(yanspot2)

const arkaspot = new THREE.SpotLight(0xffffff)
arkaspot.position.set(0,0,-10)
scene.add(arkaspot)

const onspot = new THREE.SpotLight(0xffffff)
onspot.position.set(0,0,5)
scene.add(onspot)

//const directionalLight = new THREE.DirectionalLight(0xffffff,3)
//scene.add(directionalLight)

renderer.setClearColor(0xC0C0C0)
//renderer.setClearColor(0xffffff)


window.addEventListener('resize', function(){
	camera.aspect= window.innerWidth/window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth,window.innerHeight)
})



//function animate () {
	
   // renderer.render(scene,camera)
//}
//renderer.setAnimationLoop(animate)



