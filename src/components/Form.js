import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label>Bootcamp</label>
        <select>
          <option value="">Select</option>
          <option value="web">Web developoment</option>
          <option value="ux">UX-UI</option>
          <option value="big">Big Data</option>
        </select>
      </div>
      <div>
        <label>Type</label>
        <select>
          <option value="ft">Full time</option>
          <option value="pt">Part time</option>
          <option value="fton">Full time online</option>
          <option value="pton">Part time online</option>
        </select>
      </div>
      <div>
        <label>Plan</label>
        <input
          type='radio'
          name='discount'
          value='normal'
        /> Basic
        <input
          type='radio'
          name='discount'
          value='normal'
        /> Full
      </div>
      <button type='button'>Calculator</button>
    </form>
  );
};

export default Form;
