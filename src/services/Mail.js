import nodemailer from 'nodemailer';

import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    // Cria o transporte do email
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      // Algumas estratégias não utilizam auth
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
