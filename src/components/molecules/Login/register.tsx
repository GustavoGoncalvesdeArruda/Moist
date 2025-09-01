import { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [confirmesenha, setConfirmeSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  
  const [usuarioLogado, setUsuarioLogado] = useState<string | null>(null);

  // Ao carregar, verifica se o usuário já está logado
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      setUsuarioLogado(usuario);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Salvar no localStorage (simples, para demonstração)
    localStorage.setItem("usuario", email);
    setUsuarioLogado(email);
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
    <form onSubmit={handleLogin} className="max-w-sm mx-auto p-4">
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

     <label>
        <input 
        type="number" 
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
        className="w-full p-2 border rounded mt-1"
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
