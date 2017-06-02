export interface IInboxItem {
  readonly id: string;
  readonly title: string;
  readonly user?: string;
  readonly description?: string;
  readonly youtubeUrl?: string;
  readonly imageUrl?: string;
  readonly favorite?: boolean;
}
