/**
 * Created by konoplya on 14.06.2017.
 */
window.addEventListener("load",function(){
    var elem=document.getElementById("elem");
    console.log(elem);
    document.addEventListener("mousemove",function(e){
        //if(elem.style.left<e.clientX){
            //elem.style.left+=50 +"px";
            //elem.style.left=(e.clientX + 50) +"px";

            var startX = e.clientX,
                startY = e.clientY;

            // начальные координаты элемента, который будет перемещаться.
            var origX = elem.offsetLeft,
                origY = elem.offsetTop;

            // разница между координатами мыши и координатами перетаскиваемого элемента.
            //var deltaX = origX - startX;
                deltaY = startY - origY;
            if ((origX - startX)<50&&(startX<origX)){
                var pos=(origX+50)+"px";
                //elem.style.left=100+"px";
                elem.style.left=pos;
                console.log("wffwff");
            }
            else if((startX-origX)<50&&(startX>origX)){
                pos=(origX-50)+"px";
                //elem.style.left=100+"px";
                elem.style.left=pos;
                console.log("wffwff");
            }

       // }
        console.log(deltaX,deltaY);
        //console.log(e.clientX);
        //var startX=e.clientX;
        //console.log(elem.style.left);
    })
    //elem.addEventListener("mouseover",function(e){
        //var startX=e.clientX;
        //console.log(startX);
    //},false)
},false)
