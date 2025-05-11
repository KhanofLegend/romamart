document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const overlay = document.getElementById('sidebar-overlay');

    // Insert sidebar content dynamically
    sidebar.innerHTML = getSidebarContent();

    // Function to adjust sidebar layout based on screen size
    function adjustSidebarLayout() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1281) {
            // Large screens: Sidebar on the left
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
            sidebar.style.width = '18em';
            sidebar.style.height = '100vh';
            sidebar.style.display = 'block';
            sidebar.style.transform = 'none';
            sidebar.style.opacity = '1';
            overlay.classList.remove('active');
        } else if (screenWidth >= 737 && screenWidth <= 1280) {
            // Medium screens: Sidebar on top
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
            sidebar.style.width = '100%';
            sidebar.style.height = 'auto';
            sidebar.style.display = 'block';
            sidebar.style.transform = 'none';
            sidebar.style.opacity = '1';
            overlay.classList.remove('active');
        } else {
            // Small screens: Sidebar hidden, toggled by button
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
            sidebar.style.width = '100%';
            sidebar.style.height = 'auto';
            sidebar.style.transform = 'translateY(-100%)';
            sidebar.style.opacity = '0';
            sidebar.style.display = 'none';
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }

    // Toggle sidebar and overlay visibility for small screens
    menuButton.addEventListener('click', function () {
        const isActive = sidebar.classList.contains('active');
        if (isActive) {
            // Hide sidebar
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            sidebar.style.transform = 'translateY(-100%)';
            sidebar.style.opacity = '0';
            setTimeout(() => {
                sidebar.style.display = 'none';
            }, 300); // Match the CSS transition duration
        } else {
            // Show sidebar
            sidebar.classList.add('active');
            overlay.classList.add('active');
            sidebar.style.display = 'block';
            setTimeout(() => {
                sidebar.style.transform = 'translateY(0)';
                sidebar.style.opacity = '1';
            }, 10); // Slight delay to trigger the transition
        }
    });

    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        sidebar.style.transform = 'translateY(-100%)';
        sidebar.style.opacity = '0';
        setTimeout(() => {
            sidebar.style.display = 'none';
        }, 300); // Match the CSS transition duration
    });

    // Close sidebar when scrolling
    document.addEventListener('scroll', function () {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            sidebar.style.transform = 'translateY(-100%)';
            sidebar.style.opacity = '0';
            setTimeout(() => {
                sidebar.style.display = 'none';
            }, 300); // Match the CSS transition duration
        }
    });

    // Adjust sidebar layout on window resize
    window.addEventListener('resize', adjustSidebarLayout);

    // Initial layout adjustment
    adjustSidebarLayout();
});

function getSidebarContent() {
    // Get the current page's filename
    const page = window.location.pathname.split('/').pop();

    // Define sidebar content for each page
    const sidebars = {
        'index.html': `
            <div class="inner">
                <div class="logo-container">
                    <img src="../assets/images/logo_primary.jpg" alt="Logo" class="logo">
                </div>
                <nav>
                    <ul>
                        <li><a href="#intro"><i class="fa-solid fa-house"></i> Welcome</a></li>
                        <li><a href="blogpage.html"><i class="fa-solid fa-newspaper"></i> Updates</a></li>
                        <li><a href="#one"><i class="fa-solid fa-location-pin"></i> Our Locations</a></li>
                        <li><a href="#two"><i class="fa-solid fa-info-circle"></i> About Us</a></li>
                        <li><a href="#three"><i class="fa-solid fa-phone"></i> Get in Touch</a></li>
                    </ul>
                </nav>
            </div>
        `,
        'privacypolicy.html': `
            <div class="inner">
                <div class="logo-container">
                    <img src="../assets/images/logo_primary.jpg" alt="Logo" class="logo">
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                        <li><a href="blogpage.html"><i class="fa-solid fa-newspaper"></i> Updates</a></li>
                        <li><a href="index.html#three"><i class="fa-solid fa-phone"></i> Get in Touch</a></li>
                    </ul>
                </nav>
            </div>
        `,
        'blogpage.html': `
            <div class="inner">
                <div class="logo-container">
                    <img src="../assets/images/logo_primary.jpg" alt="Logo" class="logo">
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                        <li><a href="blogpage.html"><i class="fa-solid fa-newspaper"></i> Updates</a></li>
                        <li><a href="index.html#three"><i class="fa-solid fa-phone"></i> Get in Touch</a></li>
                    </ul>
                </nav>
            </div>
        `,
    };

    // Return the sidebar content for the current page, or a default sidebar
    return sidebars[page] || `
        <div class="inner">
            <h2>Default</h2>
            <nav>
                <ul>
                    <li><a href="#default1">Default 1</a></li>
                    <li><a href="#default2">Default 2</a></li>
                </ul>
            </nav>
        </div>
    `;
}