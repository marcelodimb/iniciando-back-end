import ISendMailDTO from '../dtos/ISendMailProviderDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
