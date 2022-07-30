import { createContext, ReactNode, useContext } from 'react';
import {
  GlobalLogicObject,
  InterfaceOfGlobalLogic,
} from '../../global_logic/global_logic';

type TypeOfHighestContext = InterfaceOfGlobalLogic;

const HighestContext = createContext<TypeOfHighestContext>(GlobalLogicObject);

export const useHighestContext = () => useContext(HighestContext);

type HighestProvider = {
  children: ReactNode;
};

export const HighestProvider = ({ children }: HighestProvider) => {
  return (
    <HighestContext.Provider value={GlobalLogicObject}>
      {children}
    </HighestContext.Provider>
  );
};
