import Router from './Routes/router';

function App() {
    const isAuthenticated = true;
    return <Router isAuthenticated={isAuthenticated} />;
}
export default App;
