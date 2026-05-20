import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PelangganModule } from './pelanggan.module';
import { PerusahaanModule } from './perusahaan/perusahaan.module';
import { JwthelperModule } from './jwthelper/jwthelper.module';
import { AuthController } from './auth/controller/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    PelangganModule,
    PerusahaanModule,
    JwthelperModule,
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
