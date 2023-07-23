import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

const MAX_TITLE_LENGTH = 50;
const MAX_DESC_LENGTH = 5000;

export default function Write() {
  const famousITCompanies = [
    "Accenture",
    "Adobe",
    "Amazon",
    "Apple",
    "Capgemini",
    "Cerner",
    "Cisco",
    "Cognizant",
    "Daffodil Software",
    "Dell",
    "Dboi",
    "Facebook",
    "Google",
    "HCL",
    "Hexaware",
    "HP",
    "IBM",
    "Infosys",
    "Intel",
    "L&T Infotech",
    "Microsoft",
    "Mindtree",
    "Mphasis",
    "Oracle",
    "Persistent Systems",
    "Phonpay",
    "SAP",
    "TCS",
    "Tech Mahindra",
    "ThoughtWorks",
    "Visa",
    "Wipro",
    "Zoho Corporation",
    "ZS Associates",
  ];

  const defaultImage =
    "https://cdn.pixabay.com/photo/2015/11/02/12/31/interview-1018333_1280.png"; // Replace with your default image URL

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [companies, setCompanies] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }
    if (desc.trim() === "") {
      alert("Please enter a description.");
      return;
    }
    if (title.length > MAX_TITLE_LENGTH) {
      alert(`Title must be less than ${MAX_TITLE_LENGTH} characters.`);
      return;
    }
    if (desc.length > MAX_DESC_LENGTH) {
      alert(`Description must be less than ${MAX_DESC_LENGTH} characters.`);
      return;
    }

    const newPost = {
      username: user.username,
      title,
      desc,
      companies,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("https://tpo-9ws3.onrender.com/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "https://tpo-9ws3.onrender.com/api/posts",
        newPost
      );
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  return (
    <div className="write">
      <h2 className="writeTitle">Write Your Interview Experience</h2>
      {file ? (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      ) : (
        <img className="writeImg" src={defaultImage} alt="Default" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            maxLength={MAX_TITLE_LENGTH}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="characterCount">
            {title.length}/{MAX_TITLE_LENGTH}
          </span>
        </div>
        <div>
          <select
            className="companies"
            value={companies}
            onChange={(e) => setCompanies(e.target.value)}
          >
            <option value="">-- Select Company --</option>
            {famousITCompanies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your interview experience here...."
            className="writeInput writeText"
            value={desc}
            maxLength={MAX_DESC_LENGTH}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <span className="characterCount">
            {desc.length}/{MAX_DESC_LENGTH}
          </span>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
