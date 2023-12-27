import { useSelector } from 'react-redux';
import Router from './Routes/router';
import { RootState } from './State';
import LoadingGlobal from './Component/shared/LoadingGlobal';

function App() {
    const data = useSelector((state: RootState) => state.authenticate);

    return (
        <>
            <Router isAuthenticated={data.isAuthenticated} />
            <LoadingGlobal />
        </>
    );
}
export default App;
