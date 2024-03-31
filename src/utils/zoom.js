export const zoomImg = (e) => {
    const zoomer = e.currentTarget;
    
    // Get the position of the mouse relative to the element
    const rect = zoomer.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;
    let x, y;
    
    // Dynamic background size calculation
    let bgWidth = zoomer.offsetWidth * 2.3;
    let bgHeight = zoomer.offsetHeight * 2.4;
    
    // Calculate the position of the background
    x = (offsetX / zoomer.offsetWidth) * 100;
    y = (offsetY / zoomer.offsetHeight) * 100;
    
     // Ensure the background position stays within the boundaries
    x = Math.max(0, Math.min(x, 100));
    y = Math.max(0, Math.min(y, 100));
    
    zoomer.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
    zoomer.style.backgroundPosition = `${x}% ${y}%`;
    };