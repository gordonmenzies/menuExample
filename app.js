const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/menu-images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/menu-images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/menu-images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/menu-images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/menu-images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/menu-images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/menu-images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/menu-images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/menu-images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/menu-images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

// method to display a menu item when image is selected on menu.html

function displayMenu(id) {
    console.log("interaction")
    const chosenItem = menu[id - 1] 
    const htmlinfo = 

   `<div class="item-info">
      <h4>${chosenItem.title}</h4>
      <img src=${chosenItem.img} alt=${chosenItem.title}/>
      <h4 class="price">$${chosenItem.price}</h4>
      <p class="item-text"> ${chosenItem.desc}</p>
    </div>`

    document.getElementById("displayedInformation").innerHTML = htmlinfo
    console.log("SECOND" + document.getElementsByClassName("displayedInformation").innerHTML)


}

// method to confirm booking when booking is placed.

  const bookingForm = document.getElementById("tableBookingForm")

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const fd = new FormData(bookingForm)
    const obj = Object.fromEntries(fd);

    const json = JSON.stringify(obj)
    localStorage.setItem('form', json)
  
    checkStored = localStorage.getItem('form')
    console.log("checkStored: " + checkStored)

    const checkStoredObj = JSON.parse(checkStored)

    const name = checkStoredObj.name
    const numberOfPeople = checkStoredObj.numberOfPeople
    const telephone = checkStoredObj.telephone
    const date = checkStoredObj.date
    const time = checkStoredObj.time

    alert(`you have submitted a booking under the name of ${name} \n
    with the telephone submission of ${telephone} \n
    for ${numberOfPeople} \n
    on the ${date} \n
    at ${time} `)

    })






