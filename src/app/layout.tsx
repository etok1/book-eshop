"use client";
import "./globals.css";
import "./reset.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store/index";
import Header from "./components/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
