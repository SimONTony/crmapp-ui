export interface AppUser {
  id: number;
  firstName: string;
  fullName: string;
  lastName: string;
  email: string;
  role: UserRole;
  emailConfirmed: boolean;
  createdAt: Date;
  editedAt: Date;
  disabled: boolean;
  deleted: boolean;
}

export enum UserRole {
  Admin = 'ADMIN',
}

export enum UserStatus {
  Rejected = 'REJECTED',
  Approved = 'APPROVED'
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
