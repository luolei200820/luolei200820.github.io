<template>
    <canvas width="400" height="300" ref="webgl"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ref, onMounted } from 'vue'

const webgl = ref(null)
let renderer = null
let scene = null
let camera = null
let points = null
let sphere = null
let lineMesh = null

function init() {
    // renderer
    renderer = new THREE.WebGL1Renderer({
        canvas: webgl.value,
        antialias: true
    })

    // scene
    scene = new THREE.Scene()

    // camera
    camera = new THREE.PerspectiveCamera(50, 4 / 3, 1, 1000)
    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)
    scene.add(camera)

    // camera control
    const control = new OrbitControls(camera, webgl.value)
    control.update()

    // texture loader
    const loader = new THREE.TextureLoader()
    const dot = loader.load('/texture/dot.png')

    // points
    const vertices = []
    for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);

        vertices.push(x, y, z);
    }

    const pointGeometry = new THREE.BufferGeometry()
    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    const pointMaterial = new THREE.PointsMaterial({ size: 0.2, map: dot, transparent: true })

    points = new THREE.Points(pointGeometry, pointMaterial)
    scene.add(points)

    // sphere
    const sphereGeometry = new THREE.SphereGeometry(3, 10, 10)
    sphere = new THREE.Points(sphereGeometry, pointMaterial)
    scene.add(sphere)

    // line up dots
    const lineUpGeometry = new THREE.BufferGeometry()
    lineUpGeometry.copy(sphereGeometry)
    const lineMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    })
    lineMesh = new THREE.Mesh(lineUpGeometry, lineMaterial)
    scene.add(lineMesh)

    draw()
}

function draw() {
    renderer.render(scene, camera)

    points.rotation.x += 0.001
    sphere.rotation.y += 0.01
    lineMesh.rotation.y += 0.01

    requestAnimationFrame(draw)
}

onMounted(init)

</script>