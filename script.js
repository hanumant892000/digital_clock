const getDateFun = () => {
  let currDate = new Date();
  let hrs = currDate.getHours();
  let mts = currDate.getMinutes();
  let sds = currDate.getSeconds();
  let ampmVal = "AM";
  if (hrs >= 12) {
    ampmVal = "PM";
    hrs=hrs-12
  }
  let hours = document.querySelector("#hours");
  hours.innerHTML = hrs.toString().padStart(2,'0');
  let minutes = document.querySelector("#minutes");
  minutes.innerHTML = mts.toString().padStart(2,'0');
  let second = document.querySelector("#seconds");
  second.innerHTML = sds.toString().padStart(2,'0');
  let ampm = document.querySelector("#ampm");
  ampm.innerHTML = ampmVal;
};

setInterval(getDateFun, 1000);
