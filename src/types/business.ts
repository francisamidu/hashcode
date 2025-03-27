import { IProject } from './project'
import { IUser } from './user'

export interface IBusiness {
  id: string
  name: string
  createdAt: Date
  users: IUser[]
  projects: IProject[]
}
