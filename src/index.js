import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import './i18n';
import Spinner from "./components/spinner";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Spinner/>}>
            <App/>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
