import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'app-tech-orb',
    standalone: true,
    template: `<div #rendererContainer class="three-container"></div>`,
    styles: [`
    .three-container {
      width: 100%;
      height: 100%;
      min-height: 400px;
      display: block;
      opacity: 0;
      animation: fadeIn 1.5s ease forwards;
    }
    
    @keyframes fadeIn { to { opacity: 0.9; } }
  `]
})
export class TechOrbComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rendererContainer') rendererContainer!: ElementRef;

    private renderer!: THREE.WebGLRenderer;
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private mesh!: THREE.Mesh;
    private frameId: number = 0;

    ngAfterViewInit() {
        this.initThreeJS();
    }

    ngOnDestroy() {
        if (this.frameId) cancelAnimationFrame(this.frameId);
        if (this.renderer) this.renderer.dispose();
    }

    private initThreeJS() {
        const container = this.rendererContainer.nativeElement;
        let width = container.clientWidth;
        let height = container.clientHeight;

        // Fallback if container has no dimensions yet
        if (width === 0 || height === 0) {
            width = container.offsetWidth || 500;
            height = container.offsetHeight || 500;
        }

        // SCENE
        this.scene = new THREE.Scene();

        // CAMERA
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        this.camera.position.z = 5;

        // RENDERER
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

        // OBJECT: Abstract Icosahedron
        const geometry = new THREE.IcosahedronGeometry(1.8, 1); // Low poly count for abstract look
        const material = new THREE.MeshPhongMaterial({
            color: 0x38BDF8, // Azure Blue
            emissive: 0x0F172A,
            specular: 0xffffff,
            shininess: 20,
            flatShading: true, // Key for "Tech" look
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);

        // LIGHTING
        // 1. Ambient
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);

        // 2. Directional
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

        // 3. Point Light (Blue tint)
        const pointLight = new THREE.PointLight(0x38BDF8, 1, 10);
        pointLight.position.set(-2, 1, 2);
        this.scene.add(pointLight);

        // ANIMATION LOOP
        this.animate();

        // RESIZE HANDLER
        window.addEventListener('resize', () => this.onWindowResize());
    }

    private animate() {
        this.frameId = requestAnimationFrame(() => this.animate());

        // Slow, elegant rotation
        this.mesh.rotation.x += 0.002;
        this.mesh.rotation.y += 0.003;

        this.renderer.render(this.scene, this.camera);
    }

    private onWindowResize() {
        if (!this.rendererContainer) return;
        const w = this.rendererContainer.nativeElement.clientWidth;
        const h = this.rendererContainer.nativeElement.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
    }
}
