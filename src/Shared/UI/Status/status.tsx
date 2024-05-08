import React, { useState } from "react";
import './style.scss'

export function giveClassStatus (status: string, twoClass?: string) {
    if (status === 'Not started'){
        if(twoClass){
            return `${twoClass} Not`
        } else{
            return 'Not';
        }
    } else if(status === 'In progress'){
        if(twoClass){
            return `${twoClass} Now`
        } else{
            return 'Now'
        }
    }
    else {
        if(twoClass){
            return `${twoClass} ${status}`
        } else{
            return status;
        }
    }
}

function Status(){

    // Here we will change value of status by props when we will create columns
    const [status] = useState<string>('Not Started')

    

    return(
        <span id='status' className={giveClassStatus(status)}>
            <svg width="10" height="10" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4.5" r="4" />
            </svg>{status}
        </span> 
    )
}
export default Status;