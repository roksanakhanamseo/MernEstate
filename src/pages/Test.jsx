import { useState } from "react";

const Test = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);

    const res = await fetch(
      "https://mernestatebackend-production.up.railway.app/api/listing/test",
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: formData,
      }
    );
  };
  return (
    <div>
      <form className="flex justify-center items-center mx-auto">
        <input
          onChange={handleChange}
          type="file"
          name="file"
          className="bg-slate-500 px-7 py-4"
        />
        <button className="px-7 py-4 bg-slate-500" onClick={handleClick}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default Test;
