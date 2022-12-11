import "./styles.css";
import { RiCloseLine } from "react-icons/ri";
import { IClient } from "../../types/client";
import Form from "../Form";
import api from "../../services/api";

interface IModalProps {
  closeModal: () => void;
  client: IClient;
  handleSubmit: (data: IClient) => Promise<void>;
}

const UpdateFormModal = ({ closeModal, client, handleSubmit }: IModalProps) => {
  return (
    <>
      <div className="darkBG" onClick={() => closeModal()} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Editar</h5>
          </div>
          <button className="closeBtn" onClick={() => closeModal()}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <Form onSubmit={handleSubmit} clientInfo={client} />
        </div>
      </div>
    </>
  );
};

export default UpdateFormModal;
