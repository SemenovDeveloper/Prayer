export type TypeRootStackParams = {
  LogUp: undefined;
  LogIn: undefined;
  ColumnsList: undefined;
  Desk: undefined;
  Card: undefined;
};

export interface IColumn {
  id: number;
  title: string;
  description: string;
}

export interface IPrayer {
  id: number;
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
  subscribed: number;
  prayedByMe: number;
  prayedByOthers: number;
}

export interface IComment {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
}

export interface IUser {
  name: string;
  email: string;
  token: string;
  id: number;
}
