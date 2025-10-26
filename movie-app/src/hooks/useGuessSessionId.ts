import { useEffect } from "react";
import { authApi } from "../api/authApi";
import { useToast } from "../components/ErrorMessage/ErrorMessage";

export const useGuestSession = () => {
  const { showError } = useToast();
  useEffect(() => {
    const initGuestSession = async () => {
      const session = localStorage.getItem("guest_session_id");
      if (!session) {
        try {
          const data = await authApi.createGuestSession();
          if (data.success) {
            localStorage.setItem("guest_session_id", data.guest_session_id);
            localStorage.setItem("guest_session_expires_at", data.expires_at);
          } else {
            showError("Failed to create guest session");
          }
        } catch (err) {
          showError("Failed to create guest session");
        }
      }
    };
    initGuestSession();
  }, []);
};
