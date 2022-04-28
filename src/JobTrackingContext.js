import { createContext, useState } from "react";



export const JobTrackingContext = createContext();

export const JobTrackingProvider = ({ children }) => {

    const [inputValue, setİnputValue] = useState();
    const [value, setValue] = useState([]);

    const [choose, setChoose] = useState('');
    const [chooseValue, setChooseValue] = useState([]);

        

    const [state,setState] = useState([]) 
    const [model,setModel] = useState(false); //deleteAlertCard
    const [edit,setEdit] = useState(false)
    const [editValue,setEditValue] = useState();

//    const handleEdit =() => {setEditValue(
//        ...editValue,
//        {
//          value:inputValue,
//          section:choose,
//          id
//        }
//      )
       
     
//    }

const [data,setData] = useState();



   const handleClick = () => { 
    if(inputValue == '' ){
        alert('boş alan bırakmayın')
    }else{
        setState([
            ...state,
            {...value,text:inputValue,...chooseValue,section:choose,id:Math.random()}
            
          ])
    }
  
  setİnputValue('')
  setChoose('')
}




    const handleChooseChange = (e) => {
        setChoose(e.target.value);
    }

    const handleChange = (e) => {
        setİnputValue(e.target.value);
    }


    

   
    const deleteItem = (itemId) =>{  // item ları silmek için

        const newState = [...state];

        const index = state.findIndex((id=>id.id === itemId))

        newState.splice(index,1)

        setState(newState);
        

    }
   
    const [age, setAge] = useState('');
    const handleChangeee = (event) => {
         setAge(event.target.value);
    }





    return (
        <JobTrackingContext.Provider
            value={{
                inputValue, setİnputValue, handleChange, handleClick, value, handleChooseChange, choose, chooseValue,state,deleteItem,model,setModel,edit,setEdit,handleChangeee,age, setAge
            }}
        >
            {children}
        </JobTrackingContext.Provider>
    )

}