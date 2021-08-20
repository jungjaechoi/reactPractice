import React from 'react';

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) => {
    return(
        <div>
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}/>
            <br/>
            <div style = {{color:'red'}}>{errorMessage}</div>
        </div>
    );
};
//MovieForm에 있던 애들을 component로 빼내서 inputField만 수정하면
//모든 설문칸이 수정가능하다.

export default InputField