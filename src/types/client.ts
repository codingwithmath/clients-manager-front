export type Address = {
  id?: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: string;
  complement?: string;
  reference?: string;
  zipCode: string;
};

export interface IClient {
  id?: number;
  name: string;
  birthDate: string;
  rg: string;
  cpf: string;
  phone: string;
  addresses?: Address[];
}
