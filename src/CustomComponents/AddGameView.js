import { Component } from "react";

class AddGameView extends Component {
  render() {
    <div className="card" style={{ margin: "10px" }}>
      <h3 style={{ margin: "10px" }}>Welcome user</h3>
      <div className="mb-3" style={{ margin: "10px" }}>
        <label className="form-label">Title</label>
        <input type="text" class="form-control" placeholder="Title..." />
      </div>
      <div className="mb-3" style={{ margin: "10px" }}>
        <label className="form-label">Slug</label>
        <input type="text" class="form-control" placeholder="Slug..." />
      </div>
      <div class="mb-3" style={{ margin: "10px" }}>
        <label class="form-label">Text</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <button className="btn btn-primary bt" style={{ margin: "10px" }}>
        Send
      </button>
    </div>;
  }
}

export default AddGameView;
