import { Author } from './author';
import { Genre } from './genre';

/**
 * Model definition for book
 */
export interface Book {
  id: string;
  title: string;
  authors: Author[];
  genres: Genre[];
  published_at: string;
  created_by: string;
  updated_by: string;
}
