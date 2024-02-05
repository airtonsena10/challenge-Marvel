export interface CardProps {
  name: string;
  about: string;
  movies?: string[] | undefined;
  availableIn?: string[] | undefined;
  rating?: number;
  image: string;
  index: number;
  inFocus: number | null;
  setInFocus: (gradient: number | null) => void;
}

export interface FullCardDescriptionProps {
  index: number;
}
