// import React from 'react'      
// in modern React (17+) you don't need to import React for each component anymore

const Card = ({name, id, email}) => {       //we have to put it inside {} since it's a JS syntax
    return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
         <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    </div>
    );
}

export default Card;