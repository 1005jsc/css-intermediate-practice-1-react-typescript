export interface TypeOfGlobalDiv {
  justify: string | number;
  align: string | number;
  gap: string | number;
  padding: string | number;
  margin: string | number;
  position: string | number;
  width: string | number;
  minWidth: string | number;
  maxWidth: string | number;
  height: string | number;
  maxHeight: string | number;
  minHeight: string | number;
}

export interface TypeOfRow extends TypeOfGlobalDiv {
  wrap: string | number;
}

export interface TypeOfColumn extends TypeOfGlobalDiv {}

export interface TypeOfSection {
  padding?: string | number;
  margin?: string | number;

  position?: string | number;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  mdPadding?: string | number;
  inverse?: string | number;
}
