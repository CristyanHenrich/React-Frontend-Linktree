import { About } from "./About";
import { Avatar } from "./Avatar";
import { Social } from "./Social";
import data from './data.json';
import { Projects } from "./Projects";

function App() {
  return (
    <div className="App">
      <Avatar avatar={data.avatar}/>
      <About name={data.name} about={data.about}/>
      <Social social={data.social}/>
      <Projects />
    </div>
  );
}

export default App;
