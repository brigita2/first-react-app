import { useEffect, useState } from "react";

const DogsImage = ({ breed }) => {

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        if (!breed) {
            return;
        }

        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => res.json())
        .then(data => {
            setImgUrl(data.message);
        })
    }, [breed]);


  return (
    <div>
        {imgUrl && <img src={imgUrl} alt="dog" />}
    </div>
  )
}

export default DogsImage;