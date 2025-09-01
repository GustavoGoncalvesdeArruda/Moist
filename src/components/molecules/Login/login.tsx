import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarioLogado, setUsuarioLogado] = useState<string | null>(null);

  const navigate = useNavigate();

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

    alert(`Bem vindo, ${email}!`);

    // Navegar para página protegida após login
    navigate("/dashboard");  // ajuste a rota para onde quer levar o usuário
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
      <h2 className="text-xl font-bold mb-4">Login</h2>

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

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Entrar
      </button>

      <div
        onClick={() => navigate("/register")}
        className="mt-4 text-center text-blue-600 hover:underline cursor-pointer"
      >
        <p>Ainda não tem uma conta? Clique para criar uma!</p>
      </div>
    </form>
  );
};

export default Login;
