const padding = num => {
    let s = String(num);
    if(s.length < 2) s = '0' + s;
    return s;
}

const formatTime = ms => {
    let timeLeft = ms / 1000;
    
    const hour = parseInt(timeLeft / 3600);
    timeLeft %= 3600;
    const min = parseInt(timeLeft / 60);
    const sec = parseInt(timeLeft % 60);
    const centisecond = parseInt((ms % 1000) / 10);

    return `${padding(hour)}:${padding(min)}:${padding(sec)}:${padding(centisecond)}`;
}

export default formatTime;