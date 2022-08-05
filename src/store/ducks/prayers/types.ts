export interface IAddNewPrayer {
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface ICheckPrayer {
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
  prayerId: number;
}
