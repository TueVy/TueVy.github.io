const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');
const okBtn = document.getElementById('ok-btn');
const instructions = document.getElementById('instructions');
const photoPreview = document.getElementById('photo-preview');

let photoArray = [];
let currentStep = 0;
const instructionsList = [
    "ĐIỀU CHỈNH GÓC MẶT THẲNG",
    "ĐIỀU CHỈNH GÓC MẶT PHẢI",
    "ĐIỀU CHỈNH GÓC MẶT TRÁI",
    "ĐIỀU CHỈNH GÓC MẶT TRÊN",
    "ĐIỀU CHỈNH GÓC MẶT DƯỚI"
];

// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera", err);
    });

// Capture photo
captureBtn.addEventListener('click', () => {
    if (currentStep < instructionsList.length) {
        // Draw the current frame from the video onto the canvas
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        
        // Add the captured image to the photoArray
        photoArray.push(imageData);
        
        // Create an img element to display the captured photo
        const imgElement = document.createElement('img');
        imgElement.src = imageData;
        photoPreview.appendChild(imgElement);
        
        // Move to the next step
        currentStep++;
        
        // Update instructions or disable the button if all photos are taken
        if (currentStep < instructionsList.length) {
            instructions.textContent = instructionsList[currentStep];
        } else {
            captureBtn.disabled = true;
            okBtn.style.display = 'block';
        }
    }
});

// OK button event listener (optional functionality, e.g., submit the form)
okBtn.addEventListener('click', () => {
    // Handle the OK button click, e.g., submit the form or move to the next step
    console.log('Photos captured:', photoArray);
});