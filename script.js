const cameraPreview = document.getElementById('camera-preview');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');
const imageWrapper = document.querySelector('.image-gallery .image-wrapper');
const submitBtn = document.getElementById('submit-btn');
const studentIdInput = document.getElementById('student-id');

let capturedImages = [];

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    cameraPreview.srcObject = stream;
    cameraPreview.play();
  })
  .catch(error => {
    console.error('Error accessing camera:', error);
  });

captureBtn.addEventListener('click', () => {
  canvas.getContext('2d').drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);
  const imageData = canvas.toDataURL('image/jpeg');
  capturedImages.push(imageData);
  updateImageGallery();
  checkSubmitStatus();
});

function updateImageGallery() {
  imageWrapper.innerHTML = '';
  capturedImages.forEach((imageData, index) => {
    const img = document.createElement('img');
    img.src = imageData;
    img.dataset.index = index;
    imageWrapper.appendChild(img);
  });
}

function checkSubmitStatus() {
  submitBtn.disabled = capturedImages.length < 5;
}

submitBtn.addEventListener('click', () => {
  // Handle form submission with the captured images and student ID
  console.log('Student ID:', studentIdInput.value);
  console.log('Captured images:', capturedImages);
  // Implement your server-side logic here
});