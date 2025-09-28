export const AuthApiDataSource = {
  async login(credentials) {
    return { token: "dev-token", user: { id: "1", name: "Dev User" } };
  },
  async profile() {
    return { id: "1", name: "Dev User", email: "dev@example.com" };
  },
};
