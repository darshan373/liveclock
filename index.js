function updateclock(){
    let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let monthname=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const now=new Date();
    let hours=now.getHours();
    const meridiem=hours>12?"PM":"AM";
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0)
     const day=week[now.getDay()];
     const month=monthname[now.getMonth()];
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const milli=now.getMilliseconds();
    const timestring =`${hours}:${minutes}:${seconds}:${meridiem}`;
    const daystring=`${day},${month}`;
    document.querySelector(".clock").textContent=timestring;
    document.querySelector(".day").textContent=daystring;
}
setInterval(updateclock,1000);