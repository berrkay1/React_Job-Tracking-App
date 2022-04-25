import { createContext } from "react";



export const JobTrackingContext = createContext();

export const JobTrackingProvider = ({children}) => {

    return(
        <JobTrackingContext.Provider
            value={{
                name:'berkay'
            }}
        >
            {children}
        </JobTrackingContext.Provider>
    )

}