import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarioLogado, setUsuarioLogado] = useState<string | null>(null);

  const navigate = useNavigate();

  // Scroll to top once on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Verifica se usuário já está logado no localStorage
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      setUsuarioLogado(usuario);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você poderia validar o login real, por enquanto só salva no localStorage
    localStorage.setItem("usuario", email);
    setUsuarioLogado(email);

    alert(`Bem vindo, ${email}!`);
    navigate("/dashboard"); // Ajuste a rota conforme seu app
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
    <form onSubmit={handleLogin} className="max-w-sm mx-auto p-4">
      <h2 className=" text-neutral-300 text-2xl font-bold mb-6 text-center">Login</h2>

      <label htmlFor="email" className="block mb-4 font-medium text-neutral-300">
        Email:
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label htmlFor="senha" className="block mb-6 font-medium text-neutral-300">
        Senha:
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          autoComplete="current-password"
          className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Entrar
      </button>

      <p
        onClick={() => navigate("/register")}
        className="mt-6 text-center text-blue-600 hover:underline cursor-pointer"
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") navigate("/register");
        }}
      >
        Ainda não tem uma conta? Clique para criar uma!
      </p>
    </form>
  </div>
  );
};

export default Login;
