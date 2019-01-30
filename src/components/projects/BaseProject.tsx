export default class BaseProject {
  name: string;
  subtitle: React.ReactNode;
  url: string;
  startDate: string;
  endDate: string;
  source: string;
  thumbnail: HTMLImageElement;
  feature: HTMLImageElement;
  images: HTMLImageElement[];
  colour: string;
  backgroundColour: React.CSSProperties;
  backgroundStroke?: HTMLImageElement;
  featureBackground?: HTMLImageElement;
  featureBackgroundFlip?: boolean;
  languages: string[];
  web: boolean;
  appType?: string;
  body: string;
  anchor: string;
  small?: boolean;
  dark?: boolean;
}