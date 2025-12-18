import "./Hero.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let object;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Load FBX model
    const loader = new FBXLoader();
    loader.load(
      "/src/assets/models/ari-3d.fbx",
      function (fbx) {
        object = fbx;

        // Scale down the model (adjust this value to make it smaller/bigger)
        fbx.scale.set(0.5, 0.5, 0.5); // Try 0.3, 0.5, or 0.8 to find what looks good

        // Center the model
        fbx.position.set(0, -50, 0);

        fbx.traverse((child) => {
          if (child.isMesh) {
            // Check the material name
            if (child.material.name === "aribody_1") {
              // Headset - make it cyan
              child.material.color.setHex(0x63cbd3);
              child.material.emissive.setHex(0x63cbd3);
              child.material.emissiveIntensity = 0.3; // Add a glow
            } else if (child.material.name === "aribody_2") {
              // Head - make it purple
              child.material.color.setHex(0x667eea);
              child.material.emissive.setHex(0x667eea);
              child.material.emissiveIntensity = 0.2;
            }

            child.material.needsUpdate = true;
          }
        });
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("An error happened", error);
      }
    );

    camera.position.set(0, 0, 100); // (x, y, z) - try different values
    camera.lookAt(0, 0, 0); // Make camera look at the center

    // Lights
    const toplight = new THREE.PointLight(0xffffff, 1, 100);
    toplight.position.set(0, 50, 50);
    scene.add(toplight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      if (object) {
        object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
        object.rotation.x = -1.2 + (mouseY * 2.5) / window.innerHeight;
      }
      renderer.render(scene, camera);
    }
    animate();

    // Event listeners
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero">
      <div ref={containerRef} id="hero-background"></div>
      <div className="hero-content">
        <h1>Alternate Reality Initiative</h1>
        <h2>University of Michigan</h2>
      </div>
    </div>
  );
}

export default Hero;
