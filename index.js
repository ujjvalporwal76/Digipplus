function home()
{
  var home = document.getElementById("home-section");
  home.classList.remove("hidden");
  var job = document.getElementById("job-section");
  job.classList.add("hidden");
  var pay = document.getElementById("payment-section");
  pay.classList.add("hidden");
}

function job()
{
  var home = document.getElementById("home-section");
  home.classList.add("hidden");
  var job = document.getElementById("job-section");
  job.classList.remove("hidden");
  var pay = document.getElementById("payment-section");
  pay.classList.add("hidden");
}
function pay()
{
  var home = document.getElementById("home-section");
  home.classList.add("hidden");
  var job = document.getElementById("job-section");
  job.classList.add("hidden");
  var pay = document.getElementById("payment-section");
  pay.classList.remove("hidden");
}
