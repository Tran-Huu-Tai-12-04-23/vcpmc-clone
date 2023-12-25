import Router from './Routes/router';

function App() {
    const isAuthenticated = false;
    return <Router isAuthenticated={isAuthenticated} />;
}
export default App;
