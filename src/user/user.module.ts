import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MongoDBConnection,
  MySqlConnection,
} from './connection/connection';
import { mailService, MailService } from './mail/mail.service';
import {
  createUserRepository,
  UserRepository,
} from './user-repository/user-repository';
import { MemberService } from './member/member.service';

@Module({
  controllers: [UserController],
  providers: [
    // standar providers
    UserService,
    // class providers
    {
      provide: Connection,
      useClass:
        process.env.DATABASE === 'mysql' ? MySqlConnection : MongoDBConnection,
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
