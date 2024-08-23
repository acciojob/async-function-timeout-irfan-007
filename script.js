//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  myFunc();
});

async function myFunc() {
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => (output.innerHTML = text.value), delay.value);
  //   });
  //   await promise;
  await setTimeout(() => (output.innerHTML = text.value), delay.value);
  console.log("completed!");
}
