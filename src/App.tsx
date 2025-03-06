import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MenuBar from './Components/Menu';
import Aside from './Components/Aside';
// import ContentShows from './Components/ContentShows';
import Quickstart from './Components/Quickstart';
import Overview from './Components/Overveiw';
import RealtimeAPI from './Components/Realtime';
import Models from './Components/Models';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen text-white'>
        <MenuBar />
        <main className='flex max-h-[calc(100vh-64px)]'>
          {/* Aside component contains navigation */}
          <aside className='hidden overflow-hidden w-60 sm:flex'>
            <Aside />
          </aside>
          {/* Main content area */}
          <div className='w-full overflow-hidden'>
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/quickstart" element={<Quickstart />} />
              <Route path="/realtime-api" element={<RealtimeAPI />} />
              <Route path="/models" element={<Models />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
