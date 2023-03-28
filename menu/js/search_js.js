function onClick(i) {
	for (let i = 0; i < 3; i++){
    var main = document.getElementById("main");
	var a = document.getElementById('t1').value;
	var b = document.getElementById('t2').value;
	var c = document.getElementById('d1').value;
	var d = document.getElementById('d2').value;

	var numb = document.createElement("div");
    numb.className = "numb";
    numb.innerHTML = '<p class="p">№- ' + (Math.floor(Math.random() * 999999) + 100000) + '</p>';

    var saml = document.createElement("div");
    saml.className = "saml";
    saml.innerHTML = '<p class="p">Самолёт</p>';

    var time = document.createElement("div");
    time.className = "time";
    time.innerHTML = '<p class="p">' + (Math.floor(Math.random() * 7) + 1) + ' часа-(ов) полёта' + '</p>';

    var suum = document.createElement("div");
    suum.className = "suum";
    suum.innerHTML = '<p class="p">' + (Math.floor(Math.random() * 70000) + 10000) + 'р.' + '</p>';
  
    var div1 = document.createElement("div");
    var p1 = document.createElement("p");
    p1.className = "p";
    div1.className = "s";
    div1.innerHTML = '<p class="p">' + a + '-' + b + '</p>';
  
    var div2 = document.createElement("div");
    div2.className = "date_s";
    div2.innerHTML = '<p class="p_date">' + c + ':' + d + '</p>';
  
    var div = document.createElement("div");
    div.className = "com";
    var but = document.createElement("button");
    but.className = "knop";
    but.innerHTML = '<p class="p_knop">Бронировать</p>';
    div.appendChild(numb);
    div.appendChild(saml);
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(time);
    div.appendChild(suum);
    div.appendChild(but);

    if (a == '') {

    } else if (b == ''){
    	
    } else if (c == ''){

    } else if (d == ''){

    } else{
    	main.appendChild(div);
    }
    }
}