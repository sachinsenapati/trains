import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className="Home">
      <div className="leftSide">
        <Link to="/first">
          <img
            className="home-img"
            src="https://imgs.search.brave.com/2TxfQoj9gFxjwiq1uEom0DRsLMoBjXAwl-mwuqFzlI8/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/bU1odjJXWllnTXJx/NFhHQ1RxclZnSGFF/NyZwaWQ9QXBp"
            alt=""
          />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/second">
          <img
            className="home-img"
            src="https://imgs.search.brave.com/2TxfQoj9gFxjwiq1uEom0DRsLMoBjXAwl-mwuqFzlI8/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/bU1odjJXWllnTXJx/NFhHQ1RxclZnSGFF/NyZwaWQ9QXBp"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Home
