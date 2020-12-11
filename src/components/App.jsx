import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="https://media-exp1.licdn.com/dms/image/C4D35AQG-o160TSNjlw/profile-framedphoto-shrink_200_200/0/1606768159295?e=1607734800&v=beta&t=f1GroBz8TJ3MtuOaq4GXpe0L_8j_PCClt9e-E_34B5o" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
