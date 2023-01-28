let cout = 1;
  document.getElementById("radio1").checked = true;
  
  setInterval(function(){
    nextImage();
  }, 5000)

  function nextImage(){
    cout++;
    if(cout>3){
        cout=1;
    }
    document.getElementById("radio"+cout).checked = true;
  }