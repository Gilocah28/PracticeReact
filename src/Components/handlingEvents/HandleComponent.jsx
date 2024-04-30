import React from "react";

const HandleComponent = () => {
  const handleClick = (name) => {
    alert(`Hello ${name} !`);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    // Sample 1
    console.log(event.target[0].value)
    console.log(event.target[1].value)


    // Sample 2
    console.log(event.target.elements.fname.value)
    console.log(event.target.elements.lname.value)
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleClick("Erica")}>
        Click me!
      </button>

      <hr />

      <input
        type="text"
        name="fname"
        onChange={(event) => console.log(event.target.value)}
      />

      <hr />

      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="fname"
            placeholder="Enter first name..."
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="lname"
            placeholder="Enter last name..."
            className="form-control"
          />
        </div>

        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HandleComponent;
