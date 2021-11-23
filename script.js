let start_camera = document.getElementById('start_camera');
let video = document.getElementById('video');
let take_picture_button = document.getElementById('take_picture');
let picture = document.getElementById('picture');
let open_take_picture_modal = document.getElementById('open_take_picture');

open_take_picture_modal.addEventListener('click' , async()=>{
    let stream = await navigator.mediaDevices.getUserMedia({video: true}) 
    video.srcObject = stream;
});


take_picture.addEventListener('click' , async()=>{ 
    let qwe = picture.getContext('2d').drawImage(video , 0 , 0 , picture.width , picture.height);
    let imagen_base_64 = picture.toDataURL('image/png');
    console.log(imagen_base_64)
});

