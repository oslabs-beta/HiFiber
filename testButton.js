var button = document.createElement("button");
button.innerHTML = "Do Something";

button.classList.add('testButton');

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});