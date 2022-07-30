const box = document.getElementById("box");

box.style.position = "absolute";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function load() {
    let startPoint = [300,50];
    let amplitude = 50;
    
  for (let x = 0; x <= 8*Math.PI; x += 0.1) {
    //Sin(xx)/2(xx-pi/2)/pi
    
    
    y = -Math.sin(x);
    y2 = Math.sin(x)
    


    var elem = document.createElement("div");
    var elem2 = document.createElement("div");
    var elem3 = document.createElement("div");
    elem.style.cssText = `position:absolute;
                          top:${y+startPoint[0]}px;
                          left:${x+startPoint[1]}px;
                          margin-top:${y*amplitude}px;
                          margin-left:${x*amplitude}px;
                          color:white;
                          background:none`;
    
    elem.innerText = ".";
    elem2.style.cssText = `position:absolute;
                          top:${y2+startPoint[0]}px;
                          left:${x+startPoint[1]}px;
                          margin-top:${y2*amplitude}px;
                          margin-left:${x*amplitude}px;
                          color:red;
                          background:none`;
    
    
    elem2.innerText = ".";
    elem3.style.cssText = `position:absolute;
                          top:${startPoint[0]}px;
                          left:${x+startPoint[1]}px;
                          margin-top:${0*amplitude+2}px;
                          margin-left:${x*amplitude-1}px;
                          color:yellow;
                          background:none`;
    
    
    elem3.innerText = "-";
    document.body.appendChild(elem);
    document.body.appendChild(elem2);
    
    
    await timer(100); 
    document.body.appendChild(elem3);
    
    
  }
}

load();

