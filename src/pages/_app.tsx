import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
