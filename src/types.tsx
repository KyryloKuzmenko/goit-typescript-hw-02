export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

export interface ResponseData {
  results: Image[];
  total: number;
  total_pages: number;
}
