import Profile from './components/Profile';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';
function App() {
  return (
    <div className='container'>
      <div className="cover">
        <Profile />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
