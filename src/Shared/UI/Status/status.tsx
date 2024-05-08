import React, { useState } from "react";
import './style.scss'

function Status(){

    const [status] = useState<string>('Ready')

    function giveClassStatus (status: string) {
        if (status === 'Not started'){
            return 'Not';
        } else if(status === 'In progress'){
            return 'Now'
        }
        else {
            return status;
        }
    }

    return(
        <span id='status' className={giveClassStatus(status)}>
            <svg width="10" height="10" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4.5" r="4" />
            </svg>{status}
        </span> 
    )
}
export default Status;