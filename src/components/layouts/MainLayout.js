import React from 'react';
import Header from '../common/Header';
const MainLayout = props => {
    return (
        <div className='container dark'>
            <div className='app'>
                <Header />
                {props.children}
            </div>
        </div>
    );
};

export default MainLayout;
