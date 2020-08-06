

function search(value){
    
    let lamperegex = /lampe/i;
    let sofaregex = /sofa/i;
    let fußballregex = /fußball/i;
    if(lamperegex.test(value)){
        var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("lampe").style.display = "block";

        
    }else if(sofaregex.test(value)){
        var x = document.getElementsByClassName("item");
        
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        document.getElementById("sofa").style.display = "block";

    }else if(fußballregex.test(value)){
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
const carticon = document.getElementById("carticon");

let itemscounter = 0;

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

carticon.addEventListener("click", () => {
    document.location = "file:///C:/Users/jumal/OneDrive/Desktop/Webshop/shoppingcart.html";
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









