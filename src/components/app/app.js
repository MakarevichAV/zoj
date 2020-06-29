import React from 'react';

import Header from '../header';
import './app.css';
import Title from '../title';

const App = () => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <Title label="Питание" />
            </div>
        </div>
    )
}

export default App;