"use client";
import "./globals.css";
import "./reset.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store/index";
import Header from "./components/header/header";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const font = Montserrat({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {" "}
        <Head>
          <title>bookshop</title>
          <meta name="description" content="book shop on react nextjs" />
          <meta name="author" content="Eva Tokmakova" />
        </Head>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <main className="main">{children}</main>{" "}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
