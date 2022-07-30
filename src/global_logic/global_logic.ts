export interface InterfaceOfGlobalLogic {
  widthOfWindow: number;
  setWidthOfWindow: (sth: number) => void;
}

class GlobalLogic implements InterfaceOfGlobalLogic {
  widthOfWindow: number = 1200;

  setWidthOfWindow(sth: number) {
    this.widthOfWindow = sth;
  }
}

export const GlobalLogicObject = new GlobalLogic();
