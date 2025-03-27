import { IBusiness } from './business'

export interface IProject {
  id: string
  name: string
  apiKey: string
  businessInformation: IBusiness
  createdAt: Date
}
