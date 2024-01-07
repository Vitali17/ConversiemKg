function afisarekg(){
    var valoare=document.getElementById("valoarea1").value;
    var unitatea1=document.getElementById("Box1").value;
    var unitatea2=document.getElementById("Box2").value;
    var check1=document.getElementById('check');
    check1.style.display = 'inline';
    setTimeout(function() {
    ascundeMesaj();
    }, 400); 
    if(unitatea1==="kg" && unitatea2==="t")
    valoare/=1000;
    else if(unitatea1==="kg" && unitatea2==="g")
    valoare*=1000;
    else if(unitatea1==="g" && unitatea2==="kg")
    valoare/=1000;
    else if(unitatea1==="g" && unitatea2==="t")
    valoare/=1000000;
    else if(unitatea1==="t" && unitatea2==="g")
    valoare*=1000000;
    else if(unitatea1==="t" && unitatea2==="kg")
    valoare*=1000;
    document.getElementById("valoarea2").value=valoare;
   }
   function ascundeMesaj(){
    document.getElementById('check').style.display='none';
   }