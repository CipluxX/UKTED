document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            let content = this.querySelector('.dropdown-content');
            content.classList.toggle('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    // Marquee functionality
    const marquee = document.querySelector('.marquee-content');
    const marqueeWidth = marquee.offsetWidth;
    const containerWidth = document.querySelector('.marquee').offsetWidth;

    marquee.innerHTML += marquee.innerHTML; // Duplicate content for smooth scrolling

    marquee.style.animationDuration = `${(marqueeWidth / containerWidth) * 10}s`;
});
