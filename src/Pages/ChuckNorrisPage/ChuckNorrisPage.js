import Container from "../../Components/Container/Container"
import { useEffect, useState } from "react";

const ChuckNorrisPage = () => {

    const [joke, setJoke] = useState('Loading...');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        const categoryParam = selectedCategory ? `?category=${selectedCategory}` : '';
        
        fetch('https://api.chucknorris.io/jokes/random' + categoryParam)
            .then(res => res.json())
            .then(data => {
                setJoke(data.value);
            })
    }, [selectedCategory]);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })
    }, []);

    const categorySelectHandler = (event) => setSelectedCategory(event.target.value);
    const randomJokeHandler = () => {
            fetch('https://api.chucknorris.io/jokes/random')
                .then(res => res.json())
                .then(data => {
                    setJoke(data.value);
                })
    }

    const getSearchDataHandler = (event) => setSearchData(event.target.value);


    const jokeFromSearchHandler = (event) => {
        event.preventDefault();
        const searchParam = searchData;
        
        fetch('https://api.chucknorris.io/jokes/search?query=' + searchParam)
        .then(res => res.json())
        .then(data => {
                    const randomIndex = Math.floor(Math.random() * data.result.length)
                    const jokeFromSearch = data.result[randomIndex].value;
                    setJoke(jokeFromSearch);
                })
    }

  return (
    <Container>
        {(categories.length > 0 && joke) ? (
        <div>
            <form>
                <select onChange={categorySelectHandler} defaultValue=''>
                    <option value='' disabled>--- Select category ---</option>
                    {categories.map((category, index) => <option value={category} key={index}>- {category}</option>)}
                </select>
                <div>
                    <label htmlFor="search-word">Search: </label>
                    <input type="text" id="search-word" name="search-word" value={searchData} onChange={getSearchDataHandler}></input>
                    <button onClick={jokeFromSearchHandler}>Search</button>
                </div>
            </form>
            <div>{joke}</div>

            <button onClick={randomJokeHandler}>Get a random Joke</button>
         </div>
        ) : 'Loading...'}
    </Container>
  )
}

export default ChuckNorrisPage