import { useState, useEffect } from "react";

const TelaDeContato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-200 px-5 py-10">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-xl p-10 sm:p-12">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-10 text-center">
          Suporte
        </h2>

        {formStatus && (
          <div
            className={`p-4 mb-6 rounded-lg text-center font-semibold ${
              formStatus === "Mensagem enviada com sucesso!"
                ? "bg-green-600 text-white"
                : "bg-red-200 text-red-700"
            }`}
            role="alert"
          >
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-indigo-800 mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
              className="w-full rounded-xl border border-indigo-300 px-4 py-3 text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-indigo-800 mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu e-mail"
              className="w-full rounded-xl border border-indigo-300 px-4 py-3 text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-indigo-800 mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem"
              rows={6}
              className="w-full rounded-xl border border-indigo-300 px-4 py-3 text-indigo-900 placeholder-indigo-400 resize-none focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl text-lg font-semibold text-white transition duration-300 ${
              isSubmitting
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TelaDeContato;
