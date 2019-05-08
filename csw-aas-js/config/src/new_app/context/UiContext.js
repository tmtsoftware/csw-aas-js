import React, {useState} from "react";

const e = () => {
};

export const UiContext = React.createContext({
  addModalOpen: false
});

export const UiContextProvider = (props) => {
  const [uiState, setUIState] = useState({
    addModalOpen: false
  });

  const openAddModal = () => {
    setUIState({...uiState, addModalOpen: true});
  };

  const closeAddModal = () => {
    setUIState({...uiState, addModalOpen: false});
  };

  return <UiContext.Provider value={{addModalOpen: uiState.addModalOpen, openAddModal, closeAddModal}}>
    {props.children}
  </UiContext.Provider>
};

export default UiContext
