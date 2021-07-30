import React from 'react';

const SlotM = (props) => {
    // let x = "😄";
    // let y = "😄";
    // let z = "😄";

    let {x, y, z} = props;

    if((x === y) && (y===z) ){
        return (
            <div className="slot_inner">
                {x} {y} {z}
                <h3>This is Matching.</h3>
            </div>
        );
    }
    else{
        return (
            <div className="slot_inner">
                {x} {y} {z}
                <h3>This is not Matching.</h3>
            </div>
        ); 
    }
}

export default SlotM;