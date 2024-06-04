import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormState {
  title: string;
  link: string;
  description: string;
}

function Create() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    title: "",
    link: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/anime`, form)
      .then((res) => {
        console.log(res.data);
        setForm({
          title: "",
          link: "",
          description: "",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="container">
      <div className="form_area">
        <h1 className="title">Share Anime</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form_group">
            <label htmlFor="title" className="sub_title">
              Anime Name
            </label>
            <input
              type="text"
              className="form_style"
              id="title"
              placeholder="Enter anime name"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="link" className="sub_title">
              Link
            </label>
            <input
              type="url"
              className="form_style"
              id="link"
              placeholder="Enter anime link"
              value={form.link}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label htmlFor="description" className="sub_title">
              Description
            </label>
            <input
              type="text"
              className="form_style"
              id="description"
              placeholder="Enter your description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Create;
