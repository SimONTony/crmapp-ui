export interface User {
    id: number;
    username: string;
    lastLoginAt: Date;
    createdAt: Date;
    mfaSecret: string;
    mfaEnabled: boolean;
    role: UserRole
    status: string
    updatedAt: Date
}

export enum UserRole {
    SUPERADMIN = 'Super Admin',
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}
