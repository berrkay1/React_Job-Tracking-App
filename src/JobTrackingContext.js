import { createContext, useState } from "react";



export const JobTrackingContext = createContext();

export const JobTrackingProvider = ({ children }) => {

    const [inputValue, setİnputValue] = useState();
    const [value, setValue] = useState();

    const [choose, setChoose] = useState('');
    const [chooseValue,setChooseValue] = useState('');


    const handleChooseChange = (e) => {
      setChoose(e.target.value);
    }
    
    const handleChange = (e) => {
        setİnputValue(e.target.value);
    }

    const handleClick = () => {
        if (inputValue !== '') {
            setValue(inputValue);
            setChooseValue(choose);
            setİnputValue('');
        }

    }




    return (
        <JobTrackingContext.Provider
            value={{
                inputValue, setİnputValue, handleChange, handleClick, value,handleChooseChange,choose,chooseValue
            }}
        >
            {children}
        </JobTrackingContext.Provider>
    )

}