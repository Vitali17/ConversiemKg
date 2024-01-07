function afisarem(){
    var valoare=document.getElementById("valoarea3").value;
    var unitatea1=document.getElementById("Box3").value;
    var unitatea2=document.getElementById("Box4").value;
    var check1=document.getElementById('check1');
    check1.style.display = 'inline';
    setTimeout(function() {
    ascundeMesaj1();
    }, 400); 
    if(unitatea1==="m" && unitatea2==="dm")
    valoare*=10;
    else if(unitatea1==="m" && unitatea2==="cm")
    valoare*=100;
    else if(unitatea1==="dm" && unitatea2==="m")
    valoare/=10;
    else if(unitatea1==="dm" && unitatea2==="cm")
    valoare*=10;
    else if(unitatea1==="cm" && unitatea2==="dm")
    valoare/=10;
    else if(unitatea1==="cm" && unitatea2==="m")
    valoare/=100;
    document.getElementById("valoarea4").value=valoare;
   }
   function ascundeMesaj1(){
    document.getElementById('check1').style.display='none';
   }