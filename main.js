canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

roverheight=100
roverwidth=100

roverx=10
rovery=10

roverimage="rover.png";
marsbackground="mars.jpg";

function add(){
    background_img=new Image()
    background_img.onload=uploadbackgroundimg;
    background_img.src=marsbackground;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover
    rover_imgtag.src=roverimage
}

function uploadbackgroundimg(){
ctx.drawImage(background_img,0,0,800,600);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,roverx,rovery,roverwidth,roverheight);
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keypressed=e.keyCode
        console.log(keypressed)
        if(keypressed=="38"){    
            console.log("up")
            up()
        }
        if(keypressed=="40"){
            console.log("down")
            down()
        }
        if(keypressed=="37"){
            console.log("left")
            left()
            
        }
        if(keypressed=="39")
        console.log("right")
        right()

    }

function up(){
    if(rovery>=0){
        rovery=rovery-10
        uploadbackgroundimg();
        uploadrover();
    }
}
function down(){
    if(rovery<=600){
        rovery=rovery+10
        uploadbackgroundimg();
        uploadrover();
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10
        uploadbackgroundimg();
        uploadrover();
    }
}
function right(){
    if(roverx<=800){
        roverx=roverx+10
        uploadbackgroundimg();
        uploadrover();
    }
}
