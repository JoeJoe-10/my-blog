// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog website loaded successfully!');
    // Example: Highlight navigation link on scroll
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog website loaded successfully!');

    // Highlight navigation link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Search functionality
    const posts = document.querySelectorAll('.post');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search posts...';
    searchInput.style.margin = '20px 0';
    searchInput.style.padding = '10px';
    document.querySelector('main .container').prepend(searchInput);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        posts.forEach(post => {
            const content = post.textContent.toLowerCase();
            post.style.display = content.includes(query) ? 'block' : 'none';
        });
    });

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = 
            document.body.classList.contains('dark-mode') 
            ? '☀️ Light Mode' 
            : '🌙 Dark Mode';
    });
});

// Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    const updateCarousel = () => {
        carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    // Initial carousel setup
    updateCarousel();
});

// Tag Click Interaction
const tags = document.querySelectorAll('.tags span');
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        alert(`You clicked on tag: ${tag.textContent}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Modal Popup Functionality
    const modal = document.getElementById('post-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = modal.querySelector('.close');
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const post = e.target.closest('.post');
            modalTitle.textContent = post.querySelector('h2').textContent;
            modalBody.textContent = post.dataset.content;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tag Filtering Functionality
    const tags = document.querySelectorAll('.tags span');
    const posts = document.querySelectorAll('.post');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const selectedTag = tag.dataset.tag;
            posts.forEach(post => {
                const postTags = [...post.querySelectorAll('.tags span')].map(t => t.dataset.tag);
                post.style.display = postTags.includes(selectedTag) ? 'block' : 'none';
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Comment Section Functionality
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const textarea = form.querySelector('textarea');
            const commentList = form.previousElementSibling;
            const comment = textarea.value.trim();

            if (comment) {
                const commentItem = document.createElement('li');
                commentItem.textContent = comment;
                commentList.appendChild(commentItem);
                textarea.value = '';
            }
        });
    });

    // Pagination Functionality
    const posts = document.querySelectorAll('.post');
    const postsPerPage = 2;
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');
    document.querySelector('main').appendChild(pagination);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const renderPage = (page) => {
        posts.forEach((post, index) => {
            post.style.display = 
                index >= (page - 1) * postsPerPage && index < page * postsPerPage
                ? 'block'
                : 'none';
        });

        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.toggle('active', i === page);
            button.addEventListener('click', () => renderPage(i));
            pagination.appendChild(button);
        }
    };

    renderPage(1);
});

document.addEventListener('DOMContentLoaded', () => {
    // Post Comment Section Functionality
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const textarea = form.querySelector('textarea');
            const commentList = form.previousElementSibling;
            const comment = textarea.value.trim();

            if (comment) {
                const commentItem = document.createElement('li');
                commentItem.textContent = comment;
                commentList.appendChild(commentItem);
                textarea.value = '';
            }
        });
    });

    // Post Likes Functionality
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const likeCountSpan = e.target.nextElementSibling;
            let currentLikes = parseInt(likeCountSpan.textContent);
            likeCountSpan.textContent = `${currentLikes + 1} Likes`;
        });
    });

// Archive Page Functionality
if (window.location.pathname.includes("archive.html")) {
    const posts = document.querySelectorAll('.post');
    const archiveContainer = document.getElementById('posts');
    archiveContainer.innerHTML = '';  // Clear the main page content
    posts.forEach(post => {
        const archivedPost = post.cloneNode(true);
        archiveContainer.appendChild(archivedPost);
    });
}})
