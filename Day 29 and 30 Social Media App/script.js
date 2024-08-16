// Initialize an empty array to store users and posts
let users = JSON.parse(localStorage.getItem('users')) || [];
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Event listeners and initial functions
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const profileDetails = document.getElementById('profileDetails');
    const logoutButton = document.getElementById('logoutButton');
    const feedContainer = document.getElementById('feedContainer');
    const uploadForm = document.getElementById('uploadForm');
    const userPosts = document.getElementById('userPosts');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    if (profileDetails) {
        displayProfile();
    }
    
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
    
    if (feedContainer) {
        displayFeed();
    }
    
    if (uploadForm) {
        uploadForm.addEventListener('submit', handleUploadPost);
    }

    if (userPosts) {
        displayUserPosts();
    }
});

// Login handler
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'profile.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid credentials';
    }
}

// Register handler
function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const photo = document.getElementById('photo').files[0];

    if (users.some(u => u.email === email)) {
        document.getElementById('errorMessage').innerText = 'Email already registered';
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function () {
        const newUser = { username, email, password, photo: reader.result };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html';
    };
    
    if (photo) {
        reader.readAsDataURL(photo);
    } else {
        reader.onloadend();
    }
}

// Display profile
function displayProfile() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (!loggedInUser) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('profileDetails').innerHTML = `
            <img src="${loggedInUser.photo}" alt="Profile Photo" class="profile-photo">
            <p><strong>Username:</strong> ${loggedInUser.username}</p>
            <p><strong>Email:</strong> ${loggedInUser.email}</p>
        `;
        displayUserPosts();
    }
}

// Logout handler
function handleLogout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

// Upload post handler
function handleUploadPost(event) {
    event.preventDefault();
    const caption = document.getElementById('caption').value;
    const postImage = document.getElementById('postImage').files[0];

    const reader = new FileReader();
    reader.onloadend = function () {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        const newPost = {
            id: Date.now(), // Unique ID for each post
            caption,
            image: reader.result,
            username: loggedInUser.username,
        };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayFeed();
        displayUserPosts();
    };
    
    if (postImage) {
        reader.readAsDataURL(postImage);
    } else {
        reader.onloadend();
    }
}

// Delete post handler
function deletePost(postId) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    posts = posts.filter(post => post.id !== postId || post.username !== loggedInUser.username);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayFeed();
    displayUserPosts();
}
// Display feed
function displayFeed() {
    const feedContainer = document.getElementById('feedContainer');
    if (posts.length > 0) {
        feedContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            console.log()
            postElement.className = 'post';
            postElement.innerHTML = `
            
                <div class="flex"><img src="${users[0].photo}" alt="Post Image">
                <p><strong>${post.username}</strong></p></div>
                <p>${post.caption}</p>
                <img src="${post.image}" alt="Post Image">
                <div class="post-icons">
                    <i class="fa fa-heart"></i>
                    <i class="fa fa-comment"></i>
                    <i class="fa fa-share"></i>
                </div>
                <button onclick="deletePost(${post.id})" class="delete-button">Delete Post</button>
            `;
            feedContainer.appendChild(postElement);
        });
    } else {
        feedContainer.innerHTML = '<p>No posts available.</p>';
    }
}

// Display user posts
function displayUserPosts() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const userPosts = document.getElementById('userPosts');
    
    if (userPosts) {
        userPosts.innerHTML = '';
        const userPostsList = posts.filter(post => post.username === loggedInUser.username);
        
        if (userPostsList.length > 0) {
            userPostsList.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="Post Image">
                    <p>${post.caption}</p>
                    <div class="post-icons">
                        <i class="fa fa-heart"></i>
                        <i class="fa fa-comment"></i>
                        <i class="fa fa-share"></i>
                    </div>
                    <button onclick="deletePost(${post.id})" class="delete-button">Delete Post</button>
                `;
                userPosts.appendChild(postElement);
            });
        } else {
            userPosts.innerHTML = '<p>No posts found.</p>';
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
    }
});
