import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Delete, Post } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CreateDataDto } from './dtos/create-data.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/data/:id')
  async getData(@Param('id') id) {
    try {
      console.log('THis is body prod request ::', id);
      return await this.appService.getData(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Get('/anydata')
  async getTotalData() {
    try {
      return this.appService.getAnyData();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Post('/:id')
  async postData(@Param('id') createDataDto: CreateDataDto) {
    try {
      console.log('THis is id==>', createDataDto);
      return await this.appService.postData(createDataDto);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Delete('/data/:id')
  async deleteData(@Param('id') id) {
    try {
      return await this.appService.deleteData(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
