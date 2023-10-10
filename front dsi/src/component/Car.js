import React from 'react';

function Car({marque, couleur}) {
    return (
        <div>
            <h3>Marque : {marque}</h3>
            <h3>Couleur : {couleur}</h3>
        </div>
    );
}

export default Car;