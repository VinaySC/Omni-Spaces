import SideNavbar from './components/SideNavbar';
import DetailsPanel from './components/DetailsPanel';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
      <SideNavbar />
      <div style={{ flex: 1, backgroundColor: 'var(--background-canvas)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'var(--text-neutral-faint)' }}>Main Content Area</h1>
      </div>
      <DetailsPanel />
    </div>
  );
}

export default App
