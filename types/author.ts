/**
 * Model definition for author
 */
export interface Author {
  id: string;
  title: string;
  birthday?: Date;
  published_at: string;
  created_by: string;
  updated_by: string;
}
