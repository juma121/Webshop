
createCartList();


function createCartList(){

    let output = "";
    let i = 0;
    
    for(let key in localStorage){
        
        output += key + ": " + localStorage.getItem(key);
        output += "<br>";
        /*let tag = document.createElement("p");
        
        let valuetext = document.createTextNode(localStorage.getItem(key));
        let keytext = document.createTextNode(key);
        

        tag.appendChild(valuetext);

        var container = document.getElementById("itemlist");
        container.appendChild(tag);*/
        i++;

        if(i == localStorage.length){
            break;
        }

        
        
        
        
    }

    document.getElementById("itemlist").innerHTML = output;

    

}