import { useState, useEffect } from "react";
import { IClient } from "../../types/client";

import "./styles.css";

interface IFormProps {
  onSubmit: (data: IClient) => Promise<void>;
  clientInfo?: IClient;
}

function Form({ onSubmit, clientInfo }: IFormProps) {
  const [name, setName] = useState<string | undefined>(clientInfo?.name);
  const [birthDate, setBirthDate] = useState<string | undefined>(
    clientInfo?.birthDate
  );
  const [rg, setRg] = useState<string | undefined>(clientInfo?.rg);
  const [cpf, setCpf] = useState<string | undefined>(clientInfo?.cpf);
  const [phone, setPhone] = useState<string | undefined>(clientInfo?.phone);

  async function handleAddClient(e: React.FormEvent) {
    e.preventDefault();

    await onSubmit({
      id: clientInfo ? clientInfo.id : undefined,
      name: name as unknown as string,
      birthDate: birthDate as unknown as string,
      rg: rg as unknown as string,
      cpf: cpf as unknown as string,
      phone: phone as unknown as string,
    });

    setName("");
    setBirthDate("");
    setRg("");
    setCpf("");
    setPhone("");
  }

  return (
    <form onSubmit={handleAddClient}>
      <div className="input-block">
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="birthDate">Data de nascimento</label>
        <input
          name="birthDate"
          id="birthDate"
          required
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="phone">Telefone</label>
        <input
          name="phone"
          id="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="rg">RG</label>
          <input
            name="rg"
            id="rg"
            required
            value={rg}
            onChange={(e) => setRg(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="cpf">CPF</label>
          <input
            name="cpf"
            id="cpf"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Form;
