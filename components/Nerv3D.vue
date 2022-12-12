<template>
    <div class="webgl-wrapper" ref="webglWrapper">
        <canvas ref="webgl"></canvas>
    </div>
</template>

<style scoped>
.webgl-wrapper {
    height: 400px;
}
</style>

<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { ref, onMounted } from 'vue'

const webgl = ref(null)
const webglWrapper = ref(null)
let renderer = null
let scene = null
let camera = null
let logoModel = null

function init() {
    let width = webglWrapper.value.clientWidth
    let height = webglWrapper.value.clientHeight
    // console.log(`width:${width} height:${height}`)

    // renderer
    renderer = new THREE.WebGL1Renderer({
        canvas: webgl.value,
        antialias: true
    })
    renderer.setSize(width, height)
    renderer.setClearColor(0xffffff)

    // scene
    scene = new THREE.Scene()

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 100)
    camera.position.set(0, 0, 20)
    camera.lookAt(0, 0, 0)
    scene.add(camera)

    // 窗口变化时自适应
    window.addEventListener('resize', () => {
        width = webglWrapper.value.clientWidth
        height = webglWrapper.value.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
    })

    // camera control
    const control = new OrbitControls(camera, webgl.value)
    control.update()

    // modle loader
    const modleLoader = new GLTFLoader()
    modleLoader.load('/modle/logo.glb', (gltf) => {
        logoModel = gltf.scene
        logoModel.position.set(0, -6, 0)
        // console.log(logoModel)
        scene.add(gltf.scene)
    }, (xhr) => {
        // console.log(xhr.loaded / xhr.total * 100 + '% loaded')
    }, (err) => {
        console.log(err)
    })

    // light
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)

    draw()
}

function draw() {
    renderer.render(scene, camera)
    if (logoModel) {
        logoModel.rotation.y += 0.01
    }
    requestAnimationFrame(draw)
}

onMounted(init)

</script>