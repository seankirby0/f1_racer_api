// console.log('TEST')

// Create a getData function
const getData = async (searchParam) => {
    const searchURL = `http://ergast.com/api/f1/2020/1/${seachParam}.json`
    let response = await fetch(searchURL);
    return response.json();
}

// Create a loadData function
const loadData = async (e) => {
    e.preventDefault();

    const raceSearch = e.target[0].value;

    const raceData = await getData(raceSearch);
}

const createRacerHTML = {racer} =>{
    const racePosition = racer.position;
    const raceFamilyName = racer.familyname;
    const raceConstructorId = racer.constructorid;

    console.log(racePosition, raceFamilyName, raceConstructorId);
    let raceDisplay = document.getElementById('racerDisplay')

    // Display data in HTML
    let htmlPosition = document('h3');
    htmlPosition.innerHTML = 'Position: ' + racePosition[0];
    raceDisplay.insertAdjacentElement('beforeend', htmlPosition);
    
    let htmlFamilyName = document('h3');
    htmlFamilyName.innerHTML = 'FamilyName: ' + raceFamilyName[0];
    raceDisplay.insertAdjacentElement('beforeend', htmlFamilyName);
    
    let htmlConstructor = document('h3');
    htmlConstructor.innerHTML = 'Constructor: ' + raceConstructor[0];
    raceDisplay.insertAdjacentElement('beforeend', htmlConstructor);
    }

    

// Connect form to loadData function
const form = document.getElementById('raceDataform')
form.addEventListener('submit', loadData);