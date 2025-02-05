const wordhandler = (option)=> option.fname + "your wordhandler file is ready"

const jpghandler= (option)=> option.fname + "your jpgandler file is ready"

const txthandler= (option)=> option.fname + "your pdfhandler file is ready"

const pnghandler = (option)=> option.fname + "your pdfhandler file is ready"

var user = "abc.word";
var temp;

if(user.endsWith(".word")){
    temp = wordhandler({fname:user,size:"1000kb"});
}

else if(user.endsWith(".jpg")){
    temp = jpghandler({fname:user,size:"1000kb"});
}

else if(user.endsWith(".txt")){
    temp = txthandler({fname:user,size:"1000kb"})
}

else if(user.endsWith(".png")){
    temp = pnghandler({fname:user,size:"1000kb"});
}

console.log(temp);
