const loadCountry = () => {
    fetch('https://restcountries.com/v2/all')
    .then (res => res.json())
    .then (data => displayCounrtry(data))
}
loadCountry()

const displayCounrtry = countries => { 
    const allCountryId = document.getElementById("allCountry")
    for(const country of countries){
        // console.log(country.name)
        const div = document.createElement("div");
        div.classList.add('country')

        div.innerHTML = `
        <img width="200px" src="${country.flag}">
        <h2> Name: ${country.name}</h2>
        <p> Capital: ${country.capital} </p>
        <button onclick="loadCountryByName('${country.name}')
        ">Detail</button>
        
        `
        allCountryId.appendChild(div);

    }
    

    
}
const loadCountryByName = name =>{
    const url = `https://restcountries.com/v2/name/${name}`;
    console.log(url)
}