import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Car from './Car';
import MyModal from './MyModal';



function MyCars({title}) {

    const [cars, setCar] = useState([
        { marque: 'Renault', couleur: 'Rouge' },
        { marque: 'Honda', couleur: 'Bleu' },
        { marque: 'Ford', couleur: 'Vert' }
    ]);
    
    return (
        <Wrapper>
            <h2>{title}</h2>
            {cars.map((car) => (
                <>
                <Car marque={car.marque} couleur={car.couleur} />
                <hr/>
                </>
            ))}
            <MyModal name={'Show'} title={'Title'} body={'List of Cars'}/>
            {/* <Car marque="Ford" couleur="vert" />
            <Car marque="Renault" couleur="rouge" />
            <Car marque="Citroen" couleur="bleu" /> */}
        </Wrapper>
    );
}

export default MyCars;