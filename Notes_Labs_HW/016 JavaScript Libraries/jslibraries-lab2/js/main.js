let longDay = moment().format('dddd MMM D, YYYY h:mm:ss a');
document.getElementById("longDay").innerHTML = longDay;
let shortMonth = moment().format('MMM D, YYYY h:mm:ss a');
document.getElementById("shortMonth").innerHTML = shortMonth;
let weekOfYear = moment().format('W YY');
document.getElementById("weekOfYear").innerHTML = weekOfYear;
let quarterOfYear = moment().format('Q YYYY');
document.getElementById("quarterOfYear").innerHTML = quarterOfYear;

