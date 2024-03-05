/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BaseOptions {
  onSuccess?: (data?: any) => void;
  onError?: (error?: any) => void;
}

export interface User extends BaseOptions {
  email: string;
  password: string;
}

export interface UserSlice {
  user: User | null;
  isLoading: boolean;
  isError: Error | null;
  token: null;
}
