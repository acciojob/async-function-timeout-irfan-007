//your JS code here. If required.
const text=document.getElementById("text").value;
const delay=document.getElementById("delay").value;
const btn=document.getElementById("btn");
const output=document.getElementById("output");

btn.addEventListener("click",(e)=>{
	e.preventDefault();
	myFunc();
});

async function myFunc(){
	let promis=new Promis((resolve,reject)=>{
		setTimeout(()=>output.innerHTML=text,delay);
		return resolve("done!");
	});
	let result=await promis;
	console.log(result);
}