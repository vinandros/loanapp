import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  return (
    <div>
      <Header title="Hola Mundo" />
      <div className="container">
        <Form
          amount={amount}
          setAmount={setAmount}
          term={term}
          setTerm={setTerm}
        />
      </div>
    </div>
  );
}

export default App;
