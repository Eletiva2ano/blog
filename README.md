# Blog Eletiva

Site do projeto de eletiva de alunos do ensino médio, com artigos sobre ciência, sociedade e games.

- **Framework:** [Hugo](https://gohugo.io/) (extended) — v0.165.0
- **Tema:** [Dream](https://github.com/g1eny0ung/hugo-theme-dream) v3 (Tailwind CSS + daisyUI)
- **Deploy:** [Netlify](https://www.netlify.com/), build automático a cada push na branch `master` (ver `netlify.toml`)

## Rodando localmente

Instale o [Hugo extended](https://gohugo.io/installation/) na mesma versão do `netlify.toml` (`HUGO_VERSION`) e rode:

```bash
hugo server -D
```

O site fica disponível em `http://localhost:1313`. Comentários (Disqus) e Google Analytics só carregam em modo produção; para testar isso localmente:

```bash
hugo server -D --environment production
```

## Estrutura do conteúdo

Cada post é um [page bundle](https://gohugo.io/content-management/page-bundles/): uma pasta em `content/posts/` com um `index.md` e as imagens do post juntas.

```
content/posts/bullying/
├── index.md
├── capa.jpg
├── poster.jpg
└── campanha.jpg
```

Para criar um post novo:

```bash
hugo new posts/nome-do-post/index.md
```

Na capa (`cover:` no front matter) e nas imagens do corpo do texto, use só o nome do arquivo (ex: `cover: capa.jpg`, `![](poster.jpg)`) — não o caminho completo. A capa é convertida automaticamente para WebP no build.

Imagens que não pertencem a nenhum post específico (avatar, favicon) ficam em `static/img/site/`.

## Outras pastas relevantes

- `themes/dream/` — tema vendorizado (não é submódulo git, é o código-fonte copiado direto no repositório)
- `static/img/nao-usadas/` — fotos sem post correspondente no momento, guardadas caso sejam usadas depois
