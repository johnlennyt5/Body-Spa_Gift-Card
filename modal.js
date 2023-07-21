// Function to close the modal
function closeModal() {
  var modalContainer = document.getElementById("modalContainer");
  modalContainer.style.display = "none";
}

// Function to open the modal with the success message
function openModal(messageContent) {
  var modalContainer = document.getElementById("modalContainer");
  var successModal = document.getElementById("successModal");
  var successMessage = document.getElementById("successMessage");

    // Create the message content for the modal with the PDF URL
    var message = "Dear " + messageContent.recipientFirstName + ",<br><br>" +
    "Please find your " + messageContent.giftName + " gift certificate from " +
    messageContent.buyerFirstName + " via this link:<br><br>" +
    messageContent.url;

  successMessage.innerHTML = message;
  modalContainer.style.display = "flex";
  successModal.style.display = "block";
}

// Function to initialize the modal as hidden
function initializeModal() {
  closeModal();
}

// Close the modal when the user clicks on the close button
var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
  closeModal();
};

// Initialize the modal as hidden when the page loads
window.onload = function() {
  initializeModal();
};
