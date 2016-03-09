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
	window.analytics.trackEvent('Cambio de capitulo', 'Capitulos Abiertos', pagina.substring(0, pagina.length - 5), 1);
	window.analytics.trackView('Pantalla Capitulo: '+pagina.substring(0, pagina.length - 5));
	//alert('fin');
    }
  }

	xmlhttp.open("POST",pagina,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("especialidad=vacia");
}