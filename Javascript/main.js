//function to change image to signature logo, homepage
function switchHeaderGraphic() {
    document.getElementById("headerimage").src = "Assets/jennifer-jia-signature.png";
}

//function to change image to consulting graphic, homepage
function switchHeaderGraphicConsulting() {
    document.getElementById("headerimage").src = "Assets/consulting-graphic.png";
}

//function to change image to design graphic, homepage
function switchHeaderGraphicDesign() {
    document.getElementById("headerimage").src = "Assets/design-graphic.png";
}

//function to change image to storytelling graphic, homepage
function switchHeaderGraphicStorytelling() {
    document.getElementById("headerimage").src = "Assets/storytelling-graphic.png";
}

//function to email for help, faqs
function emailContact() {
  window.location.href= "mailto:jenniferjia48@gmail.com"
}

//function to generate a random project
function randomProject(){
    var randomproj=Math.round(Math.random()*3);
    var proj1="projectone.html";
    var proj2="projecttwo.html";
    var proj3="projectthree.html";
    var proj4="projectfour.html";
    if (randomproj==0) {
        window.location=proj1;
    }
    else if (randomproj==1) {
        window.location=proj2;
    }
    else if (randomproj==2) {
        window.location=proj3;
    }
    else {
        window.location=proj4;
    }
}