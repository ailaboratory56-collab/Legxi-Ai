// Dummy OTP System
function sendOTP() {
  document.getElementById("otp-section").style.display = "block";
  alert("Dummy OTP sent: 1234");
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;
  if (otp === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid OTP");
  }
}

// Settings Toggle
function openSettings() {
  window.location.href = "settings.html";
}

function closeSettings() {
  window.location.href = "dashboard.html";
}
