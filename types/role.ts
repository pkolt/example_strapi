import { Permission } from './permission';
import { User } from './user';

/**
 * Model definition for role
 */
export interface Role {
  id: string;
  name: string;
  description?: string;
  type?: string;
  permissions: Permission[];
  users: User[];
  published_at: string;
  created_by: string;
  updated_by: string;
}
