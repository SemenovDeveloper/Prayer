export type TypeRootStackParams ={
  LogUp: undefined
  LogIn: undefined
  DeskList: undefined
  Desk: undefined
  Card: undefined
}

export interface IColumn {
	id: number,
	title: string,
	description: string
}

export interface ICard {
	id: number,
	columnId: number,
	title: string,
	description: string,
	checked: boolean,
	subscribed: number,
	prayedByMe: number,
	prayedByOthers: number
}

export interface IComment {
	id: number,
	prayerId: number,
	body: string,
	name: string,
}

export interface IUser {
	name: string,
	email: string,
	token: string,
	id: number
}
