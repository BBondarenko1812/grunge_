var products = {
  1 : {
    name : "Пицца с ягненком",
    desc : "Средиземноморский ягненок, томаты, лук, орегано, фета, йогуртный соус",
    img : "italent/pizza/pizza_2.png",
    price : 98
  },
  2 : {
    name : "Карбонара",
    desc : "Сливочный соус, моцарелла, шампиньоны, ветчина, лук, красный,бекон и соус альфрэдо",
    img : "italent/pizza/pizza_1.png",
    price : 92
  },
  3 : {
    name : "Пепперони",
    desc : "Чеснок, моцарелла, лук,говядина, пепперони, томатная основа, болгарский перец",
    img : "italent/pizza/pizza_3png.png",
    price : 105
  },
   4 : {
    name : "Чесночная креветка",
    desc : "Жаренный стручковый перец, томаты, фета, чеснок, креветки, моцарелла",
    img : "italent/pizza/pizza_4.png",
    price : 132
  },
  5 : {
    name : "Каприччоза",
    desc : "Шинка, грибы, оливки, моцарелла, томатная основа, сыр пармезан, говядина",
    img : "italent/pizza/pizza_5.png",
    price : 112
  },
  6 : {
    name : "Индийская пицца",
    desc : "Лук, моцарелла, перец чилли, чеснок, индийский соус, томаты, кориандр",
    img : "italent/pizza/pizza_6.png",
    price : 112
  }
};
var container = document.getElementById("cart-products"),
      item = null, part = null;

  for (let i in products) {
    if(i % 3)
    {
      part = document.createElement("div");
      part.classList.add("w-100");
    }
    item = document.createElement("div");
    item.classList.add("col-sm");
    item.classList.add("p-item");


    // Product Image
    part = document.createElement("img");
    part.src = products[i]['img'];
    part.classList.add("p-img");
    item.appendChild(part);

    // Product Name
    part = document.createElement("h3");
    part.innerHTML = products[i]['name'];
    part.classList.add("ml-1");
    part.classList.add("p-name");
    item.appendChild(part);

    // Product Price
    part = document.createElement("div");
    part.classList.add("ml-1");
    part.innerHTML = products[i]['price'] + " грн.";
    part.classList.add("p-price");
    item.appendChild(part);

    // Product Description
    part = document.createElement("p");
    part.innerHTML = products[i]['desc'];
    part.classList.add("ml-1");
    part.classList.add("p-desc");
    item.appendChild(part);

    // Add to cart
    part = document.createElement("input");
    part.type = "image";
    part.src ="";
    part.classList.add("p-add");
    part.classList.add("ml-1");
    part.onclick = cart.add;
    part.dataset.id = i;
    item.appendChild(part);

    container.appendChild(item);
  }