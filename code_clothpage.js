var item = null, part = null, piece = null;
var product_number = 1;
var cart = document.querySelector('.modal-body');

if (document.getElementById("section") != undefined)
{
    var section = document.getElementById("section");
}

function goToPage(start_cloth,end_cloth) 
{
    // going from the main page to the clothpage adding start and end coordinates to local storage 
    localStorage.setItem('start_cloth',start_cloth);
    localStorage.setItem('end_cloth',end_cloth);
	window.location.assign("index_clothpage.html");
}

window.onload = function pageLoaded()
{
    creatingContentList(localStorage.getItem('start_cloth'),localStorage.getItem('end_cloth'));
    cartCheck();
}

function cartCheck()
{
    for(var i = 0; i < localStorage.length; i++)
    { 
        if(localStorage.key(i)[0] == 'c')
        {
            var key = +localStorage.key(i)[4];
            buyButton(key);
        }
    }
}
function onClick_button(start_cloth,end_cloth)
{
	section.innerHTML = "";
    creatingContentList(start_cloth,end_cloth);
}

function creatingContentList(start_cloth,end_cloth)
{	
    let start = +start_cloth;
    let end = +end_cloth;
	for(var i = start; i < end; i ++)
	{
      
   	 	item = document.createElement("div");
   	 	item.classList.add("col-sm");
   	 	item.classList.add("item-block");
        let item_block = document.querySelector('.item-block');
        $(item).attr("onClick", `creatingContentPage(`+i+`)`);

    	part = document.createElement("img");
    	part.classList.add("p-img");
    	part.src = t_shirt[i].img;
    	item.appendChild(part);

    	part = document.createElement("h3");
    	part.classList.add("p-name");
    	part.innerHTML = t_shirt[i].name;
    	item.appendChild(part);

    	part = document.createElement("div");
    	part.classList.add("p-price");
    	part.innerHTML = t_shirt[i].price;
    	item.appendChild(part);

    	if(section == undefined)
        {
            return false;
        }
        else
        {
            section.appendChild(item);
        }
    }
}

function creatingContentPage(position_item)
{
    section.innerHTML = "";

    item = document.createElement("div");
    item.classList.add("row");
    item.classList.add("item-block-own-page");

    part = document.createElement("div");
    part.classList.add("col-xxl");
    part.classList.add('clothpage-h-block')

    piece = document.createElement("h2");
    piece.innerHTML = "T-shirt Black";
    piece.classList.add("clothpage-h");

    part.appendChild(piece);
    item.appendChild(part);

    part = document.createElement("div");
    part.classList.add("col-md");

    piece = document.createElement("img");
    piece.classList.add("clothpage-img");
    piece.src = t_shirt[position_item].img;

    part.appendChild(piece);
    item.appendChild(part);

    part = document.createElement("div");
    part.classList.add("col-md")

    piece = document.createElement("h3");
    piece.innerHTML = t_shirt[position_item].price;
    piece.classList.add("clothpage-price");

    part.appendChild(piece);

    piece = document.createElement("button");
    piece.classList.add("btn");
    piece.classList.add("btn-dark");
    piece.innerHTML = "BUY";
    $(piece).attr("onClick", `buyButton(`+position_item+`)`);


    part.appendChild(piece);
    item.appendChild(part);
    section.appendChild(item);
    
}

function buyButton(position_item)
{
  
    part = document.createElement("div");
    part.classList.add('col-xxl');
    part.classList.add('cart-block');

    piece = document.createElement("i");
    piece.innerHTML = product_number;
    part.appendChild(piece);
    
    piece = document.createElement("h3");
    piece.innerHTML = t_shirt[position_item].name;
    
    part.appendChild(piece);
    localStorage.setItem(`cart`+[position_item],JSON.stringify(t_shirt[position_item]));
    product_number++;
    cart.children[0].appendChild(part);
}
