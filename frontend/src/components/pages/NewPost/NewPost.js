import { Form } from "react-bootstrap";
import Dashboard from "../../layout/Dashboard/Dashboard";

import "./NewPost.css";

const NewPost = () => {
  return (
    <>
      <Dashboard />
      <header className="title">Add New 'Fit</header>
      <Form className="form-style">
        <div className="input-group mb-3">
          <input className="form-control" type="file" id="formFile" />
          <label for="formFile" className="input-group-text">
            Add New 'Fit:{" "}
          </label>
        </div>

        <Form.Group controlId="description">
          <Form.Label>'Fit Deets: </Form.Label>
          <br></br>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="'Fit Description e.g.(where did you buy your unique lewk?)"
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default NewPost;
