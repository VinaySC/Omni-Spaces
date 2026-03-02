import SideNavbar from './components/SideNavbar';
import MainContent from './components/MainContent';
import DetailsPanel from './components/DetailsPanel';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
      <SideNavbar />
      <MainContent />
      <DetailsPanel />
    </div>
  );
}

export default App
