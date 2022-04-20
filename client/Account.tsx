import React from 'react';
import Inputs from './Inputs';
import MainContainer from './MainContainer';
// import Form from './Form';

function Account() {
  // we need conditional rendering between Inputs/MainContainer and From Components

  return (
    <div id="account">
      <Inputs />
      <MainContainer />
      {/* <Form /> */}
    </div>
  );
}

export default Account;
