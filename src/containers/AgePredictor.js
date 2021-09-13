import React, {useState, useEffect} from 'react';

function AgePredictor(){
  const [name, setName] = useState('michael');
  const [age, setAge] = useState(0);
  useEffect(() => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(res => res.json())
      .then(data =>   setAge(data))
  },[])

  console.log(age)
  return(
    <h1>Pagina 2</h1>
  );
}

export default AgePredictor;