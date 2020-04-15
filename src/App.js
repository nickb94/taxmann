import React from 'react';
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Group49 } from "./components/Group49/Group49"
import { Offers } from "./components/Offers/Offers"
import { Group3Copy2 } from "./components/Group3Copy2/Group3Copy2"
import { Group8 } from "./components/Group8/Group8"
import { Categories } from "./components/Categories/Categories"
import { OfferCopies } from "./components/OfferCopy/OfferCopy"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Group49 />
        <div>
          <Group8 />
          <Offers />
          <Categories />
        </div>
        <div>
          <Group3Copy2 />
          <OfferCopies />
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
