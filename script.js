function process(img_){
     // Load the model.
     document.getElementById('output').innerHTML+=`<img class="col-lg-6 col-md-8 col-sm-12 image_out" src=${img_.src}  />`
     
     mobilenet.load().then(model => {
        // Classify the image.
        model .classify(img_).then(predictions => {
        
          console.log('Predictions: ');
          console.log(predictions);
         
         
          
          document.getElementById('details').innerHTML+=
                             `<div class="card" >
                             <ul class="list-group list-group-flush">
                               <li class="list-group-item">Prediction1: ${predictions[0].className} | Probability: ${(predictions[0].probability)*100}%</li>
                               <li class="list-group-item">Prediction2: ${predictions[1].className} | Probability: ${(predictions[1].probability)*100}%</li>
                               <li class="list-group-item">Prediction3: ${predictions[2].className} | Probability: ${(predictions[2].probability)*100}%</li>
                             </ul>
                           </div>`;
        });
      });
}

function up_img(event){
    const img1 = new Image()
    var filename=URL.createObjectURL(event.target.files[0]);
      img1.src=filename;
      img1.crossOrigin = null;
      process(img1);
  }

function img_search(){
    const img2 = new Image()
    var filename=document.getElementById('upload_link').value;
      console.log(filename);
      img2.src=filename;
      img2.crossOrigin = "anonymous";
      process(img2);
      
}
