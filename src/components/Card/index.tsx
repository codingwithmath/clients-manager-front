import { Address, IClient } from "../../types/client";
import AddressInfo from "../AddressInfo";
import "./styles.css";

interface ICardProps extends IClient {
  onDelete: (id: number) => void;
  onClickOpenModal: (client: IClient) => void;
}

function Card({
  id,
  name,
  birthDate,
  rg,
  cpf,
  phone,
  addresses,
  onDelete,
  onClickOpenModal,
}: ICardProps) {
  return (
    <li className="card">
      <header>
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          }
          alt={name}
        ></img>
        <div className="user-info">
          <strong>{name}</strong>
          <span>{birthDate}</span>
          <span
            id="update"
            onClick={() =>
              onClickOpenModal({
                id,
                name,
                birthDate,
                rg,
                cpf,
                phone,
                addresses,
              })
            }
          >
            editar
          </span>
          <span id="delete" onClick={() => onDelete(id as unknown as number)}>
            excluir
          </span>
        </div>
      </header>
      <div className="user-info documents">
        <span>RG:</span>
        <strong>{rg}</strong>
        <span>CPF:</span>
        <strong>{cpf}</strong>
        <span>Telefone:</span>
        <strong>{phone}</strong>
      </div>
      {addresses && (
        <div>
          {addresses.map((address: Address) => (
            <AddressInfo key={address.id} {...address} />
          ))}
        </div>
      )}
    </li>
  );
}

export default Card;
