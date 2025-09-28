import { AuthApiDataSource } from "@data/datasources/remote/auth/AuthApiDataSource";
import { BaseRepository } from "@data/repositories/base/BaseRepository";

export class AuthRepository extends BaseRepository {
  async login(credentials) {
    return AuthApiDataSource.login(credentials);
  }
  async profile() {
    return AuthApiDataSource.profile();
  }
}
