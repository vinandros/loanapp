import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Msg from "./components/Msg";
import Result from "./components/Result";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  let component;
  if (loading) {
    component = <Spinner />;
  } else if (total === 0) {
    component = <Msg />;
  } else {
    component = <Result total={total} amount={amount} term={term} />;
  }
  return (
    <div>
      <Header title="Calculadora de préstamos" />
      <div className="container">
        <Form
          amount={amount}
          setAmount={setAmount}
          term={term}
          setTerm={setTerm}
          setTotal={setTotal}
          setLoading={setLoading}
        />
        <div className="mensajes">{component}</div>
      </div>
    </div>
  );
}

export default App;
