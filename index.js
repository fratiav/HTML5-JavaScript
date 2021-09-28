function saludoid(){
    alert("Has pinchado en el párrafo id");
}

function saludotagname(){
    alert("Has pinchado en el párrafo tagname");
}

function saludoclass(){
    alert("Has pinchado en el párrafo class");
}

function saludoname(){
    alert("Has pinchado en el párrafo atributo name");
}

function saludoli(){
    alert("Elemento li");
}

function saludoSpanDobleClick(){
    alert("Elemento li double click");
}


function ejecuta(){
    //Acceso a un elemento por nombre de etiqueta (devuelve array)
    document.getElementsByTagName("p")[3].onclick=saludotagname;
    //Acceso a un elemento por classname (devuelve array y es necesario almacenar en variable)
    var clase = document.getElementsByClassName("class-parrafo")[0].onclick=saludoclass;
    //Acceso a un elemento por id (busca directamente el elemento en cuestion)
    var j = document.getElementById("id-parrafo").onclick=saludoid;
    //Acceso a un elemento por atributo name (devuelve array)
    var x = document.getElementsByName("name-parrafo")[0].onclick = saludoname;


    //Acceso a un grupo de elementos (querySelectorAll) con selector CSS 
    var array = document.querySelectorAll("li");
    for(var i = 0; i<array.length; i++){
        array[i].onclick = saludoli;
    }
    
    //--> querySelector solo selecciona el primero que encuentra
    document.querySelector("span").ondblclick=saludoSpanDobleClick;
}

window.onload=ejecuta;