var item = (name, description) => {
  return { name, description }
}

const menu = () => {
  var menuu = document.createElement('div');
  var chicken = item("Chicken Fajitas", "Delicious chicken fajitas served with grilled onions and peppers, sour cream, salsa, and guacamole.");
  var beef = item("Beef Fajitas", "Carne asada beef served with grilled onions and peppers, sour cream, and guacamole.");
  var shrimp = item("Shrimp Fajitas", "Jumbo shirimp fajitas served with grilled onions and peppers, sour cream, and guacamole.");
  var flaming = item("Hellfire Fajitas", "Beef, shrimp, or chicken fajitas dredged in Bub's Blazing Dry Rub, coated in chipotle sauce, served with grilled jalapeno, bellpepper, and onion, and spicy guacamole. NOT FOR THE FAINT OF HEART!");
  var fajitaArray = [chicken, beef, shrimp, flaming];
  for (var counter = 0; counter < fajitaArray.length; counter++ ) {
    var dish = document.createElement('h2');
    dish.textContent = fajitaArray[counter].name;
    menuu.appendChild(dish);
    var info = document.createElement('p');
    info.textContent = fajitaArray[counter].description;
    menuu.appendChild(info);
  };
  return menuu;
}

export { menu };
