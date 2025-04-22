async function fetchData(){
  SearchBtn.disabled = true;
  SearchBtn.innerText = "Searching...";

  const apiKey = "roNztNo5M24GSp7b1OxVpw==G0apCapRpPuDqhQZ"; /*API NInja */
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };
  const bikeBrand = document.getElementById("bikeBrand").value.toLowerCase()
  const apiURL = `https://api.api-ninjas.com/v1/motorcycles?make=${bikeBrand}`;
  try {
    
    const response = await fetch(apiURL, options);
    if(!response.ok){
      throw new Error("Couldnot fetch data")
    }
    window.data = await response.json();

    SearchBtn.disabled = false;
    SearchBtn.innerText = "Search";

    for (var i = 0; i < data.length; i++) {
      document.getElementById("select1").innerHTML += `
      <option value="${i}">${data[i].model}</option>
      `;
    }
  }
  catch (error) {
    console.error(error);
  }  
};


function bikeModel(a) {
  document.getElementById("select2").innerHTML += `
  <option value="${a}">${data[a].year}</option>
  `;
}
function bikeYear(a) {
  document.getElementById("info").style.display = "block";

  document.getElementById("infoTitle").innerHTML = "Information of " + data[a].make + " " + data[a].model 

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
}




// function bikeModel(a) {
  //     // document.getElementById("select2").innerHTML += `
  //     // <option value="${a}">${data[a].year}</option>
//     // `;
//     console.log(a);
//     console.log(data[a].frame);
//   }
    // document.getElementById("img1").src = product[a].image
    // document.getElementById("details").innerHTML = "PKR " + data[a].frame
    // document.getElementById("desc1").innerHTML = product[a].description
    // document.getElementById("brand1").innerHTML = product[a].brand    
