import React from "react";
import Nav from "./Nav.js";
import rows from "./data.js";

export default class Description extends React.Component {
  render() {
    const element = rows[this.props.match.params.value - 1];
    return (
      <div>
        <Nav />
        <header className="bg-primary py-5 mb-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1 className="display-4 text-white mt-5 mb-2">
                  <br />
                  {element.name}
                </h1>
                <br />
                <p className="lead mb-5 text-white-50" id="dataset-description">
                  {element.description}
                </p>
                <p className="lead mb-5 text-white-50">
                  Source:{" "}
                  <a id="sourceLink103" href={element.source}>
                    {element.source}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-5">
              <h2>Basic Information</h2>
              <hr />
              <div className="info_box">
                <p>Data type: {element.data_type}</p>
                <p>Number of images: {element.num_of_images}</p>
                <p>Number of plants: {element.num_of_plants}</p>
                <p>Number of species: {element.num_of_species}</p>
                <p>Source of data: {element.data_source}</p>
                <p>Location where data was taken: {element.location}</p>
                <p>Conditions of use: {element.condition_of_use}</p>
                <p>Manually labelled: {element.manually_labelled}</p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h2>Citation</h2>
              <hr />
              <div className="info_box" id="cite">
                {element.citation.map(research => (
                  <p key={research}>- {research}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
