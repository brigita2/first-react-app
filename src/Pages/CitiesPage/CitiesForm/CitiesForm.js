import { useState } from "react";

function CitiesForm ({ onNewCity }) {


    const [name, setName] = useState('');
    const [population, setPopulation] = useState('');
    const [continent, setContinent] = useState('');
    const [country, setCountry] = useState('');
    const [isCapital, setIsCapital] = useState(false);
    const [touristAttractions, setTouristAttractions] = useState('');

    const createCityHandler = (event) => {
        event.preventDefault();
        
        const newCityItem = {
            name: name,
            population: population,
            location: {
                continent: continent,
                country: country,
            },
            touristAttractions: touristAttractions.split(',').map(attraction => attraction.trim()),
        };

        onNewCity(newCityItem);

        setName('');
        setPopulation('');
        setCountry('');
        setContinent('');
        setTouristAttractions('');
        setIsCapital(false);

    
    }
    

    const newNameHandler = (event) => setName(event.target.value);
    const newPopulationHandler = (event) => setPopulation(event.target.valueAsNumber);
    const newContinentHandler = (event) => setContinent(event.target.value);
    const newCountryHandler = (event) => setCountry(event.target.value);
    const cityCapitalHandler = (event) => setIsCapital(event.target.checked);
    const newTouristAttractionsHandler = (event) => setTouristAttractions(event.target.value);

    return (
        <form onSubmit={createCityHandler} noValidate>
        <div>
            <label htmlFor="city-name">Name:</label> 
            <input type="text" id="city-name" name="city-name" value={name} onChange={newNameHandler} />
        </div>

        <div>
            <label htmlFor="city-population">Population:</label> 
            <input type="number" id="city-population" name="city-population" step="1000" value={population} onChange={newPopulationHandler} />
        </div>

        <div>
            <label htmlFor="city-continent">Continent:</label> 
            <input type="text" id="city-continent" name="city-continent" value={continent} onChange={newContinentHandler} />
        </div>

        <div>
            <label htmlFor="city-country">Country:</label> 
            <input type="text" id="city-country" name="city-country" value={country} onChange={newCountryHandler} />
        </div>

        <div>
            <input type="checkbox" id="city-capital" name="city-capital" checked={isCapital} onChange={cityCapitalHandler} />
            <label htmlFor="city-capital">City is capital</label> 
        </div>

        <div>
            <label htmlFor="city-tourists-attractions">Tourists Attractions:</label> 
            <textarea type="text" id="city-tourists-attractions" name="city-tourists-attractions" value={touristAttractions} onChange={newTouristAttractionsHandler} />
        </div>

        <input type="submit" value="Create City" />
    </form>
    )
}
export default CitiesForm;