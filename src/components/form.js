import React from 'react';

import './styles/form.scss';

const Form = ({ getWeather }) => {
  return (
    <form className="form" onSubmit={getWeather}>
      <div className="inputs">
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
      </div>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
