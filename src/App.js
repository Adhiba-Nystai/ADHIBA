import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layoutadhiba from './componuents/ADHIBAWEBSITE-HOSTED/layoutadhiba';
import Finaladhiba from './componuents/ADHIBAWEBSITE-HOSTED/intro';
import Supportadhiba from './componuents/ADHIBAWEBSITE-HOSTED/support';

function App() {
  return (
    <>

      <HashRouter >
        <Routes >
          <Route exact path="/*" element={<Layoutadhiba />}>
            <Route index element={<Finaladhiba />} />
            <Route exact path="adhiba-home" element={<Finaladhiba />} />
            <Route exact path="adhiba-support" element={<Supportadhiba />} />
          </Route>
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
