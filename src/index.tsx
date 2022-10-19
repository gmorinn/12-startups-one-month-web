import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./screens/errorBoundary";
import { QueryClient, QueryClientProvider } from "react-query";

import Loader from './components/Loader';
import App from './App';

const g = "color:#00000;font-weight:bold;font-size:18px;";
const hello = `%c 🤙 https://guillaume-morin.fr/`;
console.info(hello, g);

const queryClient = new QueryClient();

ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <BrowserRouter>
                <App />
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </Suspense>
  </ErrorBoundary>,
  document.getElementById('root')
);

reportWebVitals();
