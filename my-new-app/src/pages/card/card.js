import dayjs from 'dayjs'
function Card() {
    const skills = ["java", "react", "python"];

    const data1=dayjs(Date.now());
    const diffInDays=data1.diff('2023-28-10', 'day')    
    return (
      <div>
        <h1>Front-end Developer</h1>
        <p>Full time : Fresher : In-office</p>
        <div></div>
        <div>
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
        <div>
        <div>
            <p> posted  {diffInDays}ago</p>
            <botton>Apply</botton>
        </div>
      </div>
      </div>
    );
  }
  
  export default Card;
