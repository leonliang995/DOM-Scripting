function showPic(whichPic){
    var placeholder=document.getElementById("placeholder");
    var source=whichPic.getAttribute("href");
    placeholder.setAttribute("src",source);
    var text=whichPic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}

// function countBodyChildren(){
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.childNodes.length);
// }
// window.onload=countBodyChildren;

//window.onload=function(){
    //var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.nodeType);
//}