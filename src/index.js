import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/AppStyle/Import.scss'
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(

    <QueryClientProvider client={queryClient}>
            <BrowserRouter>
        <App />

</BrowserRouter>

    </QueryClientProvider>

);
