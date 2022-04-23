import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() req: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  @HttpCode(203)
  create(@Body() body: CreateCatDto): string {
    console.log(body);
    return 'This action adds a new cat';
  }

  @Get(':id')
  async findOne(@Param() params): Promise<string> {
    console.log(params);
    return `This action returns a #${params.id} cat`;
  }
}
