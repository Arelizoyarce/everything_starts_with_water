import {
    BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import IntroPage from './pages/Intro/IntroPage';
import WorldPage from './pages/World/World';

export default function RouterComponent() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<IntroPage />}>
                </Route>
                <Route path='/world' element={<WorldPage />}/>
            </Routes>
        </Router>
    );
}
