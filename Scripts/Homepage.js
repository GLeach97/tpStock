

// Check if a user is already logged in
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded event triggered');
  checkLoggedInUser();
});

function checkLoggedInUser() {
  // Retrieve user information from localStorage
  const storedUser = localStorage.getItem('loggedInUser');

  if (storedUser) {
      const user = JSON.parse(storedUser);
      displayUserInfo(user.username);
  } else {
      // Redirect to login page if no user is logged in
      window.location.href = 'index.html'; // Replace with your actual login page URL
  }
}

function displayUserInfo(username) {
  // Display user information on the page
  const userInfoContainer = document.getElementById('userInfo');
  userInfoContainer.innerHTML = `<p>Welcome, ${username}!</p>`;
}

function Logout() {
  // Clear user information from localStorage
  localStorage.removeItem('loggedInUser');

  // Use the replaceState method to replace the current history entry
  window.history.replaceState(null, null, 'index.html');
  window.location.href = 'index.html'; 
}
