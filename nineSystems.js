document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');
    const aboutContent = document.getElementById('aboutContent');
    const contactContent = document.getElementById('contactContent');
    
    // About Us button functionality
    aboutBtn.addEventListener('click', function() {
        if (aboutContent.style.display === 'block') {
            aboutContent.style.display = 'none';
        } else {
            aboutContent.style.display = 'block';
            contactContent.style.display = 'none';
        }
    });
    
    // Contact Us button functionality
    contactBtn.addEventListener('click', function() {
        if (contactContent.style.display === 'block') {
            contactContent.style.display = 'none';
        } else {
            contactContent.style.display = 'block';
            aboutContent.style.display = 'none';
        }
    });
    
    // Close content when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('button') && !event.target.closest('#aboutContent') && !event.target.closest('#contactContent')) {
            aboutContent.style.display = 'none';
            contactContent.style.display = 'none';
        }
    });
});
