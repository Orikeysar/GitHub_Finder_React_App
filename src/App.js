import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Notfind from "./pages/Notfind";
import Index from "./pages/Index";
import { GithubProvider } from "./Context/github/GitHubContext";
import { AlertProvider } from "./Context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import UserInfo from "./pages/UserInfo";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/404" element={<Notfind />}></Route>
                <Route path="/index" element={<Index />}></Route>
                <Route path="/about" element={<Index />}></Route>
                <Route path="/user/:login" element={<UserInfo />}></Route>
                <Route path="/*" element={<Notfind />}></Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
