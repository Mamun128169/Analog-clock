let hour = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

setInterval(function() {
    const d = new Date();
     let hTime = d.getHours();
     let mTime = d.getMinutes();
     let sTime = d.getSeconds();

     let hRotation = (30 * hTime + mTime / 2);
     let mRotation = (6 * mTime + sTime / 10);
     let sRotation = (6 * sTime);

     hour.style.transform = `rotate(${hRotation}deg)`;
     min.style.transform = `rotate(${mRotation}deg)`;
     sec.style.transform = `rotate(${sRotation}deg)`;
}, 1000);