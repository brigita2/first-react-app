import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { v4 as uuid } from "uuid";
import DogsImage from "./Components/DogsImage";

const DogsApi = () => {

    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');

    const selectHandler = (breed) => setSelectedBreed(breed);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
            const breedsData = data.message;
            const breedsArray = [];

            for (let mainBreed in breedsData) {
                const subBreeds = breedsData[mainBreed];
                const breedObj = {
                    mainBreed:mainBreed,
                    subBreeds:subBreeds,
                };
                breedsArray.push(breedObj);
            }
            setBreeds(breedsArray);
        })
    }, [])

    const breedsOptionElement = breeds.map(data => {
        const mainBreeds = data.mainBreed;
        const subBreeds = data.subBreeds;

        if(subBreeds.length > 0) {
            const subBreedsOptionElements = subBreeds.map(subBreed => <option key={uuid()} value={`${mainBreeds}/${subBreed}`}>{mainBreeds}({subBreed})</option>)
            
            return subBreedsOptionElements;
        } else {
            return <option key={uuid()} value={mainBreeds}>{mainBreeds}</option>
        }
    })

    if (breeds.length === 0) {
        return '';
    }

  return (
    <Container>
        <div>
            <form>
                <select value={selectedBreed} onChange={(e) => selectHandler(e.target.value)} defaultValue=''>
                <option value='' disabled>--- Select a breed ---</option>
                {breedsOptionElement}
                </select>
            </form>
        </div>
        <DogsImage breed={selectedBreed}/>
    </Container>
  )
}

export default DogsApi;