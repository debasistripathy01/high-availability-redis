import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import axios from 'axios';
// import { CreateDataDto } from './dtos/create-data.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getData(prodId: any): Promise<string | undefined> {
    console.log('This is the prodId here: ', prodId);
    const randomData = await axios.get(
      `https://dummyjson.com/products/${prodId}`,
    );
    await this.cacheManager.set(`data+${prodId}`, randomData.data);
    const value = await this.cacheManager.get<string>(`data+${prodId}`);
    return value;
  }
  async getAnyData(): Promise<string | undefined> {
    const res = await this.cacheManager.get<string>(`user:1:name`);
    console.log('this is the getdata', res);
    return res;
  }
  async postData(createDataDto: any) {
    const value = createDataDto;
    console.log('THis is value ====>', value);
    // await this.cacheManager.set('key1', value);
    const randomData = await axios.get(
      `https://dummyjson.com/products/${value}`,
    );
    console.log('This is randomData==>', randomData.data);
    await this.cacheManager.set(`data+${value}`, randomData.data);
    // console.log(res)
    const data = await this.cacheManager.get<string>(`anything+${value}`);
    console.log(data);
    return data;
  }
  async deleteData(prodId) {
    await this.cacheManager.get<string>(`data+${prodId}`);
    const deleted = await this.cacheManager.del(`data+${prodId}`);
    return `data is deleted from here ::${deleted}`;
  }
}
