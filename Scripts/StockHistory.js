
// Function to save a new entry to stock history
function saveStockHistory(message) {
  // Retrieve existing stock history from localStorage
  const stockHistory = JSON.parse(localStorage.getItem('stockHistory')) || [];

  // Get the formatted date and time
  const formattedDateTime = getFormattedDateTime();

  // Add the new entry to the beginning of the array
  stockHistory.unshift({ message, timestamp: formattedDateTime });

  // Update localStorage with the modified stock history
  localStorage.setItem('stockHistory', JSON.stringify(stockHistory));

  // Display the updated stock history on the page
  displayStockHistory();
}

// Function to display stock history on the page
function displayStockHistory() {
  // Retrieve stock history from localStorage
  const stockHistory = JSON.parse(localStorage.getItem('stockHistory')) || [];
  
  // Get the stock history container element
  const stockHistoryContainer = document.querySelector('.stock-history');

  // Clear existing content
  stockHistoryContainer.innerHTML = '';

  // Display entries in reversed order
  stockHistory.reverse().forEach(entry => {
    stockHistoryContainer.innerHTML += `<p>${entry.timestamp} - ${entry.message}</p>`;
  });
}

// Function to get the formatted date and time
function getFormattedDateTime() {
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString(); // Use a simpler date and time format

  return formattedDateTime;
}

// Call displayStockHistory on page load to ensure it's loaded with existing entries
document.addEventListener('DOMContentLoaded', displayStockHistory);
