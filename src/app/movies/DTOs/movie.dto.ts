import { itemSelectorDto } from "../../shared/components/chips-selector/item-selector.dto";

export interface MovieDto{
  id: number| null;
  title: string| null;
  releaseDate: Date| null;
  trailerVideoUrl: string| null;
  posterUrl: string | null;
  genres: itemSelectorDto[]
  theatres: itemSelectorDto[]
}
