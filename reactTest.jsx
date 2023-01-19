import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from './queries';

// Example 1:

function Example1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


// What is the purpose of the useState hook in this code?

// How does the setCount function work?

// How would you add a condition to the component to only increment the count if it's an even number?



// Example 2:

function Example2({ data }) {
  useEffect(() => {
    console.log(data);
  });

  return <div>Data: {data}</div>;
}


// What is the purpose of the useEffect hook in this code?

// How would you update the component to only execute the effect when the data prop changes?

// How would you update the component to only execute on first render?



// Example 3:

function Example3() {
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <input type="text" name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

// How does the handleChange function work?

// What is the purpose of the name attribute on the input elements?

// How would you access the form data in a parent component?

// How would you validate the form data before submitting it?

// How would you handle the form submission?



// Example 4:

function Example4() {
  const [todo, setTodo] = useState('');
  const [addTodo, { data }] = useMutation(ADD_TODO);

  const handleSubmit = event => {
    event.preventDefault();
    addTodo({ variables: { text: todo } });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={event => setTodo(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

// What is the purpose of the useMutation hook in this code?

// How does the handleSubmit function work?

// How would you handle the case when the mutation returns an error?

// How would you handle the case when the mutation is loading?

// How would you handle the case when the mutation is successful?