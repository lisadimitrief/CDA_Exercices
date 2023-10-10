import React from 'react';

const Dragon = ({name, type}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>Type: {type}</h3>
        </div>
    );
};

export default Dragon;