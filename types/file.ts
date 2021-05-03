/**
 * Model definition for file
 */
export interface File {
  id: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: { [key: string]: any };
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: { [key: string]: any };
  related: any[];
  published_at: string;
  created_by: string;
  updated_by: string;
}
