let btn=document.getElementById("btn");
let rupees=document.getElementById("1");
let dollars=document.getElementById("2");
let yen=document.getElementById("3");
let f1=new  Intl.NumberFormat(
    "en-IN",
    {style:"curreny",currency:"INR"}
);
let f2=new  Intl.NumberFormat(
    "en-US",
    {style:"curreny",currency:"USD"}
);
let f3=new  Intl.NumberFormat(
    "ja-JP",
    {style:"curreny",currency:"JPY"}
);

btn.addEventListener("click", ()=>{
    let a=document.getElementById("a").value;
    rupees.innerHTML=`<span>Indian Rupees:</span>${f1.format(a)}`;
    dollars.innerHTML=`<span>US Dollars:</span>${f2.format(a)}`;

    yen.innerHTML=`<span>Japanese Yen:</span>${f3.format(a)}`;

})