import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

// Create a client
const queryClient = new QueryClient();

// const [queryClient] = useState(
//   () =>
//   new QueryClient({
//     defaultOption: {
//       queries: {
//         retryDelay: 1250,
//         staleTime: 1000 * 60 * 10,
//       },
//     },
//   })
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
