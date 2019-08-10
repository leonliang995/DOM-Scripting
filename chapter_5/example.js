window.onload=prepareLinks;
function prepareLinks(){
    var links=document.getElementsByTagName("a");
    // console.log(links);
    for(var i=0;i<links.length;i++){
        if(links[i].getAttribute("class")=="popup"){
            // console.log(this);
            links[i].onclick=function(){
                // popUp(this.getAttribute("href"));
                popUp(this.href);
                return false;
            } 
        }
    }
}
function popUp(winURL){
    window.open(winURL,"popUp","width=320,height=480");
}



