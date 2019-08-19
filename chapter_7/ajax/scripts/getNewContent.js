function getNewContent(){
    var request=new getHTTPObject();
    if(request){
        console.log(request);
        request.open("GET","example.txt",true);
        request.onreadystatechange=function(){
            if(request.readyState==4){
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
        response.addHeader("Access-Control-Allow-Origin","*");
    }else{
        alert("Sorry,your browser does\'t support XMLHttpRequest!");
    }
}

addLoadEvent(getNewContent);

function getHTTPObject(){
    if (typeof XMLHttpRequest == "undefined"){
        console.log("true");
        XMLHttpRequest=function(){
            try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
              catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
              catch(e){}
            try {return newActiveXObjet("Msxml2.XMLHTTP");}
              catch(e){}
            return false;
        }
    }
    return new XMLHttpRequest();
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
