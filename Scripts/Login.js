const form = document.querySelector("form")
const loginErrorMessage = "Incorrect log in information"

form.addEventListener("submit",(e)=>{
  e.preventDefault()

  const username = form.username.value
  const password = form.password.value

  if (!username || !password){
    alert("Please enter both a username and password");
    return;
  }

  const authenticated = Authenticate(username,password)

  if (authenticated){
    onLoginSuccess(username)
  }
  else {
    alert (loginErrorMessage)
  }
})

function Authenticate(username, password){
  return (
    username === "Admin" && password === "1237" ||
    username === "George" && password === "1237" ||
    username === "Sergio" && password === "1237")
}


// Assume this function is called when login is successful
function onLoginSuccess(username) {
  // Store user information in localStorage
  const user = { username: username };
  localStorage.setItem('loggedInUser', JSON.stringify(user));
  localStorage.setItem('username', username); // Save the username separately


  // Redirect to the homepage
  window.location.href = 'homepage.html'; // Replace with your actual homepage URL
}
