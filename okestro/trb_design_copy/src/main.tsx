import ReactDOM from 'react-dom/client';
import { queryClient } from '@apis/queryClient.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import App from '@/App.tsx';
import '@locale/i18n.ts';
// import './index.css';
import '@assets/styles/style_js.css';
import '@assets/fonts/fonts.css';
import '@assets/styles/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
