import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
     333333{props.children}33333
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome test!
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);

