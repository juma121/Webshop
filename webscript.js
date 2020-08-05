

function search(value){
    
    if(value == 'lampe'){
        var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("lampe").style.display = "block";

        
    }else if(value == 'sofa'){
        var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("sofa").style.display = "block";

    }else if(value == 'fussball'){
        var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("fussball").style.display = "block";
    }
}

const elektronik = document.getElementById("elektronik");
const haushalt = document.getElementById("haushalt");
const sport = document.getElementById("sport");
const logo = document.getElementById("logo");

var itemscounter = 0;

elektronik.addEventListener("click", () => {
    var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("lampe").style.display = "block";
})

haushalt.addEventListener("click", () => {
    var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("sofa").style.display = "block";
})

sport.addEventListener("click", () => {
    var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("fussball").style.display = "block";
})

logo.addEventListener("click", () => {
    document.location = "file:///C:/Users/jumal/OneDrive/Desktop/Webshop/webshop.html";
})

function addToCart(product, price){
    itemscounter += 1;
    localStorage.setItem(product, price);
    localStorage.setItem("quantaty", itemscounter);
    updateCart();
}

function updateCart(){
    document.getElementById("cartcounter").innerHTML = localStorage.getItem("quantaty");

}

function createCartList(){
    for(let value in localStorage){
        var tag = document.createElement("p");
        var text = document.createTextNode(localStorage.getItem(value));
        tag.appendChild(text);
        var container = document.getElementById("itemlist");
        container.appendChild(tag);
    }
    
}







