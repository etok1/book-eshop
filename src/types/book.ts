export interface Books {
  items: BookItem[];
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  imageLinks: ImageLinks;
}

export interface SaleInfo {
  retailPrice: { amount: number; currencyCode: string };
}

export interface SearchInfo {
  textSnippet: string;
}

export interface Rating {
  rating: number;
}

export interface BookItem {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  searchInfo?: SearchInfo;
  ratingCount?: Rating;
  count?: number;
}
