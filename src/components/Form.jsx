import React, { useState } from "react";
import { calc } from "../helpers";
const Form = (props) => {
  const { amount, setAmount, term, setTerm, setTotal, setLoading } = props;
  const [error, setError] = useState(false);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (amount === 0 || term === "") {
      setError(true);
      console.log("error");
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(() => {
      const finalAccount = calc(amount, term);
      setTotal(finalAccount);
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => setTerm(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error && <p className="error">Todos los campos son obligatorios.</p>}
    </>
  );
};

export default Form;
