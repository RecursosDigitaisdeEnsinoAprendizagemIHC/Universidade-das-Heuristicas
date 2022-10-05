import { ErrorInterface } from "./ErrorInterface";

export interface ServiceResponseInterface {
  isSuccess: boolean;
  data?: any;
  error?: ErrorInterface
}