var messCol=document.getElementById("messColumn");
 2     var btn=document.getElementById("btn");
 3     var con=document.getElementById("content");
 4     btn.onclick=function(){
 5         if(messCol.value.trim()==""){
 6             alert("The input cannot be empty or blank");
 7             return;
 8         }
 9         var messDiv=document.createElement("div");
10         messDiv.setAttribute("style","width:450px;height:30px;border:2px dotted #808080;margin-bottom:5px;");
11         {
12             //This code block is used to store the build messDiv Code for content:Message content and delete key style
13             var messCon = document.createElement("div");
14             messCon.setAttribute("style","float:left;width:350px;height=30px;line-height:30px;overflow:auto;");
15             var del = document.createElement("a");
16             del.setAttribute("style","float:left;width:50px;height:30px;line-height:30px;");
17             del.setAttribute("href","javascript:;");
18             del.innerHTML = "delete";
19             messDiv.appendChild(messCon);
20             messDiv.appendChild(del);
21             messCon.innerHTML=messCol.value;
22             del.onclick=function(){
23                 con.removeChild(this.parentNode);   //Let parent element content Delete child element's messDiv
24             }
25         }
26         con.appendChild(messDiv);
27         messCol.value="";   //Clear the character content of the input box
28     }
