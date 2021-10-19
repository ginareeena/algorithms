// Front-end Challenge Medium
// We provided some simple React template code. Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered. This way the application can function as a simple phone book. When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:

// First name = Coder
// Last name = Byte
// Phone = 8885559999

// You are free to add classes and styles, but make sure you leave the element ID's as they are. Submit your code once it is complete and our system will validate your output.

import React, {useState} from "react";
import ReactDom from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

//PhoneBookForm ({addEntryToPhoneBook})


function PhoneBookForm({addEntryToPhoneBook}) {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastname, setUserLastName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addEntryToPhoneBook([userFirstName, userLastname, userPhone]);

    setUserFirstName("");
    setUserLastName("");
    setUserPhone("");
  }

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={userFirstName}
        onChange={(e) => {
          setUserFirstName(e.target.value);
        }}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={userLastname}
        onChange={(e) => {
          setUserLastName(e.target.value);
        }}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={userPhone}
        onChange={(e) => {
          setUserPhone(e.target.value);
        }}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable(props) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
    </table>
  );
}

function Entries({phoneBook = []}) {
  return (
    <thead>
      {phoneBook.map((entry, index) => (
        <tr key={index}>
          <th style={style.tableCell}>{entry[0]}</th>
          <th style={style.tableCell}>{entry[1]}</th>
          <th style={style.tableCell}>{entry[2]}</th>
        </tr>
      ))}
    </thead>
  );
}

function Application(props) {
  const [phoneBook, updatePhoneBook] = useState([
    ["Coder", "Byte", "8885559999"],
  ]);

  function addEntryToPhoneBook(newEntry) {
    updatePhoneBook([...phoneBook, newEntry]);
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable />
      <Entries phoneBook={phoneBook} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
