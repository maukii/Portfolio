function toggleCodeContent(icon) {
    var codeContent = icon.nextElementSibling.nextElementSibling; // Get the code content div
    var openIcon = icon.querySelector('.open-icon');
    var closeIcon = icon.querySelector('.close-icon');

    if (codeContent.style.display === 'none') {
        codeContent.style.display = 'block';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        codeContent.style.display = 'none';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}