import { useState } from "react";
import Container from "../../Components/Container/Container";
import  "./counterPage.css"

const Counter = () => {
  const number = 5;
  const [ count, setCount ] = useState(number);
  const [grades, setGrades] = useState([1])

  // const plus1Handler = () => setCount(prevState => prevState + 1);
  // const plus2Handler = () => setCount(prevState => prevState + 2);
  // const plus5Handler = () => setCount(prevState => prevState + 5);
  // const minus5Handler = () => setCount(prevState => prevState - 5);
  // const minus2Handler = () => setCount(prevState => prevState - 2);
  // const minus1Handler = () => setCount(prevState => prevState - 1);
  // !!!!apačioje esanti funkcija, atlieką viską kas viršuje

  const countButtonHandler = num => setCount(prevState => prevState + num);

  const reset = () => setCount(number);

  const inputHandler = (event) => {
    setCount(Number(event.target.value))
  }

  const getDisplayClass = (item) => {
    let displayClassName = ''; 
    if (item < 5) {
      displayClassName = 'red';
    } else {
      displayClassName = 'green';
    }
    return displayClassName;
  }
  
  const addGradeHandler = () => {
    setGrades(prevState => {
      const newState = [count, ...prevState];
      // newState.unshift(count);
      return newState;
    })
  }

  const deleteGradesHandler = (index) => {
    setGrades(prevState => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
      // return prevState.toSpliced(index, 1)
      // toSplice nemodifikuoja senojo masyvo
    })
  }

  return (
    <Container>
      <div className="grades-form">
            <h3 className={getDisplayClass(count)}>{count}</h3>

            <input value={count} type="number" max="10" min="1" onChange={inputHandler}/>
            
            {/* kai rašome funkcijos tik pavadinimą,be skliaustelių tai funkcija suveikia tik tada kai paspaudžiama, o ne iškart kai užkraunamas puslapis.  */}
            {/* iškviečiant funkcija naudojama call back funkcija tam kad suveiktų kiekvieną kartą paspaudus mygtuką, kitu atveju suveiks tik viena kartą paspaudus. */}
            <button onClick={() => countButtonHandler(-1)} disabled={count <= 1}>-1</button>  
            <button onClick={() => countButtonHandler(-2)} disabled={count <= 2}>-2</button>
            <button onClick={() => countButtonHandler(-5)} disabled={count <= 5}>-5</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => countButtonHandler(5)} disabled={count >= 6}>+5</button> 
            <button onClick={() => countButtonHandler(2)} disabled={count >= 9}>+2</button>       
            <button onClick={() => countButtonHandler(1)} disabled={count >= 10}>+1</button>

            <button onClick={addGradeHandler}>Add Grade</button>
        </div>
        <div className="grades-list-wrapper">
          <h4>{grades && grades.length > 0 ? 'Grades:' : 'No grades'}</h4>
            {grades && grades.length > 0 && (
                <ul>{grades && grades.map((grade, index) => 
                  <li className={getDisplayClass(grade)} key={index}>
                    {grade}
                        <button onClick={() => deleteGradesHandler(index)}>x</button>
                  </li>)}
                </ul>
              )}
        </div>
    </Container>
    
    )
}

export default Counter;