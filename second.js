fetch("https://api.kanye.rest")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    let yellow = data.results;
    console.log(data);
    document.getElementById("yellow").innerHTML = data["quote"];
  });

const p = document.createElement("p");
document.body.appendChild(p);

p.innerText = "space facts";
p.classList.add = "breakfast";
p.style.color = "black";
p.style.fontSize = "80px";

document.querySelector("body");
body.style.backgroundColor = "black";
