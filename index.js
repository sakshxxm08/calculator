// var a=document.getElementById("min"); 
// var min_counter=0;
// setInterval(function(){
//     min_counter=min_counter+1;
//     a.innerHTML=min_counter;
//     if (min_counter==60)
//     {
//         sec_counter=0;
//     }
// }, 60000);


// var b=document.getElementById("sec"); 
// var counter=0;
// var sec_counter=0;
// setInterval(function(){
//     sec_counter=sec_counter+1;
//     b.innerHTML=sec_counter;
//     if (sec_counter==60)
//     {
//         sec_counter=0;
//     }
// }, 1000);


// var c=document.getElementById("mili_sec"); 
// var mili_sec_counter=0;
// setInterval(function(){
//     mili_sec_counter= mili_sec_counter+1;
//     c.innerHTML=mili_sec_counter;
//     if (mili_sec_counter==100)
// {
//     mili_sec_counter=0;
// }
// }, 10);
function show(value)
{
    console.log("clicked on"+value)
}
const selectedElement = document.getElementById("screen");
var box_text="";
console.log(selectedElement)
function show(value)
{
  if( value==='=')
  {
    box_text=eval(box_text);
  }
  else if(value==='clear')
  {
     box_text="0";
  }
  else 
  {
    if(box_text === "0")
    {
        box_text="";
    }
    box_text=box_text+value+"";
     
  }
  selectedElement.innerHTML=box_text
}
