import React from "react";
import "./App.css";
import EpisodesList from "./components/episodesList";
import Page from "./components/page";
import ProductList from "./components/productList";

function App() {
    return (
        <div className="App">
            <Page />
            <EpisodesList />
            <ProductList />
        </div>
    );
}

export default App;
