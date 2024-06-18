const studentIdInput = document.getElementById('student-id');
const captureButtons = document.querySelectorAll('.capture-buttons button');
const videoElement = document.getElementById('camera-feed');
const canvasElement = document.getElementById('camera-canvas');
const canvasContext = canvasElement.getContext('2d');

// Initialize the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    videoElement.srcObject = stream;
    videoElement.play();
  })
  .catch(error => {
    console.error('Error accessing camera:', error);
  });

// Capture photos
captureButtons.forEach(button => {
  button.addEventListener('click', () => {
    const position = button.id.split('-')[1];
    capturePhoto(position);
  });
});

function capturePhoto(position) {
  canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
  const dataUrl = canvasElement.toDataURL('image/jpeg');
  // You can now send the dataUrl to the server or store it for further processing
  console.log(`Captured ${position} photo:`, dataUrl);
}