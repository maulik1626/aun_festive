export const UserApiDataSource = {
  async getProfile() {
    return { id: "1", name: "Dev User", email: "dev@example.com" };
  },
  async updateProfile(patch) {
    return { id: "1", ...patch };
  },
};
