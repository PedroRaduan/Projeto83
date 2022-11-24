var eventoDoMouse = "empty";

tela = document.getElementById("canva");

contexto = tela.getContext("2d");



tela.addEventListener("mousedown", clica);


function clica(e)
{
  
  eventoDoMouse = "mousedown";
  
}

tela.addEventListener("mousemove", move);


function move(e)
{
  

  pontoDoMouseX = e.clientX - tela.offsetLeft;
  

  pontoDoMouseY = e.clientY - tela.offsetTop;
  
  if(eventoDoMouse == "mousedown")
    {
      
      console.log("x= "+pontoDoMouseX+", y= "+pontoDoMouseY);
      
   
      contexto.beginPath();
      
     
      contexto.strokeStyle = "blue";
      
      
      contexto.lineWidth = 2;
      
     
      contexto.arc(pontoDoMouseX, pontoDoMouseY, 15, 0, 2*Math.PI);
      
  
      contexto.stroke();
      
      
    }
  
  
}

tela.addEventListener("mouseup", soltr);


function solta(e)
{
  
  eventoDoMouse = "mouseup";
  
}



tela.addEventListener("mouseleave", sai);


function sai(e)
{
  
  eventoDoMouse = "mouseleave";
  
}
