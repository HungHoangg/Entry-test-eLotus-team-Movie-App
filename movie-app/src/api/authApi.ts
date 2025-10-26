import apiClient from "./apiClient";

export const authApi = {
  createGuestSession: async () => {
    const res = await apiClient.get("/authentication/guest_session/new");
    return res.data;
  },
};
