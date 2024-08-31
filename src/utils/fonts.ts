import { Lilita_One } from "next/font/google";
const Lilita_One_init = Lilita_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lilita-one",
});

export const lilita_one = Lilita_One_init.variable;
