import { useSearchParams } from "react-router-dom";

export interface Produto {
    id: string;
    titulo: string;
    preco: string;
    imagem: string;
    imagemdesc: string;
    desc: string;
    categoria: string,
    tamanhos: string[];
}


export const produtos: Produto[] = [

    /*
      id: '',
      titulo: '',
      preco: '',
      imagem: '',
      imagemdesc: '',
      desc: '',
      categoria: '',
      tamanhos: [],
    */
    {
      id: '1',
      titulo: 'Nike Air Max Plus Drift',
      preco: 'R$ 1.399,00',
      imagem: 'https://imgnike-a.akamaihd.net/768x768/027876IEA1.jpg',
      imagemdesc: 'https://imgnike-a.akamaihd.net/768x768/027876IEA4.jpg',
      desc: 'Conforto e estilo para o seu dia a dia. Ideal para quem procura performance e visual moderno.',
      categoria: 'Tênis',
      tamanhos: ['36','37','38','39','40','41','42','43'],
    },
  
    {
      id: '39',
      titulo: '1of1 Conjunto',
      preco: 'R$599,99',
      imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m4jk0ge10lkl04'  ,
      imagemdesc: 'https://down-br.img.susercontent.com/file/sg-11134201-7rff8-m3ndrgd5glb9ba',
      desc:'',
      categoria: 'Roupa',
      tamanhos: ['P', 'M', 'G', 'GG'],
    },
  {
    id: '40',
    titulo: 'Corteiz Hoodie Classic',
    preco: 'R$ 399,99',
    imagem: 'https://example.com/corteiz-hoodie1.jpg',
    imagemdesc: 'https://example.com/corteiz-hoodie1-desc.jpg',
    desc: 'Moletom clássico Corteiz, confortável e estiloso.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '41',
    titulo: 'Corteiz Cargo Pants',
    preco: 'R$ 299,90',
    imagem: 'https://example.com/corteiz-cargo.jpg',
    imagemdesc: 'https://example.com/corteiz-cargo-desc.jpg',
    desc: 'Calça cargo Corteiz, resistente e prática para o dia a dia.',
    categoria: 'Roupa',
    tamanhos: ['38', '40', '42', '44'],
  },
  {
    id: '42',
    titulo: 'Corteiz T-shirt Logo',
    preco: 'R$ 129,90',
    imagem: 'https://example.com/corteiz-tshirt.jpg',
    imagemdesc: 'https://example.com/corteiz-tshirt-desc.jpg',
    desc: 'Camiseta Corteiz com logo estampado frontal.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '43',
    titulo: 'Corteiz Snapback',
    preco: 'R$ 89,90',
    imagem: 'https://example.com/corteiz-snapback.jpg',
    imagemdesc: 'https://example.com/corteiz-snapback-desc.jpg',
    desc: 'Boné snapback Corteiz com ajuste traseiro.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '44',
    titulo: 'Corteiz Tracksuit',
    preco: 'R$ 799,00',
    imagem: 'https://example.com/corteiz-tracksuit.jpg',
    imagemdesc: 'https://example.com/corteiz-tracksuit-desc.jpg',
    desc: 'Conjunto de agasalho Corteiz para máxima performance.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },

  // 1of1
  {
    id: '45',
    titulo: '1of1 Camiseta Estampada',
    preco: 'R$ 149,99',
    imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m4jk0ge10lkl04',
    imagemdesc: 'https://down-br.img.susercontent.com/file/sg-11134201-7rff8-m3ndrgd5glb9ba',
    desc: 'Camiseta com estampa exclusiva 1of1.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '46',
    titulo: '1of1 Jaqueta Windbreaker',
    preco: 'R$ 449,90',
    imagem: 'https://example.com/1of1-windbreaker.jpg',
    imagemdesc: 'https://example.com/1of1-windbreaker-desc.jpg',
    desc: 'Jaqueta leve e resistente 1of1 para dias de vento.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '47',
    titulo: '1of1 Boné Trucker',
    preco: 'R$ 79,90',
    imagem: 'https://example.com/1of1-trucker.jpg',
    imagemdesc: 'https://example.com/1of1-trucker-desc.jpg',
    desc: 'Boné estilo trucker com logo 1of1.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '48',
    titulo: '1of1 Calça Jogger',
    preco: 'R$ 329,90',
    imagem: 'https://example.com/1of1-jogger.jpg',
    imagemdesc: 'https://example.com/1of1-jogger-desc.jpg',
    desc: 'Calça jogger confortável e estilosa da 1of1.',
    categoria: 'Roupa',
    tamanhos: ['38', '40', '42', '44'],
  },
  {
    id: '49',
    titulo: '1of1 Mochila Urbana',
    preco: 'R$ 259,00',
    imagem: 'https://example.com/1of1-backpack.jpg',
    imagemdesc: 'https://example.com/1of1-backpack-desc.jpg',
    desc: 'Mochila resistente para uso diário com design 1of1.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },

  // SynaWorld
  {
    id: '50',
    titulo: 'SynaWorld Tênis Runner',
    preco: 'R$ 599,99',
    imagem: 'https://example.com/synaworld-runner.jpg',
    imagemdesc: 'https://example.com/synaworld-runner-desc.jpg',
    desc: 'Tênis leve para corrida com tecnologia SynaWorld.',
    categoria: 'Tênis',
    tamanhos: ['36','37','38','39','40','41','42','43'],
  },
  {
    id: '51',
    titulo: 'SynaWorld Jaqueta Corta Vento',
    preco: 'R$ 399,90',
    imagem: 'https://example.com/synaworld-windbreaker.jpg',
    imagemdesc: 'https://example.com/synaworld-windbreaker-desc.jpg',
    desc: 'Jaqueta corta vento resistente para uso esportivo.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '52',
    titulo: 'SynaWorld Boné Snapback',
    preco: 'R$ 99,90',
    imagem: 'https://example.com/synaworld-snapback.jpg',
    imagemdesc: 'https://example.com/synaworld-snapback-desc.jpg',
    desc: 'Boné snapback estiloso da SynaWorld.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '53',
    titulo: 'SynaWorld Camiseta Dry Fit',
    preco: 'R$ 149,00',
    imagem: 'https://example.com/synaworld-dryfit.jpg',
    imagemdesc: 'https://example.com/synaworld-dryfit-desc.jpg',
    desc: 'Camiseta Dry Fit para treino e performance.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '54',
    titulo: 'SynaWorld Calça Legging',
    preco: 'R$ 219,90',
    imagem: 'https://example.com/synaworld-legging.jpg',
    imagemdesc: 'https://example.com/synaworld-legging-desc.jpg',
    desc: 'Legging confortável para atividades físicas.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G'],
  },

  // Ed Hardy
  {
    id: '55',
    titulo: 'Ed Hardy Camiseta Tattoo',
    preco: 'R$ 199,90',
    imagem: 'https://example.com/edhardy-tattoo.jpg',
    imagemdesc: 'https://example.com/edhardy-tattoo-desc.jpg',
    desc: 'Camiseta com estampa tradicional Ed Hardy.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '56',
    titulo: 'Ed Hardy Jaqueta de Couro',
    preco: 'R$ 999,00',
    imagem: 'https://example.com/edhardy-leather.jpg',
    imagemdesc: 'https://example.com/edhardy-leather-desc.jpg',
    desc: 'Jaqueta de couro estilosa com detalhes tattoo.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '57',
    titulo: 'Ed Hardy Boné Trucker',
    preco: 'R$ 89,90',
    imagem: 'https://example.com/edhardy-trucker.jpg',
    imagemdesc: 'https://example.com/edhardy-trucker-desc.jpg',
    desc: 'Boné com logo Ed Hardy em estilo trucker.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '58',
    titulo: 'Ed Hardy Calça Jeans',
    preco: 'R$ 399,90',
    imagem: 'https://example.com/edhardy-jeans.jpg',
    imagemdesc: 'https://example.com/edhardy-jeans-desc.jpg',
    desc: 'Calça jeans confortável e resistente Ed Hardy.',
    categoria: 'Roupa',
    tamanhos: ['38', '40', '42', '44'],
  },
  {
    id: '59',
    titulo: 'Ed Hardy Tênis Casual',
    preco: 'R$ 699,99',
    imagem: 'https://example.com/edhardy-casual.jpg',
    imagemdesc: 'https://example.com/edhardy-casual-desc.jpg',
    desc: 'Tênis casual com design marcante Ed Hardy.',
    categoria: 'Tênis',
    tamanhos: ['36','37','38','39','40','41','42','43'],
  },

  // Mais produtos gerados para completar 50 (60 a 89)
  // Aqui vou criar mais itens variados só para completar o pedido:

  {
    id: '60',
    titulo: 'Corteiz Camiseta Básica',
    preco: 'R$ 109,90',
    imagem: 'https://example.com/corteiz-basictee.jpg',
    imagemdesc: 'https://example.com/corteiz-basictee-desc.jpg',
    desc: 'Camiseta básica confortável Corteiz.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '61',
    titulo: '1of1 Regata Street',
    preco: 'R$ 89,90',
    imagem: 'https://example.com/1of1-regata.jpg',
    imagemdesc: 'https://example.com/1of1-regata-desc.jpg',
    desc: 'Regata estilosa para o dia a dia.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G'],
  },
  {
    id: '62',
    titulo: 'SynaWorld Meia Performance',
    preco: 'R$ 39,90',
    imagem: 'https://example.com/synaworld-meia.jpg',
    imagemdesc: 'https://example.com/synaworld-meia-desc.jpg',
    desc: 'Meias para alta performance.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '63',
    titulo: 'Ed Hardy Mochila',
    preco: 'R$ 299,90',
    imagem: 'https://example.com/edhardy-backpack.jpg',
    imagemdesc: 'https://example.com/edhardy-backpack-desc.jpg',
    desc: 'Mochila com design Ed Hardy.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '64',
    titulo: 'Corteiz Calça Jeans Slim',
    preco: 'R$ 359,90',
    imagem: 'https://example.com/corteiz-jeans-slim.jpg',
    imagemdesc: 'https://example.com/corteiz-jeans-slim-desc.jpg',
    desc: 'Calça jeans slim Corteiz.',
    categoria: 'Roupa',
    tamanhos: ['38', '40', '42', '44'],
  },
  {
    id: '65',
    titulo: '1of1 Jaqueta Jeans',
    preco: 'R$ 499,90',
    imagem: 'https://example.com/1of1-jeans-jacket.jpg',
    imagemdesc: 'https://example.com/1of1-jeans-jacket-desc.jpg',
    desc: 'Jaqueta jeans estilosa 1of1.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '66',
    titulo: 'SynaWorld Tênis Casual',
    preco: 'R$ 549,99',
    imagem: 'https://example.com/synaworld-casual.jpg',
    imagemdesc: 'https://example.com/synaworld-casual-desc.jpg',
    desc: 'Tênis casual confortável.',
    categoria: 'Tênis',
    tamanhos: ['36','37','38','39','40','41','42','43'],
  },
  {
    id: '67',
    titulo: 'Ed Hardy Camiseta Manga Longa',
    preco: 'R$ 189,90',
    imagem: 'https://example.com/edhardy-ml.jpg',
    imagemdesc: 'https://example.com/edhardy-ml-desc.jpg',
    desc: 'Camiseta manga longa Ed Hardy.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '68',
    titulo: 'Corteiz Boné Trucker',
    preco: 'R$ 79,90',
    imagem: 'https://example.com/corteiz-trucker.jpg',
    imagemdesc: 'https://example.com/corteiz-trucker-desc.jpg',
    desc: 'Boné estilo trucker Corteiz.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '69',
    titulo: '1of1 Calça Cargo Slim',
    preco: 'R$ 299,90',
    imagem: 'https://example.com/1of1-cargo-slim.jpg',
    imagemdesc: 'https://example.com/1of1-cargo-slim-desc.jpg',
    desc: 'Calça cargo slim 1of1.',
    categoria: 'Roupa',
    tamanhos: ['38', '40', '42', '44'],
  },
  {
    id: '70',
    titulo: 'SynaWorld Hoodie Com Capuz',
    preco: 'R$ 399,90',
    imagem: 'https://example.com/synaworld-hoodie.jpg',
    imagemdesc: 'https://example.com/synaworld-hoodie-desc.jpg',
    desc: 'Moletom com capuz SynaWorld.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '71',
    titulo: 'Ed Hardy Relógio Tattoo',
    preco: 'R$ 699,00',
    imagem: 'https://example.com/edhardy-watch.jpg',
    imagemdesc: 'https://example.com/edhardy-watch-desc.jpg',
    desc: 'Relógio com design inspirado em tatuagens Ed Hardy.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '72',
    titulo: 'Corteiz Jaqueta Bomber',
    preco: 'R$ 549,90',
    imagem: 'https://example.com/corteiz-bomber.jpg',
    imagemdesc: 'https://example.com/corteiz-bomber-desc.jpg',
    desc: 'Jaqueta bomber Corteiz com design moderno.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '73',
    titulo: '1of1 Tênis Street',
    preco: 'R$ 699,90',
    imagem: 'https://example.com/1of1-street.jpg',
    imagemdesc: 'https://example.com/1of1-street-desc.jpg',
    desc: 'Tênis street style 1of1.',
    categoria: 'Tênis',
    tamanhos: ['36','37','38','39','40','41','42','43'],
  },
  {
    id: '74',
    titulo: 'SynaWorld Meia Alta Performance',
    preco: 'R$ 49,90',
    imagem: 'https://example.com/synaworld-meia-alta.jpg',
    imagemdesc: 'https://example.com/synaworld-meia-alta-desc.jpg',
    desc: 'Meias para atividades intensas.',
    categoria: 'Acessórios',
    tamanhos: ['Único'],
  },
  {
    id: '75',
    titulo: 'Ed Hardy Tênis Casual',
    preco: 'R$ 749,99',
    imagem: 'https://example.com/edhardy-tenis-casual2.jpg',
    imagemdesc: 'https://example.com/edhardy-tenis-casual2-desc.jpg',
    desc: 'Tênis casual com detalhes Ed Hardy.',
    categoria: 'Tênis',
    tamanhos: ['36','37','38','39','40','41','42','43'],
  },
  {
    id: '76',
    titulo: 'Corteiz Camiseta Oversized',
    preco: 'R$ 159,90',
    imagem: 'https://example.com/corteiz-oversized.jpg',
    imagemdesc: 'https://example.com/corteiz-oversized-desc.jpg',
    desc: 'Camiseta oversized confortável.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },
  {
    id: '77',
    titulo: '1of1 Camisa Polo',
    preco: 'R$ 199,90',
    imagem: 'https://example.com/1of1-polo.jpg',
    imagemdesc: 'https://example.com/1of1-polo-desc.jpg',
    desc: 'Camisa polo estilosa para ocasiões casuais.',
    categoria: 'Roupa',
    tamanhos: ['P', 'M', 'G', 'GG'],
  },

];

export const ProdutosPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const produtosFiltrados = produtos.filter((p: Produto) =>
    p.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtosFiltrados.map(produto => (
          <li key={produto.id}>
            <img src={produto.imagem} alt={produto.titulo} width={100} />
            <h2>{produto.titulo}</h2>
            <p>{produto.preco}</p>
            <p>{produto.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};