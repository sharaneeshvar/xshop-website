const ul=document.getElementById('prodcardcart1');
function addcard(image,title,price){
    const cardpro=document.createElement('li');
cardpro.classList.add('card1')
cardpro.innerHTML=`
        <img src= ${image} alt="">
            <h5>${title}</h5>
        <div class="det1">
            <h4>₹${price}</h4>
            <button class="btn">Buy</button>
        </div>`
    ul.append(cardpro)
}


function fetchdata(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                json.map((val)=>{
                    addcard(val.image,val.title,val.price)
                })
            })
}
fetchdata()

