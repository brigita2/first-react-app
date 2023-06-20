import { useState } from "react";
import Container from "../../Components/Container/Container";
import AiForm from "./Components/AiForm";
import AiOutput from "./Components/AiOutput";
import axios from "axios";

const AiPage = () => {
    const [personData, setPersonData] = useState(null);

    const nameFormHandler = async (name) => {

      const ageRes = await axios.get('https://api.agify.io?name=' + name);
      const age = ageRes.data.age;

      const genderRes = await axios.get('https://api.genderize.io?name=' + name);
      const gender = genderRes.data.gender;

      const nationalityRes = await axios.get('https://api.nationalize.io?name=' + name);
      const nationality = nationalityRes.data.country[0].country_id;

      setPersonData({ name, age, gender, nationality });
    }

    // const nameFormHandler = async (name) => {

    //   fetch('https://api.agify.io?name=' + name)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPersonData(prevState => {
    //       return {...prevState, age: data.age};
    //     })
    //   })

    //   fetch('https://api.genderize.io?name=' + name)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPersonData(prevState => {
    //       return {...prevState, gender: data.gender};
    //     })
    //   })

    //   fetch('https://api.nationalize.io?name=' + name)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPersonData(prevState => {
    //       return {...prevState, nationality: data.country[0].country_id};
    //     })
    //   })
    // }

    

  return (
    <Container>
        <AiForm onNameSubmit={nameFormHandler}/>
        <AiOutput data={personData}/>
    </Container>
  )
}

export default AiPage;