class Chocolate{
    constructor (marca, color, tamano, porcentajeCacao, temperatura, gramaje){
        this.marca = marca;
        this.color = color;
        this.tamano = tamano;
        this.porcentajeCacao = porcentajeCacao;
        this.temperatura = temperatura;
        this.gramaje = gramaje;
    }
    estado (){
        if(this.temperatura === "caliente")
        return "cuidado";
        
        else if (this.temperatura === "frio")
           return "Date como magnate o calienta";
        
    }
}
const ferrero = new Chocolate ("Ferrero", "café", "amargo", "grande", "frio", "20", "45g.");
console.log (ferrero);
console.log (ferrero.estado());
const snikers = new Chocolate ("Sniker", "café", "dulce", "mediano", "caliente", "casi nada", "45g");
console.log (snikers);
console.log (snikers.estado());