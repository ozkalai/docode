import "tailwindcss/tailwind.css";
import { setAxiosBaseUrl } from "../src/utils/axios";
import { QueryClientProvider, QueryClient } from "react-query";

setAxiosBaseUrl();

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
