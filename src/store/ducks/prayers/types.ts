export interface IAddNewPrayer {
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface IUpdatePrayer {
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
  prayerId: number;
}
