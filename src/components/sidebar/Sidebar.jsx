// sidebar.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(
          "https://tpo-9ws3.onrender.com/api/companies"
        );
        setCompanies(res.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          <Link className="link" to="/home">
            ALL COMPANIES
          </Link>
        </span>
        <ul className="sidebarList">
          {companies.map((company) => (
            <Link
              to={`/home?comp=${company.name}`}
              className="link"
              key={company.id}
            >
              <li className="sidebarListItem">{company.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          <Link className="link" to="/home">
            ALL COMPANIES
          </Link>
        </span>
      </div>
    </div>
  );
}
