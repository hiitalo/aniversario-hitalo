# Aniversário do Hitalo 🎉

Homepage responsiva para convite de aniversário, otimizada para acesso via celular (WhatsApp).

## Estrutura do Projeto

```
aniversario-hitalo/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── foto-aniversario-1.jpg
│       ├── foto-aniversario-2.jpg
│       ├── foto-aniversario-3.jpg
│       └── foto-aniversario-4.jpg
└── README.md
```

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Para publicar, basta hospedar a pasta inteira em qualquer serviço de hospedagem estática (GitHub Pages, Netlify, Vercel, etc.).

## Personalização

### Imagens
Substitua os arquivos em `assets/images/` pelas fotos desejadas, mantendo os mesmos nomes de arquivo.

### Link do formulário
Edite a constante `FORMS_URL` no arquivo `js/script.js`:

```javascript
const FORMS_URL = "https://forms.cloud.microsoft/r/8mLE0pvd9K?origin=lprLink";
```

### Endereço do restaurante
Edite a constante `RESTAURANTE_ENDERECO` no arquivo `js/script.js`:

```javascript
const RESTAURANTE_ENDERECO = "SHTN, Setor de Clubes Norte Trecho 1 Projeto Orla...";
```

### Mapa incorporado (opcional)
Para adicionar um mapa incorporado do Google Maps, descomente a tag `<iframe>` dentro da `div.map-container` no `index.html` e insira a URL de embed do Google Maps.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript puro (sem dependências)
- Google Fonts (Playfair Display + Inter)
- IntersectionObserver para animações

## Compatibilidade

- Chrome, Firefox, Safari, Edge (versões recentes)
- iOS Safari, Chrome Mobile
- Responsivo para celular, tablet e desktop
