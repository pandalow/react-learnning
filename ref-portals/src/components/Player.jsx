import { useState ,useRef} from "react";

export default function Player() {

  const [name,setName] = useState("Unknown entity");
  const userName = useRef()

  function handleClick(){
    setName(userName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name??'Unknown entity'}</h2>
      <p>
        <input 
        type="text"  
        ref={userName}
        // onChange={handleChange} 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
