import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <App />
    </UserProvider>
  </QueryClientProvider>
);
