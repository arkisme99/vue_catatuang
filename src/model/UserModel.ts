import { ApiResponse } from "./ApiModel";

interface BaseUser {
  username: string;
  password: string;
  avatar?: string;
  email?: string;
}

export interface LoginUserRequest {
  username: string;
  password: string;
}

export interface CreateUserRequest extends BaseUser {
  name: string;
  password: string;
}

export interface CreateUserResponse extends ApiResponse {
  data: ProfileUser;
}

export interface LoginUserResponse extends ApiResponse {
  data: ProfileUser;
}

export interface ProfileUser extends BaseUser {
  id: number;
  name: string;
  token?: string;
  created_at: string;
  updated_at: string;
}
