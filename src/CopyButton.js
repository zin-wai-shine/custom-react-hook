import React, { useContext } from 'react';
import { statusCopy } from "./useCopyToClipboard";
// import UseCopyToClipboard from './useCopyToClipboard';

function CopyButton({code}) {

  const {isCopied, handleCopy} = useContext(statusCopy);

  // const {isCopied , handleCopy} = UseCopyToClipboard();


  return (
    <div>

        <button type="" onClick={()=>handleCopy(code)}>
          {isCopied ? "copied" : "copy"}
        </button>

    </div>
  )
}

export default CopyButton