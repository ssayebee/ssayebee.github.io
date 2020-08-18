const times = document.querySelectorAll(".time");
for (let i = 0, len = times.length; i < len; i++) {
    times[i].innerHTML = timeForToday(times[i].textContent);
}

function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

function toggleBar() {
    let bar_menu = document.querySelector(".bar-menu");
    if (bar_menu.style.display === "none") {
        bar_menu.style.display = "block";
    } else {
        bar_menu.style.display = "none";
    }
}
