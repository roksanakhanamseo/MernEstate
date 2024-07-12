import { useState } from "react";

const Test = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("http://localhost:3000/api/listing/test", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
      credentials: "include",
      withCredentials: true,
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <form
        encType="multipart/form-data"
        className="flex justify-center items-center mx-auto"
      >
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
