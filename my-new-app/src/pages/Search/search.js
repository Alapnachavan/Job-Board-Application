import { useState } from "react";
import "./search.css";

function Search() {
    const[jobCriteria, setjobCriteria]=useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })
    const handleChange=(e) =>{
        setjobCriteria((pervState) =>({
            ...pervState,
            [e.target.name]:e.target.value
        }))
    }
    console.log(jobCriteria)

  return (
    <div className="searchbar">
      <select onChange={handleChange} name="title" value={jobCriteria.title}className="searchbar-1">
        <option value="" disabled selected hidden>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>

      <select onChange={handleChange} name="type" value={jobCriteria.type}className="searchbar-2">
        <option value="" disabled selected  hidden>Job Type</option>
        <option value="Full Time ">Full Time </option>
        <option value="part Time">part Time</option>
        <option value="Contract">Contract</option>
      </select>

      <select onChange={handleChange} name="experience" value={jobCriteria.experience}className="searchbar-3">
        <option value="" disable  selected hidden>Experince</option>
        <option value="fresher">fresher</option>
        <option value="junior level"> junior level</option>
        <option value="mid level">mid level</option>
        <option value="sinior level">sinior level</option>
      </select>

      <select  onChange={handleChange} name="location" value={jobCriteria.location}className="searchbar-4">
        <option value="" disable  selected hidden>Location</option>
        <option value="iOS Developer">work form home</option>
        <option value="Frontend Developer">in-office</option>
      </select>
      <button className="search-button">
        Search
      </button>
     
    </div>
  );
}

export default Search;
