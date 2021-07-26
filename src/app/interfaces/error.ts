export interface ErrorModel {
  type?: ErrorType;
  message: string | null;
  time: number;
}
export enum ErrorType {
  login = 'login',
}
