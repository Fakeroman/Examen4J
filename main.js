var puntoo=new punto()
function agregarPuntos() {

    var x=parseInt(document.getElementById('x').value);
    var y=parseInt(document.getElementById('y').value);

    puntoo.agregarPunto(x,y)
    var calculaar=calcular()
    var distTotal=puntoo.mostrar(calculaar)
    console.log(distTotal);
    document.getElementById('datos').innerHTML=distTotal;
}
function calcular(){

var distancia=puntoo.calcularD();
console.log(distancia);

return distancia;

}
document.getElementById('btnPuntos').addEventListener('click',agregarPuntos);
