async function fetchData() {
  SearchBtn.disabled = true;
  SearchBtn.innerText = "Searching...";
  document.getElementById("info").style.display = "none";

  const apiKey = "roNztNo5M24GSp7b1OxVpw==G0apCapRpPuDqhQZ";
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

  const bikeBrand = document.getElementById("bikeBrand").value.toLowerCase();
  const apiURL = `https://api.api-ninjas.com/v1/motorcycles?make=${bikeBrand}`;

  try {
    const response = await fetch(apiURL, options);
    if (!response.ok){
      throw new Error("Could not fetch data");
    }

    window.data = await response.json();

    SearchBtn.disabled = false;
    SearchBtn.innerText = "Search";
    
    if (data.length === 0) {
      alert("No motorcycles found for that brand.");
      return;
    }
console.log(data)
    const select = document.getElementById("select1");
    select.innerHTML = '<option value="">Select Model</option>';


    for (let i = 0; i < data.length; i++) {
      select.innerHTML += `<option value="${i}">${data[i].model}</option>`;
    }
  }
  catch (error){
    console.error(error);
    alert("Error fetching data");
    SearchBtn.disabled = false;
    SearchBtn.innerText = "Search";
  }  
};

function bikeModel(a) { 
  // console.log(a)
  document.getElementById("infoTitle").innerHTML = "Specifications about " + data[a].make + " " + data[a].model 
  document.getElementById("displacement").innerHTML = data[a].displacement 
  document.getElementById("clutch").innerHTML = data[a].clutch 
  document.getElementById("cooling").innerHTML = data[a].cooling 
  document.getElementById("dry_weight").innerHTML = data[a].dry_weight 
  document.getElementById("engine").innerHTML = data[a].engine 
  document.getElementById("power").innerHTML = data[a].power 
  document.getElementById("torque").innerHTML = data[a].torque 
  document.getElementById("valves_per_cylinder").innerHTML = data[a].valves_per_cylinder 
  document.getElementById("fuel_capacity").innerHTML = data[a].fuel_capacity 
  document.getElementById("fuel_control").innerHTML = data[a].fuel_control 
  document.getElementById("fuel_system").innerHTML = data[a].fuel_system  

  document.getElementById("info").style.display = "block";
};