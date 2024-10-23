import { useState } from "react";

function ProductForm() {
  const [greetingInputName,setGreetingInputName] = useState("")
  const [greetingInputImgUrl,setGreetingInputImgUrl] = useState("")
  const [greetingInputPrice,setGreetingInputPrice] = useState("")
  const [greetingInputDst,setGreetingInputDst] = useState("")
  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(even) => {setGreetingInputName(even.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(even) => {setGreetingInputImgUrl(even.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(even) => {setGreetingInputPrice(even.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(even) => {setGreetingInputDst(even.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={() =>alert(JSON.stringify(`name: ${greetingInputName}\n price: ${greetingInputPrice}\n image: ${greetingInputImgUrl}\n description: ${greetingInputDst}`)) }>Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
