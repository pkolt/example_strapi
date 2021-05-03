import { Role } from './role';

/**
 * Model definition for permission
 */
export interface Permission {
  id: string;
  type: string;
  controller: string;
  action: string;
  enabled: boolean;
  policy?: string;
  role?: Role;
  published_at: string;
  created_by: string;
  updated_by: string;
}
