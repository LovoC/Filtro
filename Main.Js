function preload(){}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video, 0,0, 400, 400);
    tint(tint_color);
}

function FILTRO(){
    tint_color=document.getElementById("!color!").value;
}

function Foto(){
    save("Filtro.png");
}