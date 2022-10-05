
import { Response } from "express";
import { ServiceResponseInterface } from "../protocols/ServiceResponseInterface";

export interface ResponseData{
  statusCode: number;
   body: any;
}
export const makeResponse = (response: Response, data:ServiceResponseInterface ) => {
  const responseData:ResponseData =  data.isSuccess === true? {statusCode: 200, body: data.data} : {statusCode: data.error?.code?? 500, body: data.error}  
  return response.status(responseData.statusCode).json(responseData.body)
}
