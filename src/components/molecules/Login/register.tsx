import { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [confirmesenha, setConfirmeSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");

  const [usuarioLogado, setUsuarioLogado] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      setUsuarioLogado(usuario);
    }
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmesenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          senha,
          endereco,
          telefone,
          cep,
        }),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        localStorage.setItem("usuario", email);
        setUsuarioLogado(email);
      } else {
        const erro = await response.json();
        alert(`Erro ao cadastrar: ${erro.message || 'Erro desconhecido'}`);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao conectar com o servidor.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuarioLogado(null);
  };

  if (usuarioLogado) {
    return (
      <div className="max-w-sm mx-auto p-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Bem-vindo, {usuarioLogado}!</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Sair
        </button>
      </div>
    );
  }

  return (
  <div className=" p-20px min-h-screen flex items-center justify-center bg-gradient-to-br bg-black">
    <form onSubmit={handleRegister} className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Crie sua conta</h2>

      <label htmlFor="nome" className="block mb-4 font-medium text-gray-700">
        Nome:
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="email" className="block mb-4 font-medium text-gray-700">
        Email:
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@gmail.com"
          autoComplete="email"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="senha" className="block mb-4 font-medium text-gray-700">
        Senha:
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          autoComplete="new-password"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="confirmesenha" className="block mb-4 font-medium text-gray-700">
        Confirme sua Senha:
        <input
          id="confirmesenha"
          type="password"
          value={confirmesenha}
          onChange={(e) => setConfirmeSenha(e.target.value)}
          required
          autoComplete="new-password"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="endereco" className="block mb-4 font-medium text-gray-700">
        Endereço:
        <input
          id="endereco"
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="telefone" className="block mb-4 font-medium text-gray-700">
        Telefone:
        <input
          id="telefone"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          placeholder="(99) 99999-9999"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="cep" className="block mb-6 font-medium text-gray-700">
        CEP:
        <input
          id="cep"
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
          placeholder="12345678"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Criar Conta
      </button>
    </form>
  </div>
  );
};

export default Register;
