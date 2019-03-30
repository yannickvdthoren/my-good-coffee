function ready(){
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', "js/coffees.json", true);
  req.onload  = function() {
     var jsonResponse = req.response;
     var coffeeList = document.getElementById('coffee-list');

     for( i=0; i< jsonResponse.length; i++){
      // Create the div for the coffee
      var divCoffee = document.createElement("div");
      divCoffee.className += 'coffee';
      coffeeList.appendChild(divCoffee);
      // get the image and put it in background
      var divImg = document.createElement("div");
      divImg.className += 'img';
      divImg.style.backgroundImage = "url(" + jsonResponse[i].img + ")";
      divCoffee.appendChild(divImg);
      //create the details div
      var divDetails = document.createElement("div");
      divDetails.className += 'details';
      divCoffee.appendChild(divDetails);
      //create h3 node
      var name = document.createElement("h3");
      name.className += 'name';
      var coffeeName = document.createTextNode(jsonResponse[i].name);
      name.appendChild(coffeeName); //append text to element
      divDetails.appendChild(name); //append element to div
      //create h4 node
      var address = document.createElement("p");
      address.className += 'address';
      var coffeeAddress = document.createTextNode(jsonResponse[i].address);
      address.appendChild(coffeeAddress);
      divDetails.appendChild(address);
      //create p node
      var opening = document.createElement("p");
      opening.className += 'opening';
      var coffeeOpen = document.createTextNode("Open " + jsonResponse[i].days + " from " + jsonResponse[i].open + " to " + jsonResponse[i].close);
      opening.appendChild(coffeeOpen);
      divDetails.appendChild(opening);
      //create the gmaps button
      var direction = document.createElement("a");
      direction.className += 'direction';
      direction.href = jsonResponse[i].gmaps;
      divCoffee.appendChild(direction);
      //put the content in the <a>
      var iconDirection = document.createElement("i");
      iconDirection.className += 'icon-location-arrow';
      direction.appendChild(iconDirection);

      var directionText = document.createTextNode(" Get direction");
      direction.appendChild(directionText);
     }
  };
  req.send(null)
};

ready();
