import { useState } from "react";

const TelaDeContato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string>('');
  window.scrollTo(0, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Enviando...');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Mensagem enviada com sucesso!');
      setFormData({ nome: '', email: '', mensagem: '' });
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen py-10 px-5">
      <div className="bg-white rounded-2xl p-10 shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Suporte
        </h2>

        {formStatus && (
          <div
            className={`p-4 mb-5 text-center rounded-lg ${
              formStatus === 'Mensagem enviada com sucesso!'
                ? 'bg-green-500 text-white'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nome" className="block text-base font-medium text-gray-700 mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu e-mail"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-base font-medium text-gray-700 mb-2">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem"
              rows={6}
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl text-lg font-semibold text-white transition duration-300 ${
              isSubmitting ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TelaDeContato;
