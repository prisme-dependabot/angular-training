import { Sentiment } from "./Sentiment";

export interface Stock {
  symbol: string;
  companyName: string;
  currentPrice: number;
  percentChange: number;
  highPriceOfTheDay: number;
  openPriceOfTheDay: number;
  sentimentInformation?: Sentiment[];
  sentimentCached?: boolean;
}
