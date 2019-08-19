

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

function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(targetElement == parent.lastChild){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","img/placeholder.gif");
    placeholder.setAttribute("alt","我的图片库");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("选择图片");
    description.appendChild(desctext);
    // document.getElementsByTagName("body")[0].appendChild(placeholder);
    // document.getElementsByTagName("body")[0].appendChild(description);
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function (){
            return showPic(this);
        }
        links[i].onkeypress=links[i].onclick;
    }
}

function showPic(whichPic){   //whichPic就是a链接
    if(!document.getElementById("placeholder")) return true;//检查placeholder是否存在
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    //if(placeholder.nodeName!="IMG") return false;
    placeholder.setAttribute("src",source);
    //if(!document.getElementById("description")){
        var text=whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "" ;//检查title是否存在
        var description=document.getElementById("description");
        if(description.firstChild.nodeType==3){//nodeType写成nodeValue导致错误实在不
            description.firstChild.nodeValue=text;
        }
    // }
    return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
