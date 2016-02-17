function preguntas_graba()
	{
var error = '';
var especialidad=document.getElementById("especialidad").value;
var cantidad=document.getElementById("cantidad").value;
var tratados=document.getElementById("tratados").value;
//alert("preguntas ="+especialidad+'  '+cantidad+'  '+tratados);
if(	especialidad == 0){error = error + '<p>Falta seleccionar una especialidad.</p>'}
if(	cantidad == 0){error = error + '<p>Falta seleccionar una cantidad.</p>'}				
if(	tratados == 0){error = error + '<p>Falta selecionar un porcentaje.</p>'}				
if(error.length > 0){
document.getElementById("alertContent").innerHTML='<p>Te agradecemos respondas a las preguntas para descargar la App<p>'+error;
document.getElementById("openModal").click();
					return}	
if(checkConnection()){	
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
	 // alert("xmlhttp.readyState:"+xmlhttp.readyState+"-- xmlhttp.status:"+xmlhttp.status);
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    value=parseInt(xmlhttp.responseText);
	window.localStorage.setItem("login", "true");
	//var value = window.localStorage.getItem("login");
	window.location="index_prologo.html";
	// ir a la pagina principal.

    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/fibrilacion/preguntas_graba.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("especialidad="+especialidad+"&cantidad="+cantidad+"&tratados="+tratados);
}else{
	document.getElementById("openModal2").click();
}
}
function checkConnection() {
//var state = navigator.connection.type;
var state = navigator.connection.type;
if (state == window.Connection.NONE)
{
    // doesn't have internet, notify
	return false;
}
else
{
    // has internet, continue work accessing internet
	return true;
}
	/*return true;// Prueba interna*/ 
    //alert('Connection type: ' + states[networkState]);
}

