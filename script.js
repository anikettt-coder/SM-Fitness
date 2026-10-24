// AI Bot Toggle Functionality
const chatToggleBtn = document.getElementById('chat-toggle-btn');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');

chatToggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
});

// Basic Three.js Animation Setup
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Create a simple floating 3D geometry
const geometry = new THREE.IcosahedronGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0055, 
    wireframe: true 
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 3;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
});