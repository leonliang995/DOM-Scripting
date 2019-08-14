
function showPic(whichPic){   //whichPic就是a链接
    if(!document.getElementById("placeholder")) return false;//检查placeholder是否存在
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName!="IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text=whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "" ;//检查title是否存在
        var description=document.getElementById("description");
        if(description.firstChild.nodeType==3){//nodeType写成nodeValue导致错误实在不
            description.firstChild.nodeValue=text;
        }
    }
    return true;
}


function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function (){
            return !showPic(this);
        }
    }
}

function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else {
        window.onload=function(){ 
            oldonload();
            func();
        }
    }
}


addLoadEvent(prepareGallery);