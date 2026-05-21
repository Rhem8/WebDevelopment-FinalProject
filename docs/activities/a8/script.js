

var mode = 0;

function book() {
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  if (name == "" || date == "" || time == "") {
    alert("Fill all fields");
    return;
  }

  document.getElementById("output").innerHTML =
    "Name: " + name + "<br>" +
    "Date: " + date + "<br>" +
    "Time: " + time +
    "<br><br><button onclick='cancel()'>Cancel</button>";
}

function cancel() {
  document.getElementById("output").innerHTML = "No appointment yet";
}

// SIMPLE MODE TOGGLE (light <-> grey)
function toggleMode() {
  document.body.classList.toggle("dark");
}