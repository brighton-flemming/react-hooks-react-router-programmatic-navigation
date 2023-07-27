import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home</h1>
      <div>
        <p>We meet again,reader....Welcome,to the void. /(*_*)\</p>
      </div>
    </div>
  );
}

export default Home;
