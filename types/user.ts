import { Role } from './role';

/**
 * Model definition for user
 */
export interface User {
  id: string;
  username: string;
  email: string;
  provider?: string;
  password?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: Role;
  published_at: string;
  created_by: string;
  updated_by: string;
}
