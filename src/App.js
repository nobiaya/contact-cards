import React from "react";
import "./styles.css";

const App = () => {
  const message = "This is my first variable rendered in JSX";
  
  return (
    <>
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Jenny Han"
        email="jenny.han@notreal.com"
        age={25}
      />
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Jason Long"
        email="jason.long@notreal.com"
        age={45}
      />
      <ContactCard 
        avatar="https://via.placeholder.com/150"
        name="Peter Pan"
        email="peter.pan@neverland.com"
        age={100}
      />
    </>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = React.useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email} </p>
        {/* line below is the same as {showAge === true ? <p>Age: 25</p> : null}*/}
        {showAge && <p>Age: {props.age} </p> }
        <button onClick={() => setShowAge(!showAge)}>
          Toggle age
        </button>
      </div>
    </div>
  );
};

export default App;