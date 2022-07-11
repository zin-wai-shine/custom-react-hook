import React, { createContext, useCallback, useState } from 'react'
import CopyButton from './CopyButton';
import copy from 'react-copy-to-clipboard';

export const statusCopy = createContext();

function UseCopyToClipboard() {

    const [isCopied, setCopy] = useState(false);

    const handleCopy = useCallback((text)=>{
        if(typeof text === "string" || typeof text === "number"){

            copy(text.toString());
            setCopy(true);

        }else{

            setCopy(false);
            console.error(
                `Cannot copy typeof ${typeof text} to clipboard, must be a string or number`
            );
        }
    },[]);

  return (
    // [isCopied, handleCopy]
    <div>
        <statusCopy.Provider value={isCopied}>

            <CopyButton code="copy these text."/>

        </statusCopy.Provider>
    </div>
  )
}

export default UseCopyToClipboard