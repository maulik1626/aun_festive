import { UserApiDataSource } from "@data/datasources/remote/user/UserApiDataSource";
import { BaseRepository } from "@data/repositories/base/BaseRepository";

export class UserRepository extends BaseRepository {
  getProfile() {
    return UserApiDataSource.getProfile();
  }
  updateProfile(patch) {
    return UserApiDataSource.updateProfile(patch);
  }
}
