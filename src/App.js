import React from 'react';
import Navigation from './components/Navigation';
import MovieSearch from './components/MovieSearch';
import './styles/App.css';

const App = () => {
    return (
        <>
            <Navigation />
            <div className="position-absolute top-50 start-50 translate-middle">
                <MovieSearch />
            </div>
        </>
    )
}

export default App;