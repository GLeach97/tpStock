const stockDisplay = document.querySelector(".stock-level");
let stockLevel = parseInt(localStorage.getItem("stockLevel")) || 150;

updateStockDisplay(stockLevel);

const meterInput = document.querySelector(".meter-input");
const stockHistory = document.querySelector(".stock-history");
// Create a new Date object
const currentDate = new Date();
const username = localStorage.getItem('username') || 'Guest'; // Default to 'Guest' if not available

// Format the date and time
const formattedDate = currentDate.toLocaleDateString();
const formattedTime = currentDate.toLocaleTimeString();

const productContainer = document.querySelector('.product-container');

// Get the value of the data-product attribute
const productName = productContainer.getAttribute('data-product');

function sellStock() {
  let meters = parseInt(meterInput.value);
  if (isNaN(meters) || meters <= 0) {
    alert("Please enter a valid positive number for meters.");
    return;
  }

  stockLevel -= meters;
  saveStockLevel(stockLevel);
  updateStockDisplay(stockLevel);

  const message = `${username} <span class="soldSpan">sold</span> ${meters}m of ${productName}. Remaining stock: ${stockLevel}m.`;

  
  saveStockHistory(message);
  window.location.href = 'homepage.html';
  

}

function restock() {
  let meters = parseInt(meterInput.value);

  if (isNaN(meters) || meters <= 0) {
    alert("Please enter a valid positive number for meters.");
    return;
  }

  stockLevel += meters;
  updateStockDisplay(stockLevel);
  saveStockLevel(stockLevel);

  const message = `${username} <span class="restockSpan">restocked</span> ${meters}m of ${productName}. Remaining stock: ${stockLevel}m.`;
  saveStockHistory(message);

  window.location.href = 'homepage.html';
}







function updateStockDisplay(stockLevel) {
  stockDisplay.innerHTML = stockLevel + "m left in stock";
}


function saveStockLevel(stockLevel) {
  localStorage.setItem("stockLevel", JSON.stringify(Number(stockLevel)));
}




function saveStockHistory(message) {  
  const stockHistory = JSON.parse(localStorage.getItem('stockHistory')) || [];

  // Get the formatted date and time
  const formattedDateTime = getFormattedDateTime();

  stockHistory.push({ message, timestamp: formattedDateTime });

  localStorage.setItem('stockHistory', JSON.stringify(stockHistory));
}

function getFormattedDateTime() {
  const currentDate = new Date();

  // Get date components
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const year = currentDate.getFullYear();

  // Get time components
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Create a formatted date and time string
  const formattedDateTime = `${year}-${padZero(month)}-${padZero(day)} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

  function padZero(num) {
    return num.toString().padStart(2, '0');
  }

  return formattedDateTime;
}
