import React from "react";

const Filters = (props) => {

  return (
    <div className="filter-section">
      <div className="row header">
        <h2>Filter By</h2>
        <p>Clear All</p>
      </div>
      <details className="filter">
        <summary>
          <h6 className="subtitle">Languages</h6>
        </summary>
        <div className="checkbox pt-3 px-2">
          <div className="row">
            <input type="checkbox" id="Tamil" />
            <label htmlFor="Tamil">Tamil</label>
          </div>
          <div className="row">
            <input type="checkbox" id="English" />
            <label htmlFor="English">English</label>
          </div>
          <div className="row">
            <input type="checkbox" id="Hindi" />
            <label htmlFor="Hindi">Hindi</label>
          </div>
          <div className="row">
            <input type="checkbox" id="Malayalam" />
            <label htmlFor="Malayalam">Malayalam</label>
          </div>
          <div className="row">
            <input type="checkbox" id="Telugu" />
            <label htmlFor="Telugu">Telugu</label>
          </div>
          <div className="row">
            <input type="checkbox" id="Kannada" />
            <label htmlFor="Kannada">Kannada</label>
          </div>
          <div className="row">
            <input type="checkbox" id="Bengali" />
            <label htmlFor="Bengali">Bengali</label>
          </div>
        </div>
      </details>
      <details className="filter">  
        <summary>
          <h6 className="subtitle">categories</h6>
        </summary>
        <div className="checkbox pt-3 px-2">
          <div className="row">
            <input type="checkbox" id="performance" />
            <label htmlFor="performance">Performance</label>
          </div>
          <div className="row">
            <input type="checkbox" id="show" />
            <label htmlFor="show">Music Show</label>
          </div>
          <div className="row">
            <input type="checkbox" id="kids" />
            <label htmlFor="kids">Kids</label>
          </div>
          <div className="row">
            <input type="checkbox" id="comedy" />
            <label htmlFor="comedy">Comedy</label>
          </div>
          <div className="row">
            <input type="checkbox" id="online" />
            <label htmlFor="online">Online Streaming</label>
          </div>
          <div className="row">
            <input type="checkbox" id="workshops" />
            <label htmlFor="workshops">Workshops</label>
          </div>
          <div className="row">
            <input type="checkbox" id="spirtuality" />
            <label htmlFor="spirtuality">Spirtuality</label>
          </div>
          <div className="row">
            <input type="checkbox" id="screening" />
            <label htmlFor="screening">Screening</label>
          </div>
          <div className="row">
            <input type="checkbox" id="outdoor" />
            <label htmlFor="outdoor">Outdoor Events</label>
          </div>
          <div className="row">
            <input type="checkbox" id="kidsallowed" />
            <label htmlFor="kidsallowed">Kids Allowed</label>
          </div>
        </div>
      </details>
      <details className="filter">
        <summary>
          <h6 className="subtitle">price</h6>
        </summary>
        <div className="checkbox pt-3 px-2">
          <div className="row">
            <input type="checkbox" id="free" />
            <label htmlFor="free">free</label>
          </div>
          <div className="row">
            <input type="checkbox" id="low" />
            <label htmlFor="low">0 - 500</label>
          </div>
          <div className="row">
            <input type="checkbox" id="medium" />
            <label htmlFor="medium">500 - 2000</label>
          </div>
          <div className="row">
            <input type="checkbox" id="high" />
            <label htmlFor="high">Above 2000</label>
          </div>
        </div>
      </details>
      <div className="filter-footer row px-3 py-2">
        <p className="apply">Apply</p>
        <p className="cancel">Cancel</p>
      </div>
    </div>
  );
};

export default Filters;
