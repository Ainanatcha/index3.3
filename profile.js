const canvas = document.getElementById('bubble-canvas');
const ctx = canvas.getContext('2d');

let bubbles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 60; i++) {
    bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 15 + 5,
        speed: Math.random() * 1 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bubbles.forEach(bubble => {
        bubble.y -= bubble.speed;
        bubble.x += bubble.dx;

        if (bubble.y + bubble.radius < 0) bubble.y = canvas.height + bubble.radius;
        if (bubble.x + bubble.radius < 0) bubble.x = canvas.width + bubble.radius;
        if (bubble.x - bubble.radius > canvas.width) bubble.x = -bubble.radius;

        if (mouse.x && mouse.y) {
            let dx = bubble.x - mouse.x;
            let dy = bubble.y - mouse.y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
                bubble.x += dx/20;
                bubble.y += dy/20;
            }
        }

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
        ctx.closePath();
    });

    requestAnimationFrame(animate);
}

animate();
