import { ServiceResponseInterface } from "../protocols/ServiceResponseInterface";


export const success = (data: any): ServiceResponseInterface=>({
  isSuccess: true,
  data
})