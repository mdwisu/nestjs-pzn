export class MailService {
  send() {
    console.info('Send mail');
  }
}

export const mailService = new MailService();
