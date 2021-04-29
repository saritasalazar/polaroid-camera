let button = document.querySelector('.camera__button');

let flash = document.querySelector('.camera__flash');

let light = document.querySelector('.camera__flashlight')

let audio = new Audio("camera.mp3");

let picture = document.querySelector('.polaroid');

let container = document.querySelector('.picture__container');
let numOfPhotos = 0;


const cameraFlash = () => {
audio.play();
flash.style.backgroundColor = "papayawhip";
light.classList.remove('camera__flashlight')  
light.classList.add('camera__flashlight--active');
}

const createNewPhoto = () => {
    //create the elements for a new picture 
    const newPic = document.createElement('div');
    newPic.innerHTML = '<div class="image"></div>';

    setTimeout (() => {
    newPic.classList.add('polaroid--active');
    newPic.style.zIndex = numOfPhotos;
    newPic.style.top = `${numOfPhotos * 5}px`;
    container.prepend(newPic)
    }, 350)
    numOfPhotos++;
    console.log(numOfPhotos)
}


button.addEventListener('click', () => {
cameraFlash();
setTimeout(() => {
  light.classList.remove('camera__flashlight--active')
light.classList.add('camera__flashlight');
flash.style.backgroundColor = "white";
}, 250)

createNewPhoto()
});




//   // get access to camera 
// navigator.mediaDevices.getUserMedia({video: true})
//   .then(gotMedia)
//   .catch(error => console.error('getUserMedia() error:', error));

// function gotMedia(mediaStream) {
//   const mediaStreamTrack = mediaStream.getVideoTracks()[0];
//   const imageCapture = new ImageCapture(mediaStreamTrack);
//   console.log(imageCapture);
//   const img = document.querySelector('img');
// imageCapture.takePhoto()
//   .then(blob => {
//     img.src = URL.createObjectURL(blob);
//     img.onload = () => { URL.revokeObjectURL(this.src); }
//   })
//   .catch(error => console.error('takePhoto() error:', error));
// }
