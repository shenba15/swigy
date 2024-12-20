var food=[
        {
            id:1,
            name:"Aasife Biriyani",
            place:"Tenkasi",
            rating:4.1,
            price:250,
            preparing:30,
            type:"Desserts, Indian Chinese ..",
            offer:"20% Offer",
            offers:"yes",
            image:"image/biri.webp",
            vn:"non-veg",

        },

        {
            id:2,
            name:"Chick Blast",
            place:"Tenkasi",
            rating:3.5,
            price:200,
            preparing:20,
            type:"Pastas Chinese ..",
            offer:"10% Offer",
            offers:"yes",
            image:"image/koli.webp",
            vn:"non-veg",

        },

        {
            id:3,
            name:"Tasty Bite",
            place:"Tenkasi",
            rating:3.9,
            price:399,
            preparing:15,
            type:"Patas chinese ..",
            offers:"no",
            offer:"Free Delivery",
            image:"image/bite.webp",
            vn:"veg",

        },

        {
            id:4,
            name:"Carnival Bakery",
            place:"Tenkasi",
            rating:3.9,
            price:420,
            preparing:35,
            type:"Pizza, Fast food ..",
            offer:"40% Offer",
            offers:"yes",
            image:"image/car.webp",
            vn:"veg",

        },

        {
            id:5,
            name:"Topi Vappa Biriyani",
            place:"Tenkasi",
            rating:4,
            price:500,
            preparing:45,
            type:"Biriyani, Chinese, Indian ..",
            offer:"20% Offer",
            offers:"yes",
            image:"image/abu.webp",
            vn:"non-veg",

        },

        {
            id:6,
            name:"Am 2 Pm",
            place:"Tenkasi",
            rating:3.8,
            price:150,
            preparing:20,
            type:"South Indian, Chinese ..",
            offer:"Free Delivery",
            offers:"no",
            image:"image/am2.webp",
            vn:"veg",

        },

        {
            id:7,
            name:"American Bakery",
            place:"Tenkasi",
            rating:4,
            price:299,
            preparing:30,
            type:"Chinese, Burger ..",
            offer:"10% Offer",
            offers:"yes",
            image:"image/am.webp",
            vn:"veg",

        },


        {
            id:8,
            name:"Hotel Buhari",
            place:"Tenkasi",
            rating:4.5,
            price:199,
            preparing:20,
            type:"North Indian, Chinese ..",
            offer:"No Offer",
            offers:"no",
            image:"image/bhu.webp",
            vn:"veg",

        },

        {
            id:9,
            name:"Ibaco",
            place:"Tenkasi",
            rating:4.5,
            price:650,
            preparing:120,
            type:"Ice Cream Cake, Indian ..",
            offer:"15% Offer",
            offers:"yes",
            image:"image/ibaco.webp",
            vn:"veg",

        },

        {
            id:10,
            name:"Kozhi",
            place:"Tenkasi",
            rating:3.6,
            price:250,
            preparing:40,
            type:"Burger, Street Food ..",
            offer:"No Offer",
            offers:"no",
            image:"image/koli.webp",
            vn:"non-veg",

        },

        {
            id:11,
            name:"Krishna Tourist Home",
            place:"Tenkasi",
            rating:3.5,
            price:400,
            preparing:30,
            type:"North Indian, Chinese ..",
            offer:"50% Offer",
            offers:"yes",
            image:"image/krishna.webp",
            vn:"non-veg",

        },

        {
            id:12,
            name:"Kulfi",
            place:"Tenkasi",
            rating:4.9,
            price:100,
            preparing:10,
            type:"Ice Cream, Desserts ..",
            offer:"Free Delivery",
            offers:"no",
            image:"image/kulfi.webp",
            vn:"veg",


        },

        {
            id:13,
            name:"Nila Sweet",
            place:"Tenkasi",
            rating:3.5,
            price:250,
            preparing:15,
            type:"Sweet, Beverages ..",
            offer:"No Offer",
            offers:"no",
            image:"image/nila sweet.webp",
            vn:"veg",


        },

        {
            id:14,
            name:"Nila Biriyani",
            place:"Tenkasi",
            rating:4.1,
            price:750,
            preparing:60,
            type:"North Indian, Spicy ..",
            offer:"40% Offer",
            offers:"yes",
            image:"image/nila.webp",
            vn:"non-veg",


        },

        {
            id:15,
            name:"SV karai Hari Biriyani",
            place:"Tenkasi",
            rating:3.2,
            price:350,
            preparing:30,
            type:"Biriyani, Chetti Nadu ..",
            offer:"10% Offer",
            offers:"yes",
            image:"image/sam.webp",
            vn:"non-veg",


        },

        {
            id:16,
            name:"Kulobjamun",
            place:"Tenkasi",
            rating:4.5,
            price:150,
            preparing:20,
            type:"Sweet, Tamil Nadu ..",
            offer:"5% Offer",
            offers:"yes",
            image:"image/sri.webp",
            vn:"veg",


        },

        {
            id:17,
            name:"Yummy",
            place:"Tenkasi",
            rating:3.5,
            price:200,
            preparing:15,
            type:"Sweet, Ice Cream ..",
            offer:"50% Offer",
            offers:"yes",
            image:"image/yummy.webp",
            vn:"veg",


        }

]




var swiggy_card_row=document.getElementById("swiggy-card-row")


foodfilter(food)

function foodfilter(a){
a.forEach(function(e){


    var swiggy_card_card=document.createElement("div")
    swiggy_card_card.classList.add("swiggy_card_card")
    swiggy_card_row.appendChild(swiggy_card_card)


    var swiggy_card_card_img=document.createElement("div")
    swiggy_card_card_img.classList.add("swiggy_card_card_img")
    swiggy_card_card.appendChild(swiggy_card_card_img)

    var swiggy_image=document.createElement("img")
    swiggy_image.src=e.image
    swiggy_card_card_img.appendChild(swiggy_image)

    var swiggy_card_card_head=document.createElement("div")
    swiggy_card_card_head.classList.add("swiggy_card_card_head")
    swiggy_card_card.appendChild(swiggy_card_card_head)
    swiggy_card_card_head.innerHTML=e.name

    var swiggy_card_card_offer=document.createElement("div")
    swiggy_card_card_offer.classList.add("swiggy_card_card_offer")
    swiggy_card_card.appendChild(swiggy_card_card_offer)
    swiggy_card_card_offer.innerHTML=e.offer

    if(e.offer=="No Offer"){
            swiggy_card_card_offer.remove()

    }

    var swiggy_card_card_type=document.createElement("div")
    swiggy_card_card_type.classList.add("swiggy_card_card_type")
    swiggy_card_card.appendChild(swiggy_card_card_type)

    var swiggy_card_card_icon=document.createElement("i")
    swiggy_card_card_icon.classList.add("fa", "fa-star")
    swiggy_card_card_icon.setAttribute("aria-hidden","true")
    swiggy_card_card_type.appendChild(swiggy_card_card_icon)
    swiggy_card_card_icon.innerHTML=" "+e.rating


    var swiggy_card_card_para=document.createElement("span")
    swiggy_card_card_para.classList.add("swiggy_card_card_type")
    swiggy_card_card_type.appendChild(swiggy_card_card_para)
    swiggy_card_card_para.innerHTML=" "+e.type

    if(e.rating>=4){
        swiggy_card_card_icon.style.color="green"

    }

    else if (e.rating>=3.5){
        swiggy_card_card_icon.style.color="orangered"

    }

    else{
        swiggy_card_card_icon.style.color="orange"

    }

    var swiggy_card_card_price=document.createElement("div")
    swiggy_card_card_price.classList.add("swiggy_card_card_price")
    swiggy_card_card.appendChild(swiggy_card_card_price)
    swiggy_card_card_price.innerHTML="Rs. "+e.price

    var swiggy_card_card_place=document.createElement("div")
    swiggy_card_card_place.classList.add("swiggy_card_card_place")
    swiggy_card_card.appendChild(swiggy_card_card_place)
    swiggy_card_card_place.innerHTML=e.place

 

})
}




   
function rating(){

    var card=document.querySelectorAll(".swiggy_card_card")
console.log(card)

    card.forEach(function(e){
        e.remove()
    })

    var rate=food.filter(function(rate){
       return rate.rating>=4
    })

    foodfilter(rate)


}


   
function veg(){

    var card=document.querySelectorAll(".swiggy_card_card")
    console.log(card)

    card.forEach(function(e){
        e.remove()
    })

    var ve=food.filter(function(nveg){
       return nveg.vn=="veg"
    })

    foodfilter(ve)


}


   
function relevent(){

    var card=document.querySelectorAll(".swiggy_card_card")
    console.log(card)

    card.forEach(function(e){
        e.remove()
    })


    foodfilter(food)


}


   
function fast(){

    var card=document.querySelectorAll(".swiggy_card_card")
    console.log(card)

    card.forEach(function(e){
        e.remove()
    })

    var deli=food.filter(function(fd){
       return fd.preparing<30
    })

    foodfilter(deli)

}


   
function offer(){

    var card=document.querySelectorAll(".swiggy_card_card")
    console.log(card)

    card.forEach(function(e){
        e.remove()
    })

    var off=food.filter(function(a){
       return a.offers=="yes"
    })

    foodfilter(off)


}


   
function above(){

    var card=document.querySelectorAll(".swiggy_card_card")
    console.log(card)

    card.forEach(function(e){
        e.remove()
    })

    var abo=food.filter(function(a){
       return a.price>300 && a.price<=600
    })

    foodfilter(abo)


}

   
function low(){

    var card=document.querySelectorAll(".swiggy_card_card")
    console.log(card)

    card.forEach(function(e){
        e.remove()
    })

    var lo=food.filter(function(a){
       return a.price<300 
    })

    foodfilter(lo)


}


   
function sorts(){

    var card=document.querySelectorAll(".swiggy_card_card")
    console.log(card)

    card.forEach(function(e){
        e.remove()
    })

    var so=food.slice().sort(function(a,b){
       return b.rating-a.rating
    })

    foodfilter(so)


}