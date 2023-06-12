import '../citiesPage.css'

function CityItem ({ city, index }) {
const { isCapital, name, population, touristAttractions, location } = city;
const { continent, country } = location;

    const touristAttractionsTitle = () => {
        if (touristAttractions == '') {
            return <h4>{name} has no tourist attractions</h4>;
        } else if (touristAttractions && touristAttractions.length > 1) {
            return <h4>Tourist attractions is: </h4>;
        } else {
            return <h4>Tourist attraction:</h4>
        }
    };

    const cityTitle = () => isCapital ? (<h3>City: {name} (capital)</h3>) : (<h3>City: {name}</h3>);

    return (
        <div key={index} className={`city-item ${isCapital ? 'capital' : ''}`}>

                    {cityTitle()}

                    {isCapital && <p>{name} is the capital of {country}</p>}

                    <p>Population: {population}</p>

                    <h4>City located in:</h4>
                    <ul>
                        <li>Continent: {continent}</li>
                        <li>Country: {country}</li>
                    </ul>
                    
                    {touristAttractionsTitle()}
                    <ul>
                    {touristAttractions.map((attraction) => {
                        return <li>{attraction}</li>
                    })}
                    </ul>
                    
         </div>
    );
}
export default CityItem;