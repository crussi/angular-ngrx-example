export interface IInboxItem {
  readonly id: string;
  readonly user?: string;
  readonly description?: string;
  readonly title: string;
  readonly platform?: string;
  readonly youtubeUrl?: string;
  readonly imageUrl?: string;
  readonly favorite?: boolean;
  readonly processed?: boolean;

}