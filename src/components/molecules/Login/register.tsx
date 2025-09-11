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

  window.scrollTo(0, 0);

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
        })
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
      <div>
        <h2>Bem-vindo, {usuarioLogado}!</h2>
        <button onClick={handleLogout}>Sair</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleRegister} className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Crie sua conta</h2>

      <label className="block mb-2">
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1"
          placeholder="example@gmail.com"
        />
      </label>

      <label className="block mb-4">
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        Confirme sua Senha:
        <input
          type="password"
          value={confirmesenha}
          onChange={(e) => setConfirmeSenha(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        Endereço:
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        Telefone:
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1"
          placeholder="(99) 99999-9999"
        />
      </label>

      <label className="block mb-4">
        CEP:
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
          className="w-full p-2 border rounded mt-1"
          placeholder="12345678"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Criar Conta
      </button>
    </form>
  );
};

export default Register;
