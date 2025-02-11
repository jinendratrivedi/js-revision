
var images = ["img1.webp" , "img2.webp" , "img3.webp" , "img4.jpeg"]

const change = ()=>
{
    var randomindex=Math.floor(Math.random()*images.length);
    console.log(randomindex);

    var image = document.getElementById("image");

    image.src = "../image/" + images[randomindex]
    
}    