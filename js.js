let form = document.getElementById('form');

form.onsubmit = function(e) {
  e.preventDefault()

  let number = document.getElementById('number');
  let value = number.value;

  let meters = value + " meters = "
  let feet = value + " feet = "
  let meters_feet = value * 3.28084
  let feet_meters = value * 0.3048

  document.getElementById("meter-feet").textContent = meters + meters_feet.toFixed(3) + " feet" + " | " + feet + feet_meters.toFixed(3) + " meters"

  let gallons = value + " gallons = "
  let liters = value + " liters = "
  let gal_lit = value * 3.785412
  let lit_gal = value * 0.264172

  document.getElementById("liters-gallons").textContent = liters + lit_gal.toFixed(3) + " gallons" + " | " + gallons + gal_lit.toFixed(3) + " litters"

  let kg = value + " kilos = "
  let pound = value + " pounds = "
  let kg_pound = value * 2.20462
  let pound_kg = value * 0.453592

  document.getElementById("kg-pound").textContent = kg + kg_pound.toFixed(3) + " pounds" + " | " +
    pound + pound_kg.toFixed(3) + " kilos"
};
