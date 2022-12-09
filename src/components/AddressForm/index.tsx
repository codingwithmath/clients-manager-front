import { useState, useEffect } from "react";
import { Address, IClient } from "../../types/client";

import "./styles.css";

interface IFormProps {
  onSubmit: (data: Address) => void;
}

function AddressForm({ onSubmit }: IFormProps) {
  const [address, setAddress] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [reference, setReference] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");

  async function handleAddClient(e: React.FormEvent) {
    e.preventDefault();

    await onSubmit({
      address,
      neighborhood,
      complement,
      reference,
      zipCode,
      number,
      country,
      state,
      city,
    });

    setAddress("");
    setNeighborhood("");
    setComplement("");
    setReference("");
    setZipCode("");
    setNumber("");
    setCountry("");
    setState("");
    setCity("");
  }

  return (
    <form onSubmit={handleAddClient}>
      <div className="input-block">
        <label htmlFor="country">País</label>
        <input
          name="country"
          id="country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="state">UF</label>
        <input
          name="state"
          id="state"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="city">Cidade</label>
        <input
          name="city"
          id="city"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="address">Endereço</label>
        <input
          name="address"
          id="address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="neighborhood">Bairro</label>
        <input
          name="neighborhood"
          id="neighborhood"
          required
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="complement">Complemento</label>
        <input
          name="complement"
          id="complement"
          required
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="reference">Referência</label>
        <input
          name="reference"
          id="reference"
          required
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="zipCode">CEP</label>
          <input
            name="zipCode"
            id="zipCode"
            required
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="number">Número</label>
          <input
            name="number"
            id="number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default AddressForm;
