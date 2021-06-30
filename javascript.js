
    function cal()
    {
      var amt=document.getElementById("amt").value;
      var rate=document.getElementById("rate").value;
      var year=document.getElementById("year").value;
      var A= (amt*rate*year)/100;
      var temp=parseInt(A);
      var temp2=parseInt(amt);
      var final=temp+temp2;
      document.getElementById("d-amt").innerHTML=amt;
      document.getElementById("d-rate").innerHTML=rate;
      document.getElementById("d-time").innerHTML=year;
      document.getElementById("d-final").innerHTML=final;
      document.getElementById("output").style.display="block";
    }
 
 
    function isInputNumber(event){
      var ch = String.fromCharCode(event.which);
      if(!(/[0-9]/.test(ch))){
        event.preventDefault();
      }
    }
  