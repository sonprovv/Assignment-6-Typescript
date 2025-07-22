// src/user.ts

// Task 1: Interface User
export interface User {
  readonly id: number;
  username: string;
  email: string;
  isActive?: boolean;
  role: 'admin' | 'user' | 'guest';
}

// Task 2: Type UserProfile kết hợp User + thêm birthDate, address
export type UserProfile = User & {
  birthDate: Date;
  address?: string;
};

// Task 3: Class UserAccount
export class UserAccount implements User {
  readonly id: number;
  username: string;
  email: string;
  isActive?: boolean;
  role: 'admin' | 'user' | 'guest';
  private password: string;

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    role: 'admin' | 'user' | 'guest' = 'user',
    isActive: boolean = true
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.isActive = isActive;
  }

  validatePassword(): boolean {
    return this.password.length >= 8;
  }
}

// Task 4: Class AdminUser kế thừa UserAccount
export class AdminUser extends UserAccount {
  permissions: string[];

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    permissions: string[] = []
  ) {
    super(id, username, email, password, 'admin', true);
    this.permissions = permissions;
  }

  override validatePassword(): boolean {
    // Admin cần mật khẩu >= 12 ký tự
    // Truy cập password qua phương thức riêng nếu cần
    // Ở đây, password là private, nên cần sửa lại UserAccount nếu muốn truy cập
    // Hoặc dùng workaround như sau (không khuyến khích ngoài demo):
    // @ts-ignore
    return this["password"].length >= 12;
  }
}

// Task 5: createUser
export function createUser(userData: Partial<User>): User {
  return {
    id: userData.id ?? Date.now(),
    username: userData.username ?? 'Unknown',
    email: userData.email ?? '',
    isActive: userData.isActive ?? true,
    role: userData.role ?? 'user'
  } as User;
}

// Task 6: formatUserInfo
export function formatUserInfo(user: User | UserProfile): string {
  if ('birthDate' in user && user.birthDate instanceof Date) {
    return `User ${user.username} born on ${user.birthDate.toLocaleDateString()}`;
  }
  return `User ${user.username} (${user.role})`;
}