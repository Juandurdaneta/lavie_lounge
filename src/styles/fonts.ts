import { Playfair_Display, Raleway, Cormorant_Garamond } from "next/font/google";

/**
 * Playfair Display - Elegant serif for headlines
 * Evokes the sophistication of the Gatsby era
 */
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
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
export const fontVariables = `${playfair.variable} ${raleway.variable} ${cormorant.variable}`;
