import { useState } from "react";
import jobData from "../card/data"; 
import Card from "../card/card";
import "./search.css";

function Search() {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: ""
  });

  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = () => {
    const filtered = jobData.filter((job) => {
      return (
        (jobCriteria.title === "" || job.title === jobCriteria.title) &&
        (jobCriteria.location === "" || job.location === jobCriteria.location) &&
        (jobCriteria.experience === "" || job.experience === jobCriteria.experience) &&
        (jobCriteria.type === "" || job.type.toLowerCase().includes(jobCriteria.type.toLowerCase()))
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <div className="searchbar">
        <select onChange={handleChange} name="title" value={jobCriteria.title} className="searchbar-1">
          <option value="" disabled hidden>Job Role</option>
          <option value="iOS Developer">iOS Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Developer Advocate">Developer Advocate</option>
        </select>

        <select onChange={handleChange} name="type" value={jobCriteria.type} className="searchbar-2">
          <option value="" disabled hidden>Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>

        <select onChange={handleChange} name="experience" value={jobCriteria.experience} className="searchbar-3">
          <option value="" disabled hidden>Experience</option>
          <option value="fresher">Fresher</option>
          <option value="junior level">Junior Level</option>
          <option value="mid level">Mid Level</option>
          <option value="senior level">Senior Level</option>
        </select>

        <select onChange={handleChange} name="location" value={jobCriteria.location} className="searchbar-4">
          <option value="" disabled hidden>Location</option>
          <option value="work from home">Work from Home</option>
          <option value="in-office">In-Office</option>
          <option value="Remote">Remote</option>
        </select>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <Card jobs={filteredJobs} />
    </div>
  );
}

export default Search;
