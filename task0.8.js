function convert(number) {
  let hours = ~~(number / 60); //For large number like 10000000000 = 1410065408 this(~~) will not work as much as Math.floor,parseInt etc does not work
  let minutes = number % 60;

  hours += hours === 1 ? " hour, " : " hours, ";

  minutes += minutes === 1 ? " minute" : " minutes";

  return hours + minutes;
}
