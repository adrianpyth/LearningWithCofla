//CREAMOS LA CLASE QUE ES LA PLANTILLA para crear objetos

class Animal{

    // los del parentesis son los parametros(especie,edad,color) que va a contener nuestra clase
    constructor(especie,edad,color){  

        // "this" es el obejto que voy a crear, voy a crear propiedades del objeto y no tiene que llevar "this."especie"", puede tener otro nombre
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
    }
    //es lo mismo que una funcion, pero como esta dentro de una clase es un metodo
    verInfo(){
        document.write(this.info +  "<br>")
    }

}


class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }

    ladrar(){
        alert("WAOOO")
    }
}

let perro = new Perro("perro",9,"rojo");
let gato = new Animal("gato",2,"negro");
let jirafa = new Animal("jirafa",4,"amarilla");

//document.write(perro.info + "<br>")
//document.write(gato.info + "<br>")
//document.write(jirafa.info + "<br>")
 //console.log(perro)

perro.verInfo();
perro.ladrar();
