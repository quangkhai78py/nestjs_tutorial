import { Inject, Injectable } from '@nestjs/common';
import * as RedisClient from 'ioredis';

@Injectable()
export class RedisService {
  private connection: RedisClient.Redis;

  constructor(@Inject('REDIS_CONNECTION') connection: RedisClient.Redis) {
    this.connection = connection;
  }

  public async getValueByKey(key: any) {
    return new Promise((resolve, reject) => {
      this.connection.get(key, (error, value) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  }

  public async setValueByKey(key: any, value: any, exp: any) {
    return new Promise((resolve, reject) => {
      this.connection.set(key, value, 'EX', exp, (error, value) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  }

  public async deleteValueByKey(key: any) {
    return this.connection.del(key);
  }

  /**
   * @description This is function set method
   * @param key
   * @param value
   */
  public set(key: string, value: string): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.connection.set(key, value, (err: Error) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  /**
   * @description This is function set Expiration method.
   * @param key
   * @param value
   * @param mode
   * @param duration
   */
  public setExpire(
    key: string,
    value: string,
    mode: string,
    duration: number,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.connection.set(key, value, mode, duration, (err: Error) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  /**
   * @description This is function delete method.
   * @param key
   */
  public del(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.connection.del(key, (err: Error) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  /**
   * @description This is function get method.
   * @param key
   */
  public get(key: string): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      return this.connection.get(key, (err: Error | null, reply: any) => {
        if (err) reject(err);
        resolve(reply);
      });
    });
  }
}
