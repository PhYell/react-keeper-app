import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import NoteList from "./components/notelist/NoteList.component";

function App() {
    return (
        <div className="App">
            <Header />
            <NoteList />
            <Footer />
        </div>
    );
}

export default App;

// watch 412
