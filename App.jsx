import React, { useState } from 'react';
import { useFormState } from 'react-dom';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState('todo')

  // const [stateVariable, setterFunction] = useState(initialValue);

  // SUMMARY of using useState
  // 1. import useState from react
  // 2. call useState(initialValue) to create a state variable and a setter function
  // 3. use the state variable in your component
  // 4. use the setter function to update the state variable and trigger a re-render

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      // key: value
      title: title,
      description: description,
      date: new Date(date).toISOString(),
      status: status,
      created_at: new Date().toISOString()


    }

    console.log('formData:', formData);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={
            (e) => {
              console.log('event:', e.target.value) /* setTitle(e.target.value) */
              setTitle(e.target.value)
            }
          }
        />

        <br />

        <input
          type="text"
          value={description}
          placeholder='Description'
          onChange={
            (e) => {
              // e.target.value
              console.log(e.target.value);
              setDescription(e.target.value)
            }
          }
        />

        <br />

        <input
          type="date"
          value={date.toISOString().split('T')[0]}
          placeholder='Target Date'
          onChange={(e) => {
            setDate(new Date(e.target.value));
          }}
        />

        <br />

        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => {
            console.log(e.target.value);
            setStatus(e.target.value)
          }
          }
        >
          <option value=""></option>
          <option value="todo">Todo</option>
          <option value="started">Started</option>
          <option value="complete">Complete</option>
        </select>
        <br />
        <button type="submit">Add Todo</button>
      </form>

      <br />
      sample component to show requirements

      {/* <Requirements /> */}

      {/* <Item
        name="John"
        age={30}
        color="blue"
      />

      <Item
        name="Jane"
        age={25}
        color="red"
      />

      <Item
        name="Bob"
        age={40}
        color="green"
      />

      <Item
        name="Alice"
        age={35}
        color="yellow"
      /> */}

      {
        students.map(student => (
          <Item
            name={student.name}
            age={student.age + 2}
            color={student.color}
            location={student.city}
            verified={student.verified}
          />
        ))
      }
    </div>
  );
}

export default App;



const Item = (props) => {
  return <div
    style={{
      display: 'flex',
      flexDirection: "column",
      border: '1px solid green',
      padding: '10px',
      margin: '10px 0',
    }}
  >
    <hr />
    <div>
      Name: {props.name}
    </div>

    <div>
      Age: {props.age}
    </div>

    <div
      style={{
        color: props.color
      }}
    >
      Color: {props.color}
    </div>

    <div>
      location:{props.location}
    </div>

    <div>
      verified:
      <input
        type="checkbox"
        name="verify"
        id=""
        checked={props.verified}
      />
    </div>
  </div>
}

const Requirements = () => {
  return <div>
    <li>
      <ol>
        1. create react app
      </ol>
      <ol>
        2. Create a basic todo app (CRUD)
      </ol>

    </li>
    <li>
      <ul>
        form to add new todo (title, description, target date, status)
      </ul>
      <ul>
        list all your Todo's (status, and details)
      </ul>
      <ul>
          add todo status update (todo > started > complete)
      </ul>
      <ul>
        delete todo, when it done
      </ul>
    </li>

    <br />
    START HERE!
    < hr />
  </div>
}


const students = [
  {
    name: 'John',
    age: 20,
    city: 'New York',
    color: 'blue',
    verified: true,
  },
  {
    name: 'Jane',
    age: 22,
    city: 'London',
    color: 'red',
    verified: false,
  },
  {
    name: 'Bob',
    age: 25,
    city: 'Paris',
    color: 'green',
    verified: true,
  },
  {
    name: 'Alice',
    age: 28,
    city: 'Tokyo',
    color: 'yellow',
    verified: false,

  },
  {
    name: 'Mike',
    age: 30,
    city: 'Sydney',
    color: 'purple',
    verified: true,
  },
  {
    name: 'Jomar',
    age: 26,
    city: 'Manila new',
    color: 'orange',
    verified: true,
  }

]