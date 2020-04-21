var section = document.getElementById("section"),
item = null, part = null;

function goToPage(start_cloth,end_cloth)
{
	window.location.href = "index_clothpage.html";
	sessionStorage.setItem("page_choice_start",start_cloth);
	sessionStorage.setItem("page_choice_end",end_cloth);
}

function onClick(start_cloth,end_cloth)
{
	section.innerHTML = "";
	creatingContent(start_cloth,end_cloth);
}

function creatingContent(start_cloth,end_cloth)
{	
	for(var i = start_cloth; i < end_cloth; i ++)
	{
   	 	item = document.createElement("div");
   	 	item.classList.add("col-sm");
   	 	item.classList.add("item-block");

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

    	item.appendChild(part);
    	section.appendChild(item);
    }
}


	