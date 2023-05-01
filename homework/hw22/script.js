function getImage() {
    const random = Math.floor(Math.random() * 9)+1;   
    return '<img src="images/'+random+'.png" border="0" />';
  }
  
  document.getElementById("image1").innerHTML = getImage();