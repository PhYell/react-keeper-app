import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import Note from "./components/note/Note.component";

function App() {
    return (
        <div className="App">
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;
