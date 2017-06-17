/**
 * Created by konoplya on 17.06.2017.
 */
window.addEventListener("load",function(){
    var elem=document.getElementById("elem");
    console.log(elem);
    document.addEventListener("mousemove",function(e){

        var mouseX = e.clientX,
            mouseY = e.clientY;

        var buttonX = elem.offsetLeft,
            buttonY = elem.offsetTop;

        if((Math.abs(mouseX-buttonX)<50)&&(Math.abs(mouseY-buttonY)<50)&&(mouseX<buttonX)){
            var butPosX=(buttonX+10)+"px";
            elem.style.left=butPosX;
        }

        else if((Math.abs(mouseX-buttonX)<50)&&(Math.abs(mouseY-buttonY)<50)&&(mouseX>buttonX)&&(buttonX<100)){
            var butPosX=(buttonX+100)+"px";
            elem.style.left=butPosX;
        }

        else if((Math.abs(mouseX-buttonX)<50)&&(Math.abs(mouseY-buttonY)<50)&&(mouseX>buttonX)){
            butPosX=(buttonX-10)+"px";
            elem.style.left=butPosX;
        }

        else if((Math.abs(mouseX-buttonX)<100)&&(Math.abs(mouseY-buttonY)<50)&&(mouseX<buttonX)&&(screen.width-buttonX<150)){
            butPosX=(buttonX-100)+"px";
            elem.style.left=butPosX;
        }

        if((Math.abs(mouseX-buttonX)<50)&&(Math.abs(mouseY-buttonY)<50)&&(mouseY<buttonY)){
            var butPosY=(buttonY+10)+"px";
            elem.style.top=butPosY;
        }

        else if((Math.abs(mouseX-buttonX)<50)&&(Math.abs(mouseY-buttonY)<50)&&(mouseY>buttonY)&&(buttonY<100)){
            var butPosY=(buttonY+100)+"px";
            elem.style.top=butPosY;
        }

        else if((Math.abs(mouseX-buttonX)<50)&&(Math.abs(mouseY-buttonY)<50)&&(mouseY>buttonY)){
            butPosY=(buttonY-10)+"px";
            elem.style.top=butPosY;
        }

        else if((Math.abs(mouseX-buttonX)<50)&&(Math.abs(mouseY-buttonY)<150)&&(mouseY<buttonY)&&(screen.height-buttonY<180)){
            butPosY=(buttonY-100)+"px";
            elem.style.top=butPosY;
        }
    })
},false)
