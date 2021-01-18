import React from 'react';


const Scroll = ( props ) => {
    return (
        <div style={{overflowY: 'hidden' , height: '700px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;