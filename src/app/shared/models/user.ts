export interface User {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    lastLogin: Date;
    createdAt: Date;
    mfaSecret: string;
    mfaEnabled: boolean;
    personalCode: string;
    phone: string
    requirePasswordChange: boolean
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
