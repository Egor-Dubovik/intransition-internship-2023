import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import router from '../router/router';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
