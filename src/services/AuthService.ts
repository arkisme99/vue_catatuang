import { apiFetch } from "@/lib/api";
import { getToken } from "@/lib/getToken";
import { ApiFetchResponse, ApiResponse } from "@/model/ApiModel";
import {
  CreateUserRequest,
  CreateUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from "@/model/UserModel";

export const AuthService = {
  async register({
    name,
    username,
    email,
    password,
  }: CreateUserRequest): Promise<ApiFetchResponse<CreateUserResponse>> {
    const result = await apiFetch<CreateUserResponse>(
      `${import.meta.env.VITE_API_PATH}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      }
    );
    // console.log(`Result: ${result}`);
    return result;
  },

  async login(
    user: LoginUserRequest
  ): Promise<ApiFetchResponse<LoginUserResponse>> {
    const result = await apiFetch<LoginUserResponse>(
      `${import.meta.env.VITE_API_PATH}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    return result; // langsung data typed
  },

  async getProfile(): Promise<Response> {
    const token = getToken();
    //pakai fetch biasa karena apipFetch semua error fetch keluar alert
    return await fetch(`${import.meta.env.VITE_API_PATH}/auth/profile`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        // "X-API-TOKEN": getToken(),
        ...(token && { "X-API-TOKEN": token }),
      },
    });
  },

  async updateProfile(
    user: UpdateProfileRequest
  ): Promise<ApiFetchResponse<UpdateProfileResponse>> {
    const token = getToken();
    return await apiFetch(`${import.meta.env.VITE_API_PATH}/auth/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { "X-API-TOKEN": token }),
      },
      body: JSON.stringify(user),
    });
  },

  async logout() {
    const token = getToken();
    const result = await apiFetch(
      `${import.meta.env.VITE_API_PATH}/auth/logout`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          ...(token && { "X-API-TOKEN": token }),
        },
      }
    );

    return result;
  },
};
