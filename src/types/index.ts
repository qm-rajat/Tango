export interface User {
  id: string;
  email?: string;
  phone?: string;
}

export interface LoginFormData {
  email?: string;
  phone?: string;
  password: string;
}