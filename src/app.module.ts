import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    CacheModule.register({
      useFactory: () => ({
        store: redisStore,
        host: 'redis-master',
        port: 6379,
        ttl: 6000,
        db: 0,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
