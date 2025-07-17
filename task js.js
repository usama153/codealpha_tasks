// ✅ Show live current date & time
function updateCurrentDateTime() {
  let now = new Date();
  document.getElementById('currentDateTime').innerHTML =
    " Today is <b>" + now.toDateString() + "</b> |  " + now.toLocaleTimeString();
}
setInterval(updateCurrentDateTime, 1000);
updateCurrentDateTime();

// ✅ Age calculation
function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  const result = document.getElementById('result');
  const error = document.getElementById('error');
  const nextBirthdayDiv = document.getElementById('nextBirthday');
  const funFactDiv = document.getElementById('funFact');

  if (!dobInput) {
    error.innerHTML = "⚠️ Please select a valid date of birth.";
    result.innerHTML = "";
    nextBirthdayDiv.innerHTML = "";
    funFactDiv.innerHTML = "";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    error.innerHTML = "⚠️ Date of birth cannot be in the future!";
    result.innerHTML = "";
    nextBirthdayDiv.innerHTML = "";
    funFactDiv.innerHTML = "";
    return;
  }

  error.innerHTML = "";

  // ✅ Calculate age in years, months, days
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <b>${years} years</b>, <b>${months} months</b>, and <b>${days} days</b> old.`;

  // ✅ Next birthday calculation
  let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  const diffTime = Math.abs(nextBirthday - today);
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  nextBirthdayDiv.innerHTML = `Your next birthday is in <b>${daysLeft} days</b> on <b>${nextBirthday.toDateString()}</b>.`;

  // ✅ Fun facts
  const funFacts = [
    "Did you know? You’ve lived for " + Math.floor((today - dob) / (1000 * 60 * 60 * 24)) + " days!",
    "Your Zodiac sign is based on your birth date 🌟",
    "The average human takes ~672 million breaths in a lifetime!",
    "Your age in months: " + (years * 12 + months) + " months!",
    "You have experienced around " + (years * 365 + months * 30 + days) + " sunrises 🌅"
  ];
  funFactDiv.innerHTML = funFacts[Math.floor(Math.random() * funFacts.length)];
}
