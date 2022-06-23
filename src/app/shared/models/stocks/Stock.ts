import { SynthetisedStock } from "./SynthetisedStock";
import { QuoteData } from "./QuoteData";

export interface Stock {
  synthetisedStock: SynthetisedStock;
  quoteData: QuoteData;
}
