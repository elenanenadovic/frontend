import { Component } from "react";

class SingleGameView extends Component {
  render() {
    return (
      <div className="card" style={{ margin: "10px" }}>
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            onClick={() => this.QSetViewInParent({ page: "novice" })}
            className="btn btn-primary"
          >
            Return news
          </button>
        </div>
      </div>
    );
  }
}

export default SingleGameView;
