import { useEffect, useState } from "react";
import "./App.css";
import AddressForm from "./components/AddressForm";
import Card from "./components/Card";
import Form from "./components/Form";
import UpdateFormModal from "./components/UpdateFormModal";
import api from "./services/api";
import { Address, IClient } from "./types/client";

function App() {
  const [clients, setClients] = useState<IClient[]>([]);
  const [showNextForm, setShowNextForm] = useState<boolean>(false);
  const [currentClient, setCurrentClient] = useState<IClient>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentClientModal, setCurrentClientModal] = useState<IClient>();

  async function loadClients() {
    const response = await api.get("/clients");

    setClients(response.data);
  }

  useEffect(() => {
    loadClients();
  }, []);

  async function handleSubmit(data: IClient) {
    const response = await api.post("/clients", data);

    setShowNextForm(true);

    setCurrentClient(response.data);
  }

  async function handleAddressFormSubmit(data: Address) {
    const response = await api.post(
      `/client/${currentClient?.id}/address`,
      data
    );

    setShowNextForm(false);

    setClients([...clients, response.data]);
  }

  async function onDelete(id: number) {
    await api.delete(`/client/${id}`);

    await loadClients();
  }

  function onClickOpenModal(client: IClient) {
    setCurrentClientModal(client);
    setOpenModal(true);
  }

  function onClickCloseModal() {
    setOpenModal(false);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        {!showNextForm && <Form onSubmit={handleSubmit} />}
        {showNextForm && <AddressForm onSubmit={handleAddressFormSubmit} />}
      </aside>
      <main>
        <ul>
          {clients.map((client: IClient) => (
            <Card
              key={client.id}
              {...client}
              onDelete={onDelete}
              onClickOpenModal={onClickOpenModal}
            />
          ))}
        </ul>
        {openModal && (
          <UpdateFormModal
            closeModal={onClickCloseModal}
            client={currentClientModal as unknown as IClient}
          />
        )}
      </main>
    </div>
  );
}

export default App;
