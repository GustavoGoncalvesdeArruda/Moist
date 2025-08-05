export interface Produto {
    id: string;
    titulo: string;
    preco: string;
    imagem: string;
    imagemdesc: string;
    desc: string;
    categoria: string,
    tamanhos: string[];
    cores: string[];
  }
  
  import { useSearchParams } from 'react-router-dom';

const ProdutosPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const produtosFiltrados = produtos.filter(p =>
    p.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Produtos</h1>
      {/* renderiza produtosFiltrados */}
    </div>
  );
};

  {/*
        {
      id: '',
      titulo: '',
      preco: 'R$',
      imagem: '',
      imagemdesc: '',
      desc:'',
      categoria: '',
      tamanhos: [];
      cores: [];
    },
    */}
  export const produtos: Produto[] = [
    {
      id: '1',
      titulo: 'Air Max Plus',
      preco: 'R$ 1.300,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/027876IEA1.jpg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Tenis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
      cores: ['Única'],
    },
    {
      id: '2',
      titulo: 'Air Max 95',
      preco: 'R$1.329,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/02280782A10.jpg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/02280782A3.jpg',
      desc: 'Modelo icônico, combina design clássico com tecnologias de amortecimento inovadoras.',
      categoria: 'Tenis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
      cores: ['Única'],
    },
    {
      id: '3',
      titulo: 'Air Max Plus',
      preco: 'R$1.234,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/02945851A10.jpg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Tenis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
      cores: ['Única'],
    },
    {
      id: '4',
      titulo: 'Nocta Glide',
      preco: 'R$1.280,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/02772951A13.jpg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Tenis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
      cores: ['Única'],
    },
    {
      id: '5',
      titulo: 'Air Max 97',
      preco: 'R$850,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/016324IGA10.jpg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Tenis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
      cores: ['Única'],
    },
    {
      id: '6',
      titulo: 'Shox R4',
      preco: 'R$1.199,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/060673IFA4.jpg',
      imagemdesc: 'https://pbs.twimg.com/media/GLecK8CWEAIn_HF.jpg:large',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Tenis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
      cores: ['Única'],
    },
    {
      id: '7',
      titulo: 'DN SE',
      preco: 'R$1.299,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/09249115A1.jpg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Tenis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
      cores: ['Única'],
    },
    {
      id: '8',
      titulo: 'Tech Fleece Preta',
      preco: 'R$ 460,00',
      imagem: 'https://acdn-us.mitiendanube.com/stores/003/869/613/products/download-5dd5c7a59f147ac8bc17025977919091-1024-1024.png',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G'],
      cores: ['Única'],
    },
    {
      id: '9',
      titulo: 'Tech Fleece Branca',
      preco: 'R$ 460,00',
      imagem: 'https://photos.enjoei.com.br/public/1200x1200/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zNzUwNTE0MC9iMWZjZThhYmZjYTQwZmVkMjNjZDFlOTk0NWE2MzdhZS5qcGc',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G'],
      cores: ['Única'],
    },
    {
      id: '10',
      titulo: 'Casaco Denim Tears Preto',
      preco: 'R$ 200,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgyV6OQ-IC9t0SYwzOxQZVozW-uPyONhEeAYpFz5CfzV-C_socVDC2IRogotvZ1xHius&usqp=CAU',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G'],
      cores: ['Única'],
    },
    {
      id: '11',
      titulo: 'Calça Denim Tears Preta',
      preco: 'R$ 200,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgfkrQ_kgZ5Lbn2Q5etaC7l1IXnlvfchaU0z0YceUCgZGp0RNp8XfJtwxt4ff9TwCIFs&usqp=CAU',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G'],
      cores: ['Única'],
    },
    {
      id: '12',
      titulo: 'Tech Fleece Branca/Preta/Cinza',
      preco: 'R$ 460,00',
      imagem: 'https://acdn-us.mitiendanube.com/stores/004/024/204/products/img_1186-04d435475671d6bce917018141890288-640-0.jpeg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G'],
      cores: ['Única'],
    },
    {
      id: '13',
      titulo: 'Nocta Azul Claro',
      preco: 'R$ 460,00',
      imagem: 'https://maltaesportes.com.br/wp-content/uploads/2024/01/AnyConv.com__50815b2e-595x446.webp',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G'],
      cores: ['Única'],
    },
    {
      id: '14',
      titulo: 'Nocta Verde Claro',
      preco: 'R$ 460,00',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CIllUQfeQXR8ayps-GW1cP-OiulXmHX0VeYgS7BaIArnWmbJZroNTKNQXXXDTYqml6g&usqp=CAU',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G'],
      cores: ['Única'],
    },
  ];
  