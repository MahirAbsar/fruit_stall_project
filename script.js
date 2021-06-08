let hr = document.querySelector(".hr-line")
let showCart = document.querySelector(".cart-items")
hr.style.display="none"
showCart.style.display="none"
let itemList = document.querySelector("#output")

itemList.addEventListener("click",removeItem)
document.querySelector("#product-1").addEventListener("click",addToCart)
document.querySelector("#product-2").addEventListener("click",addToCart)
document.querySelector("#product-3").addEventListener("click",addToCart)
document.querySelector("#product-4").addEventListener("click",addToCart)
document.querySelector("#product-5").addEventListener("click",addToCart)
document.querySelector("#product-6").addEventListener("click",addToCart)




function addToCart(e)
{
    let hr = document.querySelector(".hr-line")
    let showCart = document.querySelector(".cart-items")
    let output = document.querySelector("#output");
    let li = document.createElement("li");
    let value = e.target.previousElementSibling.previousElementSibling.innerText;
    li.appendChild(document.createTextNode(value+""));
    let button = document.createElement("button");
    button.innerText = "Remove";
    button.style.color="white";
    button.style.background="red";
    button.setAttribute("id","removeBtn")
    li.appendChild(button) 
    output.appendChild(li);  
    hr.style.display="block"
    showCart.style.display="block" 
    
    
}

function removeItem(e)
{
    if(e.target.hasAttribute("id"))
    {
        console.log(e.target.parentElement);
        e.target.parentElement.remove()
    }
    let output = document.querySelector("#output")
    if (output.children.length ==0)
    {
        let hr = document.querySelector(".hr-line")
        let showCart = document.querySelector(".cart-items")
        hr.style.display="none"
        showCart.style.display="none"
    }
}

