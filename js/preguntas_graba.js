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
var especialidadHTML=document.getElementById("especialidad").options[especialidad].text;//options[this.selectedIndex].text
var cantidadHTML=document.getElementById("cantidad").options[cantidad].text;
var tratadosHTML=document.getElementById("tratados").options[tratados].text;
//alert(especialidadHTML+cantidadHTML+tratadosHTML);
window.analytics.trackEvent('Prguntas Iniciales', 'Especialidad', especialidadHTML, 1);
window.analytics.trackEvent('Prguntas Iniciales', 'Cantidad de Pacientes con FA', cantidadHTML, 1);
window.analytics.trackEvent('Prguntas Iniciales', 'Porcentaje tratados con NACOs', tratadosHTML, 1);
window.localStorage.setItem("login", "true");
window.localStorage.setItem("pais", "argentina");
window.location="index_prologo.html";

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
