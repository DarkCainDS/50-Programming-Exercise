function fastClock(){
    setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const second = date.getSeconds();
        const milisecond = date.getMilliseconds();
        console.log(`${hours}:${minutes}:${second}:${milisecond}`);
    },1000);
}
fastClock();