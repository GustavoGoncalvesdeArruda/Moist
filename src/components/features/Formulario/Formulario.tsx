import { useState } from 'react';
import axios from 'axios';

interface UserData {
  cpf: string;
  nome: string;
  telefone: string;
  endereco: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

interface FormularioCompraProps {
  onSubmit: (userData: UserData) => void;
}

const FormularioCompra = ({ onSubmit }: FormularioCompraProps) => {
  const [userData, setUserData] = useState<UserData>({
    cpf: '',
    nome: '',
    telefone: '',
    endereco: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add', userData);
      onSubmit(userData);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="mt-5 p-8 rounded-xl shadow-lg w-full max-w-xl mx-auto bg-white">
      <h3 className="text-center text-xl font-semibold text-gray-800 mb-6">
        Preencha seus dados de compra
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Nome Completo */}
        <div className="mb-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome Completo"
            value={userData.nome}
            onChange={handleFormChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 text-base"
          />
        </div>

        {/* CPF */}
        <div className="mb-4">
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={userData.cpf}
            onChange={handleFormChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 text-base"
          />
        </div>

        {/* Telefone */}
        <div className="mb-4">
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={userData.telefone}
            onChange={handleFormChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 text-base"
          />
        </div>

        <h4 className="text-lg font-medium text-gray-700 mb-2">Endereço</h4>

        <div className="flex gap-4 mb-4">
          {/* Rua */}
          <input
            type="text"
            name="rua"
            placeholder="Rua"
            value={userData.rua}
            onChange={handleFormChange}
            required
            className="flex-1 p-3 rounded-md border border-gray-300 text-base"
          />

          {/* Número */}
          <input
            type="text"
            name="numero"
            placeholder="Número"
            value={userData.numero}
            onChange={handleFormChange}
            required
            className="w-1/4 p-3 rounded-md border border-gray-300 text-base"
          />
        </div>

        <div className="flex gap-4 mb-4">
          {/* Bairro */}
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={userData.bairro}
            onChange={handleFormChange}
            required
            className="flex-1 p-3 rounded-md border border-gray-300 text-base"
          />

          {/* Cidade */}
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={userData.cidade}
            onChange={handleFormChange}
            required
            className="flex-1 p-3 rounded-md border border-gray-300 text-base"
          />
        </div>

        <div className="flex gap-4 mb-6">
          {/* Estado */}
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={userData.estado}
            onChange={handleFormChange}
            required
            className="w-1/2 p-3 rounded-md border border-gray-300 text-base"
          />

          {/* CEP */}
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={userData.cep}
            onChange={handleFormChange}
            required
            className="w-1/2 p-3 rounded-md border border-gray-300 text-base"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md text-lg font-semibold transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioCompra;
