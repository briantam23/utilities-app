const padding = num => {
    let str = String(num);
    if(str.length < 2) str += '0';
    return str;
}

const formatTime = ms => {
    let timeLeft = ms / 1000;
    
    const hours = parseInt(timeLeft / 3600);
    timeLeft %= 3600;
    const mins = parseInt(timeLeft / 60);
    const secs = parseInt(timeLeft % 60);
    const centiseconds = parseInt((ms % 1000) / 10);

    return `${padding(hours)}:${padding(mins)}:${padding(secs)}:${padding(centiseconds)}`;
}

export default formatTime;