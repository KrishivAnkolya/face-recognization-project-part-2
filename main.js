Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

    camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot() {
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:", ml5.version);

Classifier = ml5.imageClasifier('https://teachablemachine.withgoogle.com/models/T7dql5fyn/model.json',modelLoaded);