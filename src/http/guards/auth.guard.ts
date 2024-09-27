import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from '@nestjs/axios/dist';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = request.headers['authorization']?.split(' ')[1];
      const response = await lastValueFrom(
        this.httpService.get(
          `${this.configService.get<string>('MS-IAM')}/check`,
          { headers: { authorization: `Bearer ${token}` } },
        ),
      );
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}