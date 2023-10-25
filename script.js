function delayUpdateElement() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1000 milliseconds = 1 second
  });
}

delayUpdateElement().then((message) => {
  const outputElement = document.getElementById("output");
  outputElement.textContent = message;
});
