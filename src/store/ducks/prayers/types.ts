export interface IAddNewPrayer {
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface ICheckPrayer extends IAddNewPrayer {
  prayerId: number;
}
