import { Module } from '@nestjs/common';
import { JwthelperService } from './services/jwthelper.service';

@Module({
  providers: [JwthelperService],
})
export class JwthelperModule {}
