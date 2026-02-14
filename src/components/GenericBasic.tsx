import React from 'react'

const GenericBasic = () => {

    /**
     * This function takes a single value of type T and returns an array of length 1 containing that value.
     * It is used to convert a single value into an array for further processing.
     * @param value The value to be converted into an array.
     * @returns An array of length 1 containing the given value.
     * If u pass string , it will return array of string, likewise others
     */

    function convertToArray<T>(value:T):T[]{   
        return [value];
    }

    convertToArray(5);
    convertToArray("Hello");
  return (
    <div>
      Hello
    </div>
  )
}

export default GenericBasic
