const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getTime = () => {
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + ampm + " UTC";

  document.getElementById("currentTimeUTC").innerHTML = strTime;
};

const getDay = () => {
  const day = days[date.getDay()];

  document.getElementById("currentDay").innerHTML = day;
};

getTime();
getDay();
