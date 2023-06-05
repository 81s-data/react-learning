import React, { useEffect, useState } from 'react';

const Calculatrice = () => {

    const [resultat, setResultat] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [isAddition, setIsAddition] = useState(null);
    const [disabledButtons, setDisabledButtons] = useState(true);

    const addition = (num1, num2) => {
        setIsAddition(true);
        setResultat(parseInt(num1) + parseInt(num2));
    }

    const multiplication = (num1, num2) => {
        setIsAddition(false);
        setResultat(num1 * num2);
    }

    const handleValue1 = (event) => {
        if (event.target.value) {
            setDisabledButtons(false);
        } else {
            setDisabledButtons(true);
        }
        setValue1(event.target.value);
    };

    const handleValue2 = (event) => {
        if (event.target.value) {
            setDisabledButtons(false);
        } else {
            setDisabledButtons(true);
        }
        setValue2(event.target.value);
    };

    const reset = () => {
        setResultat(0);
        setValue1(0);
        document.getElementById("num1").value = '';
        setValue2(0);
        document.getElementById("num2").value = '';
        setIsAddition(null);
        setDisabledButtons(true);
    }

    return <div className='container'>
        <h1>Calculatrice</h1>
        <p>{isAddition === null ? 'Entrez vos valeurs' : 
            isAddition === false ? `Multiplication ${value1} * ${value2} : ${resultat}` : 
            `Addition ${value1} + ${value2} : ${resultat}`}</p>
        <p>Nombre 1 : <input id='num1' type='number' onChange={handleValue1} /></p>
        <p>Nombre 2 : <input id='num2' type='number' onChange={handleValue2} /></p>
        <div>
            <button onClick={() => addition(value1, value2)} disabled={disabledButtons} > Addition </button>
            <button onClick={() => multiplication(value1, value2)} disabled={disabledButtons} > Multiplication </button>
            <button onClick={() => reset(value1, value2)} > Reset </button>
        </div>
        
    </div>
};
export default Calculatrice;