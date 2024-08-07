const days =document.querySelector("#days");
const hours =document.querySelector("#hours");
const minutes =document.querySelector("#minutes");
const seconds =document.querySelector("#seconds");



function Refresh(){

    const CurrentYear=new Date().getFullYear();

    const NewYear = new Date(`January ${CurrentYear+1} 00:00:00`);

    const CurrentDate = new Date();

    const diff = NewYear-CurrentDate;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
};

setInterval(Refresh,1000);



