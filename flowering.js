
let http = new XMLHttpRequest();

http.open('get', 'flowering.json', true);

http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		let flowering = JSON.parse(this.responseText);

		let output = "";

		for(let item of flowering){
			output += `
				<div class="flowers">
                    <div class="flower-images">
					<img src="${item.image}" alt="${item.image}">
                    </div>
					<h2 class="title_plant">${item.title}</h2>
                    <hr>
					<div class="price">
						<p>${item.price}<p>
					</div>
					<a href="${item.link}"><button> View Item &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-eye"></i> </button></a>
				</div>
			`;
		}
		document.querySelector(".products").innerHTML = output;
	}
} 
//search bar code begins here
const SearchPlant=()=>
{
	let filter= document.getElementById("myInput").value.toUpperCase();
	let ul=document.getElementById("myUL");
	let card=ul.getElementsByClassName("flowers")
	for(var i=0;i<card.length;i++)
	{
		let a=card[i].getElementsByTagName('h2')[0];
		let textValue=a.textContent || a.innerHTML
		if(textValue.toUpperCase().indexOf(filter)>-1)
		{
			card[i].style.display='';
		}
		else
		{
			card[i].style.display='none';	
		}
	}
}
//filter code starts
const filterout1=()=>
{
	let ul=document.getElementById("myUL");
	let card=ul.getElementsByClassName("flowers")
	for(var i=0;i<card.length;i++)
	{
		let a=card[i].getElementsByTagName('p')[0];
		let textValue=a.textContent || a.innerHTML
		if(textValue<"₹ 200")
		{
			card[i].style.display='';
		}
		else
		{
			card[i].style.display='none';	
		}
	}
}
const filterout2=()=>
{
	let ul=document.getElementById("myUL");
	let card=ul.getElementsByClassName("flowers")
	for(var i=0;i<card.length;i++)
	{
		let a=card[i].getElementsByTagName('p')[0];
		let textValue=a.textContent || a.innerHTML
		if(textValue<"₹ 250")
		{
			card[i].style.display='';
		}
		else
		{
			card[i].style.display='none';	
		}
	}
}