document.addEventListener('DOMContentLoaded', function () {
    // Get blog ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    if (blogId) {
        fetchBlogPost(blogId);
    }
});

async function fetchBlogPost(blogId) {
    try {
        const response = await fetch(`https://admin.iconvisa.com/api/blog/${blogId}`);
        const data = await response.json();

        if (data.success) {
            displayBlogPost(data.blogPost);
        } else {
            console.error('Failed to fetch blog post');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayBlogPost(blog) {
    document.getElementById('blog-title').textContent = blog.title;
    document.getElementById('blog-date').textContent = new Date(blog.createdAt).toLocaleDateString();
    document.getElementById('blog-content').innerHTML = blog.content;

    if (blog.image) {
        document.getElementById('blog-image').src = `https://admin.iconvisa.com/${blog.image}`;
    }
}