import { Raleway, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

/**
 * Hatficeld - Custom serif for headlines
 * Elegant display font for titles
 */
export const hatficeld = localFont({
  src: "../fonts/Hatficeld.otf",
  display: "swap",
  variable: "--font-hatficeld",
});

/**
 * Raleway - Clean, refined sans-serif for body text
 * Modern readability with elegant character
 */
export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Cormorant Garamond - Refined serif for accent text
 * Adds variety and elegance to pull quotes and special text
 */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/**
 * Combined font variable classes for root layout
 */
export const fontVariables = `${hatficeld.variable} ${raleway.variable} ${cormorant.variable}`;
