export interface ItemProps {
  name: string;
  about: string;
  movies?: string[];
  availableIn?: string[];
  rating: number;
  image: string;
  chronology?: number;
}

export interface CardSectionProps {
  inFocus: number | null;
}