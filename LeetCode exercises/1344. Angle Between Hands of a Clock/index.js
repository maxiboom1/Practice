// Every minute equals to 6 degrees

/*
// The main trick here is to find out on which position hour arrow.

So, every minute is 6 deg (360 deg / 60 mins)
Every hour jump on time table is 5 minuets = so its 30 deg (6*5)
lets say, the 12 hour is 0 shift (since its on top)
then , 1 is 30 shift and so on..
so, is we get 12 as hour, and 30 as min, then we calc 30 min to deg (30 * 6 = 180),
and we need to calc exact position of hour arrow: (5/60 * currentMin) * 6

example:
hour: 12
min: 30

12 = 0

5/60 * 30 * 6

*/

function angleClock(hour, minute){
    const hourFixedShift = hour !== 12 ? hour * 30 : 0;
    const hourFineShift = (5/60 * minute) * 6 + hourFixedShift;
    const minutesDeg = minute * 6;
    const absoluteResult = Math.abs(minutesDeg - hourFineShift);
    const res = absoluteResult > 180 ? 360 - absoluteResult : absoluteResult;

    return res;
}


document.write(angleClock(1, 57));


