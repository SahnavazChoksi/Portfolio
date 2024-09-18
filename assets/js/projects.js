document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project-card');
    
    function revealOnScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        projects.forEach(project => {
            const boxTop = project.getBoundingClientRect().top;
            
            if (boxTop < triggerBottom) {
                project.classList.add('show');
            } else {
                project.classList.remove('show');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
