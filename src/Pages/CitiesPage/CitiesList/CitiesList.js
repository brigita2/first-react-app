import CityItem from '../CityItem/CityItem'

function CitiesList ({ citiesData }) {

    const oddCitiesClass = citiesData.length % 2 !== 0 ? ' odd-cities' : '';

    return (
        <div className={`cities-wrapper ${oddCitiesClass}`}>
        {citiesData.map((city, index) => {
            return (
            <CityItem city={city} key={index} />
            )
        })};
        </div>
    )
}

export default CitiesList;