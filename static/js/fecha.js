class Trabajo {
    constructor(descripcion){
        this.descripcion = descripcion
        this.inicial = new Date()
        this.final = NaN
        this.estado = false
        this.notas = []
    }

    get detalle(){
        return `${this.descripcion} [${this.getDate()}] (${this.notas.length})`
    }

    set nuevaNota(valor){
        if(this.notas.length <= 3)
            this.notas.push(valor)
    }
    getDate() {
        return `${this.inicial.getDate()}/${this.inicial.getMonth()}/${this.inicial.getFullYear()} | ${this.inicial.getHours()}:${this.inicial.getMinutes()}:${this.inicial.getSeconds()}`

    }
}