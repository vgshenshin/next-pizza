import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Пицца Краснодар — заказать с доставкой на дом бесплатно, доставка еды из пиццерии Next-Pizza",
  description:
    "🍕Закажи пиццу с бесплатной доставкой в Краснодар за 30 минут. Купить недорогую еду в Краснодар рядом с домом или офисом в пиццерии Next-Pizza. Оформи заказ на сайте next-pizza.ru или по телефону 8 800 777-77-77.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
