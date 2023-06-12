import { useState } from "react";
import Container from "../../Components/Container/Container";

import CitiesForm from "../CitiesPage/CitiesForm/CitiesForm";
import CitiesList from "./CitiesList/CitiesList";

function CitiesPage() {
    let citiesList = [
        {
            name: 'Paris',
            population: 2229621,
            location: {
                continent: 'Europe',
                country: 'France',
                },
            touristAttractions: ['Eiffel Tower', 'Musée du Louvre', 'Cathédrale Notre-Dame de Paris' ],
            isCapital: true,
         },
         {
            name: 'Marseille',
            population: 855393,
            location: {
                continent: 'Europe',
                country: 'France',
                },
            touristAttractions: ['Basilique Notre-Dame de la Garde'],
            isCapital: false,
         },
         {
            name: 'Bordeaux',
            population: 605393,
            location: {
                continent: 'Europe',
                country: 'France',
                },
            touristAttractions: ['Place de la Bourse', 'The water mirror', 'St. Andre Cathedral'],
            isCapital: false,
         },
         {
            name: 'Vilnius',
            population: 1005393,
            location: {
                continent: 'Europe',
                country: 'Lithuania',
                },
            touristAttractions: ['Gedimino pilis', 'baltic sea', 'Dolphinarium'],
            isCapital: true,
         },
         {
            name: 'Kaunas',
            population: 905393,
            location: {
                continent: 'Europe',
                country: 'Lithuania',
                },
            touristAttractions: ['Kauno pilis', 'Raudondvario dvaras'],
            isCapital: true,
         },
         {
            name: 'Roma',
            population: 855393,
            location: {
                continent: 'Europe',
                country: 'Lithuania',
                },
            touristAttractions: ['Kauno pilis'],
            isCapital: false,
         },
         {
            name: 'Siauliai',
            population:705393,
            location: {
                continent: 'Europe',
                country: 'Lithuania',
                },
            touristAttractions: [],
            isCapital: false,
         },
];
    const [cities, setCities] = useState(citiesList);

    const citiesUpdateHandler = (city) => {
           setCities(prevState => [city, ...prevState]);
    };

    return(
        <Container>
            <CitiesForm onNewCity={citiesUpdateHandler} />
            <CitiesList citiesData={cities}/>
        </Container>
    )
}
export default CitiesPage;