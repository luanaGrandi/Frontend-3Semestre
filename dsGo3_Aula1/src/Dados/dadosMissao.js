import figuraEquipe from '../assets/figurinhas/figuraEquipe.png';
import figuraRarra from '../assets/figurinhas/figuraRarra.png';
import figuraFluttershy from '../assets/figurinhas/figuraFluttershy.png';
import FiguraPplejack from '../assets/figurinhas/FiguraPplejack.png';
import figuraRainbowDash from '../assets/figurinhas/figuraRainbowDash.png';
import figuraRarra2 from '../assets/figurinhas/figuraRarra2.png';
import Rarity from '../assets/figurinhas/Rarity.png';
import Celestia from '../assets/figurinhas/Celestia.png';
import Starlight from '../assets/figurinhas/Starlight.png';
import Luna from '../assets/figurinhas/Luna.png';
import Sunset from '../assets/figurinhas/Sunset.png';
import Spike from '../assets/figurinhas/Spike.png';

export const missoes = [
  {
    id: 1,
    titulo: "Conhecimentos Gerais",
    missao: "Ajude a rodar meu programa em py",    
    descricao: "python manage.py ____",    
    respostaCorreta: "runserver",
    status: 'disponivel',
    figura: figuraRarra
  },
  {
    id: 2,
    titulo: "Conhecimentos Gerais",
    missao: "Dart",   
    descricao: "Qual é o comando para importar o dart?",
    respostaCorreta: "import 'dart:io'",
    status: 'disponivel',
    figura: figuraEquipe
  },
  {
    id: 3,
    titulo: "Conhecimentos Gerais",
    missao: "Ajude a rodar meu programa em React",   
    descricao: "npm ___ ___",
    respostaCorreta: "run dev",
    status: 'disponivel',
    figura: figuraFluttershy
  },
  {
    id: 4,
    titulo: "Conhecimentos Gerais",
    missao: "Advinha qual materia eu dou",   
    descricao: "Qual é a materia do modesto",
    respostaCorreta: "IOT",
    status: 'disponivel',
    figura: FiguraPplejack
  },
  {
    id: 5,
    titulo: "Conhecimentos Gerais",
    missao: "!!",   
    descricao: "Qual tag que não é semantica, mas amamos usar?",
    respostaCorreta: "div",
    status: 'disponivel',
    figura: figuraRainbowDash
  }
  ,
  {
    id: 6,
    titulo: "Conhecimentos Gerais",
    missao: "teste",   
    descricao: "O que usamos para fazer o teste de front?",
    respostaCorreta: "vitest",
    status: 'disponivel',
    figura: figuraRarra2
  },
  {
    id: 7,
    titulo: "Conhecimentos Gerais",
    missao: "Quem ai sabe me ajudar em Banco de dados?",   
    descricao: "Toda tabela tem?",
    respostaCorreta: "Chave Primaria",
    status: 'disponivel',
    figura: Rarity
  }
  ,
  {
    id: 8,
    titulo: "Conhecimentos Gerais",
    missao: "codigo feio? aqui não",   
    descricao: "O que usamos para deixar o codigo limpo?",
    respostaCorreta: "clean code",
    status: 'disponivel',
    figura: Celestia
  },
  {
    id: 9,
    titulo: "Conhecimentos sobre a Luana",
    missao: "quem vai acertar?",   
    descricao: "quantos a Luana tem?",
    respostaCorreta: "17",
    status: 'disponivel',
    figura: Starlight
  },
  {
    id: 10,
    titulo: "Conhecimentos sobre a Luana",
    missao: "quem vai acertar?",   
    descricao: "Qual meu sobrenome?",
    respostaCorreta: "Grandi",
    status: 'disponivel',
    figura: Luna
  },
  {
    id: 11,
    titulo: "Conhecimentos sobre o senai",
    missao: "acerte e ganhe uma figurinha",   
    descricao: "O que você ganha se não faltar no senai e ter a media de 95 pra cima?",
    respostaCorreta: "Aluno ouro",
    status: 'disponivel',
    figura: Sunset
  },
  {
    id: 12,
    titulo: "Conhecimentos sobre o senai",
    missao: "acerte e ganhe uma figurinha",   
    descricao: "Quantos minutos que nós temos de intervalo?",
    respostaCorreta: "20",
    status: 'disponivel',
    figura: Spike
  },
];
