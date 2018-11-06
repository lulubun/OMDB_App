 import React from "react";


const ReusableButton = (props) => {
    return(
        <button
            onClick={props.buttonFunction}
            style={{
                backgroundColor: '#FFFB87',
                borderRadius: '4px',
                MozBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                WebkitBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
            }}
        >
            {props.buttonTitle}
        </button>
    )
}

export default ReusableButton