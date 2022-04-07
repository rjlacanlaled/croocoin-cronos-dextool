import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tokens'>
                    <Route path=':address' />
                </Route>
            </Routes>
        </>
    );
}

export default App;
