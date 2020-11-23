import React from "react";
import "./styles.css";

const App = () => {

  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map(contact => (
        <ContactCard 
         avatar={contact.picture.large}
         name={contact.name.first + " " + contact.name.last}
         email={contact.email}
         age={contact.dob.age}
        />
      ))}
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
        <p>text</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle age
        </button>
      </div>
    </div>
  );
};

export default App;
