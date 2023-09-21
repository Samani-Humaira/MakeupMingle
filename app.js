let url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=";
let btn = document.querySelector("button");

// Event that will be perform when the button is clicked
btn.addEventListener("click", async () =>{
    let name = document.querySelector("input").value;
    let product= await proinfo(name);
   show(product);
});

// function that will iterate over the element and print only the revelant data
function show(product){
let div=document.querySelector("#app");
    let ul = document.querySelector("ul");
    ul.innerText = " ";
    for(pp of product){
       div.style.padding="2rem";
        let li= document.createElement("li");
        li.classList.add("alllist");
        li.innerHTML=`<br> Name:${pp.name}  <br> <br> Description: ${pp.description} <br><br> Created_at:${pp.created_at} <br><br> Updated_at:${pp.updated_at} <br><br> Product_link: ${pp.product_link} }<br><br>  Website_link ${pp.website_link}`;
         let img=document.createElement("img");
        img.setAttribute("src",pp.image_link);
        li.insertAdjacentElement("afterbegin",img);
        img.classList.add("images");
    }
}

// Accessing the data from API
async function proinfo(name){
    try{
    let res = await axios.get(url + name);
    return res.data;
    }
    catch(err){
        return err;
    }
}
