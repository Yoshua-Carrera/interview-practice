export interface HeaderConfig {
  title: string;
  id: HeaderOptions;
}

export enum HeaderOptions {
  MY_APPLICATION = 'my-application',
  HOME = 'home',
  SHOW_BOOKS = 'show-books',
}

export interface BookResponse {
  items: Book[];
  totalItems: number;
  kind: string;
}

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: PDF;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface Epub {
  isAvailable: boolean;
}

export interface PDF {
  isAvailable: boolean;
  acsTokenLink: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface SearchInfo {
  textSnippet: string;
}

export interface VolumeInfo {
  title: string;
  publisher: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  authors: string[];
  publishedDate: string;
  description: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}
