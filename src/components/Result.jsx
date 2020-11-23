const Result = ({ total, amount, term }) => (
  <div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p>La cantidad solicitada es de $ {amount}</p>
    <p>A pagar en: {term} meses</p>
    <p>Su pago mensual es de: {(total / term).toFixed(2)} meses</p>
    <p>Total a pagar: $ {total.toFixed(2)}</p>
  </div>
);

export default Result;
