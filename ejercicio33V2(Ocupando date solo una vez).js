class Reloj{
    constructor(){
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();

    }
    refresh(seconds){
        this.seconds += seconds;
        //actualizar segundos
        if(this.seconds >= 60){
            this.minutes++;
            this.seconds = 0;
        }
        //actualizar minutos
        if(this.minutes >= 60){
            this.hours++;
            this.minutes = 0;
        }
        //actualizar horas
        if(this.hours >= 24){
            this.hours = 0;
        }
    }
    show(){
        this.refresh(1);
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
    on(){
        setInterval (() => {
            this.show();
        },1000);
    }
}
let clock = new Reloj();
clock.on();