function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    document.getElementById("hours").innerText = h;
    document.getElementById("hours").textContent = h;

    document.getElementById("minutes").innerText = m;
    document.getElementById("minutes").textContent = m;

    document.getElementById("seconds").innerText = s;
    document.getElementById("seconds").textContent = s;

    setTimeout(showTime, 1000);
}

showTime();
