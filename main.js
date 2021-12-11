canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


rover_width=100;
rover_height=100;

nasa_images_array=["mars.jpg" , "nasa_image_1.jpg" , 'nasa_image_2.jpg' , "nasa_image_3.jpg" , "nasa_image_4.jpg" ];

random_number= Math.floor(Math.random() * 5);
console.log (random_number);

rover_x=100;
rover_y=100;

background_image=nasa_images_array[random_number];
rover_image="rover.png";

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadRover;
    rover_imgtag.src=rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed);
     if(keyPressed == '38') {
          up();
         console.log("up"); }

         if(keyPressed == '37') {
           left();
           console.log("left"); }

           if(keyPressed == '40') {
            down();
           console.log("down"); }

           if(keyPressed == '39') {
          right();
           console.log("right"); }
           }
            function up(){
                if (rover_y>= 0){
                   rover_y= rover_y-10;
                   console.log("When up arrow is pressed, x ="+ rover_x+" y = "+ rover_y);
                   uploadBackground();
                   uploadRover();
                }
            }

            function down(){
                if (rover_y<= 500){
                   rover_y= rover_y+10;
                   console.log("When down arrow is pressed, x ="+ rover_x+" y = "+ rover_y);
                   uploadBackground();
                   uploadRover();
                }
            }

            function left(){
                if (rover_x>= 0){
                   rover_x= rover_x-10;
                   console.log("When left arrow is pressed, x ="+ rover_x+" y = "+ rover_y);
                   uploadBackground();
                   uploadRover();
                }
            }

            function right(){
                if (rover_x<= 700){
                   rover_x= rover_x+10;
                   console.log("When right arrow is pressed, x ="+ rover_x+" y = "+ rover_y);
                   uploadBackground();
                   uploadRover();
                }
            }
           