function initializeContainer(element) {
    const backgroundColor = element.getAttribute('data-background-color') || 'blue';
    const width = element.getAttribute('data-width') || '200px';
    const height = element.getAttribute('data-height') || '200px';
    const borderRadius = element.getAttribute('data-border-radius') || '5px';
    const justifyContent = element.getAttribute('data-justify-content') || 'center';
    const alignItems = element.getAttribute('data-align-items') || 'center';
    const color = element.getAttribute('data-color') || 'white';
    const padding = element.getAttribute('data-padding') || '20px';
    const textAlign = element.getAttribute('data-text-align') || 'center';
    const content = element.getAttribute('data-content') || 'Dynamic Container';
    const border = element.getAttribute('data-border') || '2px solid';
    const borderColor = element.getAttribute('data-border-color') || '#ccc';

    element.style.backgroundColor = backgroundColor;
    element.style.width = width;
    element.style.height = height;
    element.style.borderRadius = borderRadius;
    element.style.justifyContent = justifyContent;
    element.style.alignItems = alignItems;
    element.style.color = color;
    element.style.padding = padding;
    element.style.textAlign = textAlign;
    element.style.border = border + ' solid';
    element.style.borderColor = borderColor;
    element.innerText = content;

    element.style.display = 'flex'; // Đảm bảo container sử dụng Flexbox
}

// Apply the function to all containers
document.querySelectorAll('.dynamic-container').forEach(initializeContainer);
