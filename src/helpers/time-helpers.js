export function secToTime(sec){
    if (sec > 0){
        let seconds = sec % 60;
        let minutes = ((sec - seconds) / 60) % 60;
        let hours = (((sec - seconds) / 60) - minutes) / 60;

        return {
            s: seconds,
            m: minutes,
            h: hours
        }
    } else {
        return {s: 0, m: 0, h: 0}
    }
}

export function timeToSec(time){
    let sFromSeconds = time.s > 0 ? time.s : 0;
    let sFromMinutes = time.m > 0 ? time.m * 60 : 0;
    let sFromHours = time.h > 0 ? time.h * 60 * 60 : 0;

    return sFromSeconds + sFromMinutes + sFromHours;
}