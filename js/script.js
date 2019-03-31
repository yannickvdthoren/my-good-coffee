window.scrollTo(0,1)
// Create the view
function ready(){
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', 'js/coffees.json', true);
  req.onload  = function() {
     var json = req.response;
     var brussels = json.brussels;
     var ghent = json.ghent;

     for(var i = 0; i < brussels.length; i++){
      createList(brussels[i])
     };
     for(var j = 0; j < ghent.length; j++){
      createList(ghent[j])
     };

     // translate the cards on x axis
    var coffeeCards = document.getElementsByClassName('coffee');
    var x = 20;
    for (var k = 0; k < coffeeCards.length; k++) {
      coffeeCards[k].style.transform = 'translate('+ x + 'px, 0px)';
      x = x + coffeeCards[k].offsetWidth + 20;
    };
  };
  req.send(null)
};

ready();

function createList(city){
      var coffeeList = document.getElementById('coffee-list');
        // Create the div for the coffee
      var divCoffee = document.createElement('div');
      divCoffee.className += 'coffee ';
      divCoffee.className += city.city;
      coffeeList.appendChild(divCoffee);
      // get the image and put it in background
      var divImg = document.createElement('div');
      divImg.className += 'img';
      divImg.style.backgroundImage = 'url(' + city.img + ')';
      divCoffee.appendChild(divImg);
      //create the details div
      var divDetails = document.createElement('div');
      divDetails.className += 'details';
      divCoffee.appendChild(divDetails);
      //create h3 node
      var name = document.createElement('h3');
      name.className += 'name';
      var coffeeName = document.createTextNode(city.name);
      name.appendChild(coffeeName); //append text to element
      divDetails.appendChild(name); //append element to div
      //create h4 node
      var address = document.createElement('p');
      address.className += 'address';
      var coffeeAddress = document.createTextNode(city.address);
      address.appendChild(coffeeAddress);
      divDetails.appendChild(address);
      //create p node
      var opening = document.createElement('p');
      opening.className += 'opening';
      var coffeeOpen = document.createTextNode('Open ' + city.days + ' from ' + city.open + ' to ' + city.close);
      opening.appendChild(coffeeOpen);
      divDetails.appendChild(opening);
      //create the gmaps button
      var direction = document.createElement('a');
      direction.className += 'direction';
      direction.href = city.gmaps;
      divCoffee.appendChild(direction);
      //put the content in the <a>
      var iconDirection = document.createElement('i');
      iconDirection.className += 'icon-location-arrow';
      direction.appendChild(iconDirection);

      var directionText = document.createTextNode(' Get direction');
      direction.appendChild(directionText);
};

// filter the results
var citiesLink = document.getElementsByClassName('menu-link-city');

for (var i = 0; i < citiesLink.length; i++) {
  citiesLink[i].addEventListener('click',
    function(){
      var citySelected = this.textContent.toLowerCase();
      var ghent = document.getElementsByClassName('ghent');
      var brussels = document.getElementsByClassName('brussels');
      var x = 20;
      if (citySelected == 'brussels'){
        for (var b = 0; b < brussels.length; b++){
          brussels[b].style.display = 'block';
          document.getElementById('brussels').style.display = 'block';
        }
        for (var a = 0; a < ghent.length; a++){
          ghent[a].style.display = 'none';
          document.getElementById('ghent').style.display = 'none';
        }
      }
      else if (citySelected == 'ghent'){
        for (var b = 0; b < brussels.length; b++){
          brussels[b].style.display = 'none';
          document.getElementById('brussels').style.display = 'none';
        }
        for (var a = 0; a < ghent.length; a++){
          ghent[a].style.display = 'block';
          document.getElementById('ghent').style.display = 'block';
          ghent[a].style.transform = 'translate('+ x + 'px, 0px)';
          x = x + ghent[a].offsetWidth + 20;
        }
      }
  },
  false);
};
