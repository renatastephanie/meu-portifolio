# Portfólio Pessoal

Um site de portfólio moderno e responsivo desenvolvido com **React**, **TypeScript** e **Vite**, apresentando projetos, habilidades, educação e informações profissionais.

## 📋 Descrição

Este projeto é um portfólio digital completo que showcasa habilidades técnicas, experiência profissional, educação e projetos desenvolvidos. O site é totalmente responsivo e oferece uma experiência de usuário fluida e intuitiva.

## 🎯 Características

- ✨ Design moderno e responsivo
- 🚀 Construído com React 19 + TypeScript
- ⚡ Vite para build otimizado
- 🎨 Estilos com SASS
- 📱 Mobile-first approach
- 🔍 ESLint configurado para qualidade de código
- ♿ Acessibilidade em mente
- 📖 Conteúdo estruturado em seções

## 🏗️ Estrutura do Projeto

```
front-end/
├── src/
│   ├── components/
│   │   ├── Header/           # Cabeçalho com navegação
│   │   ├── ProfileCard/      # Cartão de apresentação pessoal
│   │   ├── Skills/           # Seção de habilidades
│   │   ├── Education/        # Seção de educação
│   │   ├── Projects/         # Seção de projetos
│   │   ├── Footer/           # Rodapé
│   │   └── AboutVideo/       # (Opcional) Seção de vídeo sobre mim
│   ├── assets/               # Recursos estáticos (imagens, ícones)
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Ponto de entrada
│   └── index.scss           # Estilos globais
├── public/                   # Arquivos públicos estáticos
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
└── eslint.config.js        # Configuração ESLint
```

## 🛠️ Seções do Portfólio

### Header
Cabeçalho navegável com links para as diferentes seções do portfólio.

### Profile Card
Cartão de apresentação pessoal com foto, nome e breve descrição.

### Skills (Habilidades)
Apresentação das competências técnicas e profissionais.

### Education (Educação)
Histórico educacional e certificações.

### Projects (Projetos)
Showcase dos projetos desenvolvidos com descrições e links.

### Footer
Rodapé com informações de contato e links sociais.

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <repositorio-url>
cd meu-portifolio
```

2. Instale as dependências:
```bash
cd front-end
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173`

### Build para Produção

Para construir o projeto para produção:
```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da Build

Para visualizar a build de produção localmente:
```bash
npm run preview
```

### Linting

Para verificar a qualidade do código:
```bash
npm run lint
```

## 📦 Dependências

### Dependências Principais
- **react** (^19.2.6) - Biblioteca JavaScript para construir interfaces
- **react-dom** (^19.2.6) - Renderização React para o DOM

### Dependências de Desenvolvimento
- **TypeScript** (~6.0.2) - Tipagem estática para JavaScript
- **Vite** (^8.0.12) - Bundler e dev server ultrarrápido
- **@vitejs/plugin-react** (^6.0.1) - Plugin React para Vite
- **ESLint** (^10.3.0) - Linter para JavaScript/TypeScript
- **SASS** (^1.99.0) - Preprocessador CSS
- **typescript-eslint** (^8.59.2) - Suporte TypeScript no ESLint

## 🎨 Estilos

O projeto utiliza **SASS** para estilos CSS mais eficientes e organizados. Os estilos globais estão em `src/index.scss` e cada componente possui seus próprios arquivos SCSS.

### Ícones

O projeto utiliza **Font Awesome** para ícones. Link CDN incluído no `index.html`.

## 💡 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Compila TypeScript e realiza build de produção |
| `npm run lint` | Verifica a qualidade do código com ESLint |
| `npm run preview` | Preview local da build de produção |

## 🔧 Configuração

### TypeScript
- **tsconfig.json** - Configuração base
- **tsconfig.app.json** - Configuração específica da aplicação
- **tsconfig.node.json** - Configuração para ferramentas de build

### ESLint
Configurado para manter qualidade de código com suporte a:
- React Hooks
- React Refresh
- TypeScript

### Vite
Otimizado para desenvolvimento rápido com HMR (Hot Module Replacement).

## 📱 Responsividade

O portfólio é desenvolvido com abordagem **mobile-first**, garantindo excelente visualização em:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🌐 Idioma

A aplicação está configurada para o português brasileiro (`pt-br`).

## 📝 Licença

[Especifique a licença do projeto aqui]

## 👤 Autor

**Renata Stephanie**

- GitHub: [@renatastephanie](https://github.com/renatastephanie)
- Email: [Seu email]
- LinkedIn: [Seu LinkedIn]

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📧 Contato

Para mais informações ou dúvidas, entre em contato através das redes sociais ou email.



