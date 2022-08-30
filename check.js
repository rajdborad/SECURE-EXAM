
 // Classifier Variable
 let classifier;
 // Model URL
 let imageModelURL = 'human-model/';
 
 // Video
 let video;
 let flippedVideo;
 // To store the classification
 let label = "";

 // Load the model first
 function preload() {
   classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

 async function setup() {
     cnv_width = (document.getElementById('cnv-width').offsetWidth)-32;
     cnv_height = ((260/300)*cnv_width)-32;
     vid_height = ((240/260)*cnv_height)-32;
   var canvas = createCanvas(cnv_width, vid_height);
    // canvas.style('display', 'none');
   canvas.parent('video-holder');
   // Create the video
   video = createCapture(VIDEO);
   video.size(cnv_width, vid_height);
   
   video.hide();

  
   // Start classifying
   classifyVideo();
 }

 function draw() {
   
   // Draw the video
   image(video, 0, 0);
   
 }

 // Get a prediction for the current video frame
 function classifyVideo() {
   flippedVideo = ml5.flipImage(video)
   classifier.classify(flippedVideo, gotResult);
 }

setTimeout(gotResult(), 8000);

function gotResult(error,results) {
    if(error){
        console.log(error);
        return;
    }
    label = results[0].label;

    if(label == 'person')
    {
      document.getElementById("status").innerHTML = `<h4 style="color: #085129;"><i class="fa fa-check-square"></i></h4>
        <h4 style="color: #085129;">Everything is OK</h4>`;
    }
    else {
      document.getElementById("status").innerHTML = `<h4 style="color: red;"><i class="fa fa-exclamation-triangle"></i></h4>
        <h4 style="color: red;">Warning</h4>
        <h4 style="color: red;">You're not detected</h4> `;
        window.alert("Please be on the screen..");
    }
   
    classifyVideo();
    
}





