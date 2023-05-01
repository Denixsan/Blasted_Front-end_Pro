var catlink = document.getElementById("catalog"),
        catblock = document.getElementById("cat-block");
 
    catlink.onmouseover = function(){
        catblock.style.display="block";
    };
    catblock.onmouseout = function(e){
        var evt = e||window.event,
            rel = evt.relatedTarget || evt.toElement;
        if (rel.id !== "catalog") {
            catblock.style.display="none";
        }
    };