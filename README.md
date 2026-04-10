# Portfólio — Francisca Ranielly (React)

Portfólio pessoal migrado para React + Vite.

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

## Como fazer o build

```bash
npm run build
```

## Como publicar na Vercel

1. Faça o push desta pasta para um repositório público no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**
3. Selecione o repositório
4. A Vercel detecta o Vite automaticamente — mantenha as configurações padrão:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy** 

## Estrutura de componentes

```
src/
├── components/
│   ├── Navbar.jsx       ← navegação fixa
│   ├── Hero.jsx         ← seção principal
│   ├── Sobre.jsx        ← sobre mim + estatísticas
│   ├── Habilidades.jsx  ← skills com barra de progresso
│   ├── Projetos.jsx     ← cards de projetos (array de dados)
│   └── Footer.jsx       ← rodapé com redes sociais
├── styles/
│   └── global.css       ← todos os estilos
├── App.jsx              ← componente raiz
└── main.jsx             ← entry point
```

## Como adicionar um novo projeto

Abra `src/components/Projetos.jsx` e adicione um objeto ao array `projetos`:

```js
{
  id:          5,
  emoji:       '🆕',
  thumbClass:  'proj-thumb--lilac',
  tags:        ['React', 'CSS'],
  titulo:      'Nome do Projeto',
  descricao:   'Descrição do projeto.',
  linkDemo:    'https://seu-link.vercel.app',
  linkGithub:  'https://github.com/seu-usuario/repo',
  delay:       0.4,
}
```
