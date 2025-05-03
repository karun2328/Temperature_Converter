var r=document.getElementById("Result");
//var a=document.getElementById("Number").value;
document.getElementById("far").addEventListener("click", ()=>{
    var a=document.getElementById("Number").value;
    let result = (a * 9 / 5) + 32;
    r.textContent=result+" °F";
});
document.getElementById("cel").addEventListener("click", ()=>{
   var a=document.getElementById("Number").value;
    let result = (a - 32) * (5 / 9);
    r.textContent=result+ " °C";
});



