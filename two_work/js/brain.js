let col = document.querySelectorAll(".col");
let users = document.querySelectorAll(".block__user");

let g = 1;
let a = "X"; 

let combs = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

start(col);

function start(colH){
	
	col.forEach(function(i){
    
    i.addEventListener("click", function(){
        console.log(i);
            if(i.innerHTML == ""){
                i.innerHTML = `${a}`;
                
                for(let e of users){
                    e.classList.remove("active");
                }
                users[g].classList.add("active");

                if(a == "O"){
                    a = "X";
                    g = 1;
                }
                else{
					a = "O"; 
                    g = 0;
                }
                
                
				
				if(win(col) == true){
					alert(i.innerHTML);
                    
                    for(let e of users){
                    e.classList.remove("active");
                }
                    
                    users[g].classList.add("green");
                    
                    setTimeout(function(){
                        location.reload();
                    }, 2000 ); 
                    
				}
                else if(number == 9){
                    alert("ничья");
                    console.log(number);
                    
                   setTimeout(function(){
                        location.reload();
                    }, 2000 );
                }
        	}
        
    	})
    
	});
	
}

let number = 0;

function win(col){
	
number = number + 1;

	for(comb of combs){
		if(col[comb[0]].innerHTML == col[comb[1]].innerHTML &&
		   col[comb[1]].innerHTML == col[comb[2]].innerHTML &&
		   col[comb[0]].innerHTML != '' 
		  ) {
			return true;
		}
		
	}
		return false;
	
}



