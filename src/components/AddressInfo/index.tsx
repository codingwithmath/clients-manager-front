import { Address } from "../../types/client";

import "./styles.css";

function AddressInfo({ address, number, zipCode, city, state }: Address) {
  return (
    <div className="address-container">
      <strong>Endereço</strong>
      <span>{address}</span>
      <span>Número: {number}</span>
      <span>
        CEP: {zipCode} - {city}, {state}
      </span>
    </div>
  );
}

export default AddressInfo;
