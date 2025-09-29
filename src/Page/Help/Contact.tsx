import { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const TelaDeContato: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-5 py-10">
      <div className="w-full max-w-lg p-8 rounded-2xl bg-black text-gray-200">
        <h2 className="text-2xl font-bold text-center my-8 text-white">
          Contato
        </h2>

        <div className="space-y-6">


          {/* E-mail */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
            <FaEnvelope className="text-indigo-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">E-mail</p>
              <p className="text-base text-white">contato@empresa.com</p>
            </div>
          </div>


          {/* Telefone */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
            <FaPhoneAlt className="text-indigo-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">Telefone</p>
              <p className="text-base text-white">(11) 1234-5678</p>
            </div>
          </div>


          {/* WhatsApp */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
            <FaWhatsapp className="text-green-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">WhatsApp</p>
              <p className="text-base text-white">+55 (11) 98765-4321</p>
            </div>
          </div>


          {/* Endereço */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">Endereço</p>
              <p className="text-base text-white">
                Rua Exemplo, 123 - Centro, São Paulo - SP
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Entre em contato pelo canal que preferir.
        </p>
      </div>
    </div>
  );
};

export default TelaDeContato;
