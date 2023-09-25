// var clock = document.querySelector(".card-text");

// function updateCountdown() {
//   let userDays = prompt("Please enter the future date (YYYY-MM-DD)");
//   let futureDate = new Date(userDays);

//   if (isNaN(futureDate.getTime())) {
//     console.log("Invalid date format. Please enter a valid date (YYYY-MM-DD).");
//     return;
//   }

//   setInterval(function() {
//     let currentTime = new Date();
//     let differentTime = futureDate.getTime() - currentTime.getTime();
//     let days = Math.floor(differentTime / 1000 / 60 /60 /24); // Calculate days
//     let seconds = Math.floor(differentTime / 1000 );
//     let minutes = Math.floor(differentTime / 1000 / 60);
//     let hours = Math.floor(differentTime / 1000 * 60 * 60 );
//     let remainingHours=hours%24
//     let remainingMinutes=minutes%60
//     let remainingSeconds=seconds%60
//     // let remainingDays=days%24

//     console.log("Remaining days:", days);
//     console.log("Remaining hours:", hours);
//     console.log("Remaining minutes:", minutes);
//     console.log("Remaining seconds:", seconds);

//     clock.innerHTML =  `${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
//   }, 1000); // 1000 milliseconds (1 second) interval
// }

// updateCountdown();





var clock = document.querySelector(".clock");
var showDay=document.querySelector(".showDay")
function updateCountdown() {
  let userDays = prompt("Please enter the future date (YYYY-MM-DD)");
  let futureDate = new Date(userDays);

  if (userDays==="" || userDays===null) {
    alert("Invalid date format. Please enter a valid date (YYYY-MM-DD).")
    console.log("Invalid date format. Please enter a valid date (YYYY-MM-DD).");
    return;
  }

  setInterval(function() {
    let currentTime = new Date();
    let differentTime = futureDate.getTime() - currentTime.getTime();
    let days = Math.floor(differentTime / (1000 * 60 * 60 * 24)); // Calculate days
    let hours = Math.floor((differentTime / (1000 * 60 * 60)) % 24); // Calculate hours
    let minutes = Math.floor((differentTime / (1000 * 60)) % 60); // Calculate minutes
    let seconds = Math.floor((differentTime / 1000) % 60); // Calculate seconds

    console.log("Remaining days:", days);
    console.log("Remaining hours:", hours);
    console.log("Remaining minutes:", minutes);
    console.log("Remaining seconds:", seconds);
    clock.innerHTML = `<span id="days">${days}</span> <span id="hrs">${hours<10?"0"+hours:hours}</span>
    <span>:</span>
    <span id="min">${minutes<10 ?"0"+minutes: minutes}</span>
    <span>:</span>
    <span id="sec">${seconds<10?"0"+seconds:seconds}</span>`;
  }, 1000); 
}

updateCountdown();