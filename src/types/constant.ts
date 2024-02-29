// import { ReactElement, ReactNode } from "react";
// import { IconType } from "react-icons";

// export interface Skills {
//   id: number;
//   icon: React.ElementType;
//   title: string;
//   subtitle: string;
//   progress: number;
// }
export interface Skills {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  progress: number;
}

export interface Navs {
  href: string;
  label: string;
}

export interface ButtonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  border?: string;
  width?: string;
  fullWidth?: boolean;
  hoverButton?: string;
}

export interface Projects {
  id: number;
  title: string;
  imgURL?: string;
  subtitle?: string;
  description?: string;
  link?: string;
}
