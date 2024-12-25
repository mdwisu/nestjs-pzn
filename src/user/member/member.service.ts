import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { MailService } from '../mail/mail.service';
import { Connection } from '../connection/connection';

@Injectable()
export class MemberService {
  constructor(private moduleRef: ModuleRef) {}

  getConnectionName() {
    const connection = this.moduleRef.get(Connection);
    return connection.getName();
  }

  sendEmail() {
    const emailService = this.moduleRef.get(MailService);
    emailService.send();
  }
}
