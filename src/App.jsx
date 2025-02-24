import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./components/Sidebar";
import MySkill from "./components/MySkill";
import MyCourse from "./components/MyCourse";
// import State from "./components/Hook/State";
// import Effect from "./components/Hook/Effect";




function App() {
  const skills = [
    {
      id      : 1,
      title   : "Web Development",
      desc    : "Join over 1 Millions Students",
      image   : "https://cdn-icons-png.flaticon.com/128/1336/1336494.png"
    },
    {
      id      : 2,
      title   : "Web Development",
      desc    : "Join over 1 Millions Students",
      image   : "https://cdn-icons-png.flaticon.com/128/59/59137.png"
    },
    {
      id      : 3,
      title   : "Web Development",
      desc    : "Join over 1 Millions Students",
      image   : "https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
    },
    {
      id      : 4,
      title   : "Web Development",
      desc    : "Join over 1 Millions Students",
      image   : "https://cdn-icons-png.flaticon.com/128/10212/10212965.png"
    }
  ]
  const course = [
    {
      id      : 1,
      title   : "Web Development",
      desc    : "Join over 1 Millions Students",
      image   : "https://cdn-icons-png.flaticon.com/128/1336/1336494.png"
    },
    {
      id      : 2,
      title   : "Web Development",
      desc    : "Join over 1 Millions Students",
      image   : "https://cdn-icons-png.flaticon.com/128/59/59137.png"
    },
    {
      id      : 3,
      title   : "Web Development",
      desc    : "Join over 1 Millions Students",
      image   : "https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
    }
  ]



  return (
    <>
      {/* <center> */}
        {/* <State/> */}
        {/* <Effect/>
      // </center> */}
      

      <div className='container container-box mt-5 p-1 d-flex justify-content-between'>
        <Sidebar/>
        <div className="content-box">
            <MySkill title="My Skill" skills={skills}/>
            <MyCourse title="My Course" course={course}/>
        </div>
      </div>
    </>
  );
}

export default App;
