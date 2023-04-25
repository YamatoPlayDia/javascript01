const animationDuration = 5000; // 1000ms = 1秒
const animationInterval = 100; // 100msごとにアニメーションを更新する
const minPosition = 0;
const maxPositionX = 900;
const maxPositionY = 600;

function getRandomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

function animateCircle(circle) {
    const newCx = getRandomPosition(minPosition, maxPositionX);
    const newCy = getRandomPosition(minPosition, maxPositionY);
    const oldCx = parseFloat(circle.getAttribute('cx'));
    const oldCy = parseFloat(circle.getAttribute('cy'));
    const dx = (newCx - oldCx) / (animationDuration / animationInterval);
    const dy = (newCy - oldCy) / (animationDuration / animationInterval);

    let currentStep = 0;
    const animationTimer = setInterval(() => {
        if (currentStep >= animationDuration / animationInterval) {
            clearInterval(animationTimer);
            return;
        }
        const cx = oldCx + dx * currentStep;
        const cy = oldCy + dy * currentStep;
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        currentStep++;
    }, animationInterval);
}

function animateCircles() {
  const svgDoc = document.getElementById('bg');
  const circles = svgDoc.querySelectorAll('circle');
  circles.forEach(circle => animateCircle(circle));
}

function loadSVGInline(containerId, svgString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svgElement = doc.documentElement;
  const container = document.getElementById(containerId);
  container.appendChild(svgElement);
  svgElement.setAttribute('id', 'bg');
  setInterval(animateCircles, animationDuration);
}

const svgString = `
<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <defs>
        <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
    </defs>
    <rect width="900" height="600" fill="#2c3e50">
    </rect>
    <g filter="url(#blur1)">
        <circle cx="505" cy="49" fill="#bdc3c7" r="357"></circle>
        <circle cx="99" cy="292" fill="#2c3e50" r="357"></circle>
        <circle cx="680" cy="204" fill="#bdc3c7" r="357"></circle>
        <circle cx="639" cy="423" fill="#bdc3c7" r="357"></circle>
        <circle cx="874" cy="383" fill="#2c3e50" r="357"></circle>
        <circle cx="824" cy="53" fill="#bdc3c7" r="357"></circle>
    </g>
</svg>
`;
loadSVGInline('bg-container', svgString);