
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
					<h2 class="title">${item.title}</h2>
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