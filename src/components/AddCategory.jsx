import { useState } from "react";
import ProtoTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState("")
    
    const onInputChange = ({target}) => {
        setInputValue (target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue("");
    }
    return (
      <form onSubmit={onSubmit} aria-label="form"> 
    <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
    />
      </form> 
  )
}

AddCategory.ProtoTypes = {
  onNewCategory : ProtoTypes.func.isRequired,
}