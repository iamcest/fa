function cambiarPagina(pagina)
{
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
	if (xmlhttp.readyState==4)
    {
	//alert('entre por ='+xmlhttp.readyState);
    document.getElementById("muestra_texto").innerHTML=xmlhttp.responseText;
	//alert('pase la respuesta');
	document.getElementById("menu-toggle").click();
	//alert('fin');
    }
  }

	xmlhttp.open("POST",pagina,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("especialidad=vacia");
}