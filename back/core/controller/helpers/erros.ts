import { ServiceResponseInterface } from "../protocols/ServiceResponseInterface";

export const notFoundError = (message: string): ServiceResponseInterface => ({
  isSuccess: false,
  error: {
    code: 404,
    message: `${message} não encontrada(o).`
  }
})

export const updateError = (message: string): ServiceResponseInterface => ({
  isSuccess: false,
  error: {
    code: 500,
    message: `Erro ao atualizar ${message}.`
  }
})

export const createError = (message: string): ServiceResponseInterface => ({
  isSuccess: false,
  error: {
    code: 500,
    message: `Erro ao criar ${message}.`
  }
})

export const serverError = (message: string): ServiceResponseInterface => ({
  isSuccess: false,
  error: {
    code: 500,
    message: `${message}`
  }
}) 