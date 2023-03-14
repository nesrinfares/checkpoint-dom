 
var likes=document.getElementsByClassName("like"); 
for(let i=0; i<likes.length; i++){ 
    let like=likes[i];  
     like.addEventListener("click" ,function(){  
       if (like.firstElementChild.style.color=="red")  
        like.firstElementChild.style.color="black"; 
        else{   like.firstElementChild.style.color="red"; } 
        } ); }
        

var plusbtn=document.getElementsByClassName("plus-btn");
for(let i=0;i<plusbtn.length; i++){
  let plus=plusbtn[i];
  plus.addEventListener("click", function(){
    plus.previousElementSibling.value++;
    total();
    total1();
    total2();
    total3();
  })

}

var moinsbtn=document.getElementsByClassName("minus-btn");
for(let i=0;i<moinsbtn.length; i++){
  let moin=moinsbtn[i];
  moin.addEventListener("click", function(){
    if (moin.nextElementSibling.value > 1){
      moin.nextElementSibling.value--;
    }
    total();
    total1();
    total2();
    total3();
  })

}

// btn delate 
let deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
  let del = deletes[i];
  del.addEventListener("click", function () {
    del.parentElement.remove();
    total();
    total1();
    total2();
    total3();
  });
}
// total
let items = document.getElementsByClassName("Item");
let finalPrice = document.getElementById("finalPrice");
function total() { 
  let s = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    s =
      s +
      item.querySelector(".Quant").value *
        item.querySelector(".price").innerText;
  }
  return (finalPrice.value = s);
}

function total1() {
  let q1 = document.getElementById("q1");
  let p1 = document.getElementById("p1");
  p1.innerText = q1.value * 1379;
}
function total2() {
  let q2 = document.getElementById("q2");
  let p2 = document.getElementById("p2");
  p2.innerText = q2.value * 176;
}
function total3() {
  let q3 = document.getElementById("q3");
  let p3 = document.getElementById("p3");
  p3.innerText = q3.value * 249;
}






