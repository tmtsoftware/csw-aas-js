import React, {useState} from "react";

// const e = () => {
// }

const ConfigsContext = React.createContext([]);

export const ConfigsContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(items.concat(item))
  };

  return <ConfigsContext.Provider value={{items, addItem, setItems}}>
    {props.children}
  </ConfigsContext.Provider>
};
export default ConfigsContext
