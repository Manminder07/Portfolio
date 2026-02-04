//Added JavaScript for dropdown toggle on click/tap
document.addEventListener('DOMContentLoaded', function() {
            const dropdown = document.querySelector('.dropdown');
            const dropdownMenu = document.querySelector('.dropdown-menu');

            // Toggle dropdown on click/tap
            dropdown.addEventListener('click', function(e) {
                // Prevent default link behavior if clicking the parent link
                if (e.target.tagName === 'A' && e.target.href.includes('#projects')) {
                    e.preventDefault();
                }
                dropdownMenu.classList.toggle('open');
            });

            // Close dropdown if clicking outside (optional, for better UX)
            document.addEventListener('click', function(e) {
                if (!dropdown.contains(e.target)) {
                    dropdownMenu.classList.remove('open');
                }
            });

            // menu toggle
            const menu = document.getElementById('menu');
            const navLinks = document.getElementById('nav-links');

            menu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking outside or on a link
            document.addEventListener('click', function(e) {
                if (!menu.contains(e.target) && !navLinks.contains(e.target) && !e.target.closest('.dropdown')) {
                    navLinks.classList.remove('active');
                }
            });

            // Close menu when a nav link is clicked
            const navLinkElements = navLinks.querySelectorAll('a');
            navLinkElements.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                });
            });
        });
