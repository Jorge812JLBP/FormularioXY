
let ValoresGuardados = new Array();

Agregar=function()
{
   let valorX=document.getElementById("X").value;
   let valorY=document.getElementById("Y").value;

   let nuevo="("+ valorX +"," + valorY +")";

   ValoresGuardados.push(nuevo);

   Mostrar();
}

Mostrar=function()
        {
            let res="";
            document.getElementById('resultado').innerHTML="";
            for(let i=0;i<ValoresGuardados.length;i++)
                res += "El Punto " + (i+1) + " es " +  ValoresGuardados[i] + "<br>";
            return document.getElementById('resultado').innerHTML+=res;
        }

Distancia=function()
{
  let dis;
  for(let i=1;i<ValoresGuardados.length;i++)
  {
    dis= Math.pow(ValoresGuardados[i].valorX-ValoresGuardados[i+1].valorX,2) + Math.pow(ValoresGuardados[i].valorY-ValoresGuardados[i+1].valorY,2);
    document.getElementById("resultadot").innerHTML = "La distancia es: " + Math.sqrt(dis);
  }
 
}