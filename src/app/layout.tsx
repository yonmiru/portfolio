import "./globals.css";
import localFont from "@next/font/local";
import Frame from "@/components/Frame";

const sfUI = localFont({
  src: [
    {
      path: "./fonts/SF-UI-Display-Ultralight.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SF-UI-Display-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/SF-UI-Display-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF-UI-Display-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF-UI-Display-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF-UI-Display-Bold.woff",
      weight: "700",
      style: "normal",
    },

    {
      path: "./fonts/SF-UI-Display-Heavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SF-UI-Display-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "YonMiru",
  description: "A portfolio website for YonMiru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sfUI.className}>
        {children}
        <Frame />
      </body>
    </html>
  );
}
