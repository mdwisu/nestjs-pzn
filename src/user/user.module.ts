import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  createConnection,
  MongoDBConnection,
  MySqlConnection,
} from './connection/connection';
import { mailService, MailService } from './mail/mail.service';
import {
  createUserRepository,
  UserRepository,
} from './user-repository/user-repository';
import { MemberService } from './member/member.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [
    // standar providers
    UserService,
    // class providers
    {
      provide: Connection,
      useFactory: createConnection,
      inject: [ConfigService],
    },
    // value providers
    {
      provide: MailService,
      useValue: mailService,
    },
    // alias providers
    {
      provide: 'EmailService',
      useExisting: MailService,
    },
    // factory providers
    {
      provide: UserRepository,
      useFactory: createUserRepository,
      inject: [Connection],
    },
    MemberService,
  ],
})
export class UserModule {}
