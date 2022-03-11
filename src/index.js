import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
     222222{props.children}222222
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

