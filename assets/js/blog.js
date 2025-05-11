// Blog posts data
const blogPosts = [
    {
        title: "Coming Soon!",
        excerpt: "Get ready, Sarnia! Roma Mart is opening soon at 189 Wellington Street! 🏪",
        image: "assets/images/logo_framework.jpg",
        link: "blogposts/post1.html",
        date: "2025-02-12"
    },
    {
        title: "Community Survey",
        excerpt: "We want to hear from you! Please take a moment to fill out our community survey.",
        image: "assets/images/logo_structure.jpg",
        link: "blogposts/post2.html",
        date: "2025-05-10"
    },
//    <-- Add more blog posts here -->
];

// Load the latest post
function loadLatestPost() {
    const latestPost = blogPosts[0]; // Get the latest post
    const latestPostHTML = `
        <article>
            <h2>${latestPost.title}</h2>
            <span class="image fit"><img src="${latestPost.image}" alt="${latestPost.title}" /></span>
            <p>${latestPost.excerpt}</p>
            <a href="${latestPost.link}" class="button">Read More</a>
        </article>
    `;
    document.getElementById("latest-post").innerHTML = latestPostHTML;
}

// Load older posts
let postsPerPage = 5;
let currentPage = 1;

function loadOlderPosts() {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const olderPosts = blogPosts.slice(1).slice(startIndex, endIndex); // Get older posts
    let olderPostsHTML = "";
    olderPosts.forEach(post => {
        olderPostsHTML += `
            <article style="margin-top: 2em;">
                <h3>${post.title}</h3>
                <span class="image fit"><img src="${post.image}" alt="${post.title}" /></span>
                <a href="${post.link}" class="button small">Read More</a>
            </article>
        `;
    });
    document.getElementById("older-posts").innerHTML += olderPostsHTML;

    // Hide "Show More" button if no more posts
    if (endIndex >= blogPosts.length - 1) {
        document.getElementById("show-more-container").style.display = "none";
    }
}

// Initialize the blog page
function initBlogPage() {
    loadLatestPost();
    loadOlderPosts();

    // Add event listener for "Show More" button
    document.getElementById("show-more").addEventListener("click", () => {
        currentPage++;
        loadOlderPosts();
    });
}

// Run the initialization function when the page loads
document.addEventListener("DOMContentLoaded", initBlogPage);