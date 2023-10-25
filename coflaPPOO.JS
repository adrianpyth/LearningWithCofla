class Celular{

    constructor(color, peso,resoluP, cam, ram){

                //aca creamos un constructor, son los parametros que tiene nuestra clase
        this.color = color;
        this.peso = peso;
        this.resoluP = resoluP;
        this.cam = cam;
        this.ram = ram;
        this.encendido = false;
        //y con this. creamos que el objeto  tenga una propiedad que va  a ser loq eu nosotros pongamos, es decir lo que esta despues del signo de igualacion

    }

    //Se crean los metodos, es lo mismo que una funcion, pero cuando esta dentro de una clase se coonvierte en un metodo
    presionarButtonEncendido(){
        
        if (this.encendido == false){
            alert("celular encendido");
            this.encendido = true;
        }else{
            alert("celular apagado")
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){

            alert("Reiniciando celular")
        }
        else{
            alert("El celular esta apagado")
        }

    }

    tomarFoto(){

        alert(`foto tomada en una resolucion de:  ${this.resoluP}` )

    }

    tomarVideo(){

        alert(`grabando video en una resolucion de: ${this.resoluP}`)
    }
    infodevice(){
        
        return`
        Color: <b>${this.color}</b><br></br>
        Peso: <b>${this.peso}</b><br></br>
        Pulgadas: <b>${this.resoluP}</b><br></br>
        Resolucion de Video: <b>${this.cam}</b><br></br>
        Memoria Ram: <b>${this.ram}</b><br></br>
        
        
        
        `;
    }



}

class CelularAltaGama extends Celular{
    constructor(color, peso,resoluP, cam, ram,rdce){
        //aca creamos un constructor, son los parametros que tiene nuestra clase
        super(color,peso,resoluP,cam,ram);
        this.resolucionCamExtr = rdce;




    }

    grabarVideoSlow(){

        alert("Estas grabando en slow motion");
    }

    reconicimientoFacial(){

        alert("vamos a iniciar el renonocimiento")
    }
    infoAltaGama(){
        
        return this.infodevice() + `Resolucion Camara Extra: ${this.resolucionCamExtr} <br>`;

    }

}

// se va a crear una clase, bnueno 3 clases celular, con diferentes caracteristicas
// const celular1 = new Celular("Rojo", "150g", "5", "HD", "4gb")
//const celular2 = new Celular("Blanco", "180g", "6", "HD", "4gb")
//const celular3 = new Celular("Negro", "195g", "7", "Full HD", "4gb")
/*
celular1.presionarButtonEncendido();
celular1.tomarFoto();
celular1.tomarVideo();
celular1.reiniciar(); */


//se accede a las propiedades con un punto
/*document.write(`

    ${celular1.infodevice()} <br>
    ${celular2.infodevice()} <br>
    ${celular3.infodevice()} <br>

`);
*/
//celular1.tomarVideo();

const celular1 = new CelularAltaGama("Negro","160g","6","2k", "8gb", "20px");
const celular2 = new CelularAltaGama("Blanco", "180g", "6", "HD", "4gb", "30px");

document.write(`

    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>


`);