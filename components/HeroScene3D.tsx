"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020202, 0.032);

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.set(0, 1.8, 17);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodeCount = 96;
    const positions = new Float32Array(nodeCount * 3);
    const nodes: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i += 1) {
      const layer = i % 3;
      const radius = 4.4 + layer * 2.1 + Math.random() * 2.1;
      const angle = (i / nodeCount) * Math.PI * 2 + Math.random() * 0.85;
      const y = (Math.random() - 0.5) * 8.6;
      const z = (Math.random() - 0.5) * 9.4;
      const point = new THREE.Vector3(
        Math.cos(angle) * radius + (Math.random() - 0.5) * 2.5,
        y,
        Math.sin(angle) * radius + z * 0.24
      );
      nodes.push(point);
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0xf7f7f7,
      size: 0.075,
      transparent: true,
      opacity: 0.74,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pointCloud = new THREE.Points(nodeGeometry, nodeMaterial);
    group.add(pointCloud);

    const linePositions: number[] = [];
    for (let i = 0; i < nodeCount; i += 1) {
      for (let j = i + 1; j < nodeCount; j += 1) {
        if (nodes[i].distanceTo(nodes[j]) < 2.55 && linePositions.length < 1200) {
          linePositions.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const network = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(network);

    const ringGroup = new THREE.Group();
    group.add(ringGroup);

    for (let i = 0; i < 5; i += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.4 + i * 0.85, 0.01, 12, 180),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffffff : 0x42e8c6,
          transparent: true,
          opacity: i % 2 === 0 ? 0.12 : 0.18,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      ring.rotation.x = Math.PI / 2.4 + i * 0.18;
      ring.rotation.y = i * 0.36;
      ring.position.set(4.6, -0.4 + i * 0.12, -2.8 - i * 0.4);
      ringGroup.add(ring);
    }

    const planeGeometry = new THREE.PlaneGeometry(22, 22, 42, 42);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.055,
      depthWrite: false,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2.25;
    plane.position.set(1.8, -4.7, -2.8);
    group.add(plane);

    const pointer = new THREE.Vector2(0, 0);
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", resize);
    resize();

    let frame = 0;
    let raf = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      frame += 1;

      if (!reduceMotion) {
        group.rotation.y = elapsed * 0.075 + pointer.x * 0.12;
        group.rotation.x = -0.06 + pointer.y * 0.075;
        pointCloud.rotation.z = Math.sin(elapsed * 0.28) * 0.06;
        ringGroup.rotation.z = elapsed * 0.18;
        ringGroup.rotation.x = Math.sin(elapsed * 0.22) * 0.2;
        plane.position.z = -2.8 + Math.sin(elapsed * 0.45) * 0.18;

        if (frame % 2 === 0) {
          const attr = nodeGeometry.getAttribute("position");
          for (let i = 0; i < nodeCount; i += 1) {
            attr.setY(i, nodes[i].y + Math.sin(elapsed * 0.8 + i * 0.37) * 0.08);
          }
          attr.needsUpdate = true;
        }
      }

      camera.position.x += (pointer.x * 0.75 - camera.position.x) * 0.035;
      camera.position.y += (1.8 - pointer.y * 0.35 - camera.position.y) * 0.035;
      camera.lookAt(0.8, -0.15, 0);
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      mount.removeChild(renderer.domElement);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      planeGeometry.dispose();
      planeMaterial.dispose();
      ringGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-90"
    />
  );
}
