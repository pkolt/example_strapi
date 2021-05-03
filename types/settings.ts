/**
 * Model definition for settings
 */
export interface Settings {
  id: string;
  site_name: string;
  site_description?: string;
  published_at: string;
  created_by: string;
  updated_by: string;
}
