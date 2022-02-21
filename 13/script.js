let arr = [ "", "img/1.png", "img/2.png", "img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png" ]
let arr2 = [ "", "img/1.png", "img/2.png", "img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png" ]

let arrIndex = arr.length;
let arr2Index = arr2.length;


//  setTimeout(qur, 5000);

function qur(){

    let table = document.getElementById("tbl");

    let  ekran = ""
    let y =0
    let x = 0

   
     for(let i=1; i <= 4; i++){ 
        ekran += `<tr>`
        for(let j=1; j <= 2; j++){
            let a = 0
           
        // y+=1
        // x+=1

        y = Math.floor(Math.random() * arrIndex + 1);
        x = Math.floor(Math.random() * arrIndex + 1);

        y = y<8 ? y : y - 1; 
        
            ekran +=`<td id="${i} ${j}" )"> <img src="img/${y}.png">  </td>`
            ekran +=`<td id="${i} ${j}" )"> <img src="img/${x}.png">  </td>`
            
        arr.splice(x,1)
        arr2.splice(y,1)
        }
        ekran += `</tr>`
     }
    
     table.innerHTML = ekran;
}

qur()




$("img").click(function(){
    $(this).attr("src", "img/9.png");
  });