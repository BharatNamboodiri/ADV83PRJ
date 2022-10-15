var mouseEvent = "empty";
var startx, startx;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    new_width = screen.width - 100;
    new_height = screen.heigth - 250;

    if(screen.width < 992)
    {
        canvas.width = new_width;
        canvas.heigth = new_height;
        document.body.style.overflow = "hidden";
    }
    
    color = "black";
    width_of_line = 2;

canvas.addEventListener("touchstart",mytouchstart);



function mytouchstart(e)
{
    console.log("my_touchstart");

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    startx = e.touches[0].clientX - canvas.offsetLeft;
    starty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove);



function mytouchmove(e)
{
    console.log("my_touchmove");

    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(startx,starty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();

    startx=currentx;
    starty=currenty;
}





    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         currentx = e.clientX - canvas.offsetLeft;
         currenty = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + startx + "y = " + starty);
        ctx.moveTo(startx, starty);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + currentx + "y = " + currenty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
        }

        startx = currentx; 
        starty = currenty;
    }

