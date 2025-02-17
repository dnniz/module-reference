import { itemSelectorDto } from "../../shared/components/chips-selector/item-selector.dto";

export interface MovieDto{
  id: number;
  title: string;
  releaseDate: Date;
  trailerVideoUrl: string;
  posterUrl: string;
  genres: itemSelectorDto[]
}
