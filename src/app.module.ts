import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { configuration } from './config/configuration';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: configuration().db.host,
      port: configuration().db.port,
      username: configuration().db.user,
      password: configuration().db.password,
      database: configuration().db.db,
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
