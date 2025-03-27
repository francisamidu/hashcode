export interface IUser {
  id: string
  email: string
  fistName?: string
  lastName?: string
  userAccountRoleType: IUserProfileRole
  userAccountRoleTypeId: string
  userAccountBusinessInformationId: string
  userAccountBusinessInformation: {
    id: string
    [key: string]: any
  }
}

export enum IUserProfileRole {
  Developer = 'DEVELOPER',
  Admin = 'ADMIN',
  Owner = 'OWNER'
}
