PAGINA INICIAL C O MAPA MOSTRANDO AS MARCAÇÕES COM A VARIÁVEL accepted: true

- POPUP DE LOGIN
- TOPBAR MOSTRANDO SE ESTA LOGADO OU NAO
- POPUP DE CADASTRO
- POPUP PARA ADICIONAR LOCAL - ao adicionar local, o model vai ter como padrão accepted: false

----ADMIN
/ADMIN

- LISTA DE LOCAIS COM A VARIÁVEL accepted: false

---

[x] - REFACTOR

[X] - GET DAS API'S DO /api/get

- LISTAS DO QUE PRECISA CHEGAR NO BACKEND - MODELS
  [x] - NOME DO LOCAL > title > required
  [x] - LATITUDE E LONGITUDE > ja vai ser convertido :D
  [x] - SITE/LINK > website
  [x] - WHATS/TELEFONE > phone
  [x] - ESSE LOCAL.. > placeOptions
  [x] - DESCRIÇÃO - COLOCAR PLACEHOLDER P/ BOTAR TEMPO DE ENTREGA, ETC > description
  [x] - HORÁRIO DE FUNCIONAMENTO > workingTime
  [x] - QUESTIONAR SOBRE AS IMAGENS > image
  [x] - ACCEPTED PADRÃO FALSE > accepted
- TESTAR SE TODAS ESSAS INFORMAÇÕES ESTÃO SENDO ENVIADAS DE FORMA CORRETA PRO BACKEND
  [X] - ALTERAR NO FRONTEND OS ITENS ACIMA

* O QUE CADA MARKER DEVE MOSTRAR:
  [X] - CATEGORIA
  [X] - TÍTULO
  [X] - DESCRIÇÃO
  [X] - SITE/LINK
  [X] - WHATS/TELEFONE
  [X] - ESSE LOCAL..
  [X] - HORÁRIO DE FUNCIONAMENTO
  [X] - ENDEREÇO - SEGUE INFORMAÇÃO ABAIXO
  [N] - ADICIONADO EM.. createdAt

- MARKER DE ADICIONAR
  [X] - AO DAR 2 CLIQUES, TENTAR AUTO PREENCHER O ENDEREÇO CONVERTENDO A LATITUDE E LONGITUDE PARA ENDEREÇO NORMAL.
  [X] - CASO AJA MUDANÇA NO ENDEREÇO, CONVERTER ELE PARA LATITUDE E LONGITUDE. OU ENTÃO JÁ DEIXA COMO READONLY
  [X] - checkbox perguntando se o numero é whatsapp. Se for, linka pra api, se não, linka pro <a tel=>

- MATERIAL UI
  [X] - INPUTS
  [N] - TEREMOS FILE INPUT? QUESTIONAR SOBRE IMAGEM

[X] - LISTA DO QUE CHEGA NO BACKEND TEM O ACCEPTED COMO FALSE?
[X] - estilizar botões para parecer um dropdown
[X] - MASK NO NUMBER
[X] - LIMITAR TÍTULO E DESCRIÇÃO
[N] - Talvez na descrição colocar um read more, caso exists um exemplo c o material
[X] - Limitar caracteres em todos os campos, a princípio c css
[X] - usar list item no popup
[X] - AUTH
[X] - AUTORIZAR FUNÇÃO DE 2 CLIQUES APENAS PARA QUEM ESTIVER LOGADO, SE N ESTIVER, MOSTRAR UM POPUP
[X] - QUALQUER PESSOA LOGADA VAI PODER CRIAR UM LUGAR, MAS VAI VIM COM ACCEPTED FALSE
[N] - MOSTRAR POPUP DIZENDO QUE ELA PODE CLICAR EM UMA LOCALIZAÇÃO 2X PARA ADD UM LUGAR
[X] - CHECAR SE A PESSOA ESTÁ LOGADA. SE NÃO, DIZER QUE SÓ DA PRA ADD CASO ESTEJA
[X] - MOSTRAR NO MAPA APENAS MARKERS COM ACCEPTED = TRUE
[X] - CRIAR ÁREA DO ADM QUE MOSTRA APENAS ACCEPTED FALSE
[X] - IRÁ TER A ÁREA DE ADMIN APENAS DETERMINADO EMAIL
[X] - BOTÃO QUE AO CLICAR, SETA COMO ACCEPTED TRUE
[X] - BOTÃO DE X QUE AO CLICAR, DELETA A ENTRADA DO BANCO DE DADOS
[X] - FEEDBACK APÓS ADD UM LOCAL
[X] - SETAR CORS PARA O SERVIDOR CORRETO
[X] - captcha no login e no cadastrar
[X] - react.memo nos componentes
[X] - Aumentar conteúdo de baixo pro celular
[X] - ajeitar posicionamento do search, do filtro e do login no celular com right: 0, left: 0, margin: auto
[ ] - ajeitar popup de add local no celular
[ ] - erro no cadastro

-- EXTRAS

[N] - MOSTRAR OS LOCAIS POR LISTA, SEM SER NO MAPA
[X] - CRIAR FILTROS
[N] - FAVORITOS.. LOCALSTORAGE
[N] - COMENTÁRIOS EM CADA LOCAL(DISQUS)
[X] - SEARCHBOX(react map gl)
[X] - mascara para email e telefone com react-hooks-forms
[X] - trocar erros de console.log para enviar pro servidor
[N] - Markers com cor dependendo da cagegoria
[X] - Local storage visit time > 5 pedir doação
[N] - Localstorage is first time? Mostrar alguma extensao de tutorial
[X] - FUNÇÃO PARA REMOVER POR ID COM INPUT
[N] - LOADPOPUP ON ZOOM - tentar dar load nos popup somente qd der um zoom
[X] - Redes sociais na lateral talvez ou na esquerda do copyright do mapa
[X] - Criar página de Sobre
		1. O que é o app?
		2. Quem desenvolveu?
		3. Quais ferramentas foram utilizadas?
		4. Contato
[X] - Colocar Alert em seu próprio componente
[X] - verificar se o phone é renderizado mesmo sem ter nada
[N] - checar se a string começa com https:// ou http://, se não, colocar
[X] - ordenar dia -> mudar no back para array, enviar como array e ordenar
[N] - UPLOAD DE IMAGENS
[X] - BOTÃO QUE SETA A LOCALIZAÇÃO ATUAL. PORÉM, COM USEEFFECT, JÁ DEVE SETAR DIRETO. COLOCA NO LOCALSTORAGE CASO NÃO CONSIGA PARA MOSTRAR UM POPUP DIZENDO QUE NÃO CONSEGUIU.
[X] - SETAR LOCALIZAÇÃO NO MOUNT DO COMPONENT
[x] - Add link whatsapp
[X] - CAMPO DE ENDEREÇO DE FORMA CUSTOMIZADA
.... Lembrar de setar o CORS para o servidor que vai rodar.

https://github.com/uber/react-map-gl/issues?q=performance
https://github.com/uber/react-map-gl/issues/750

....
[x] - Criar Context do logEntries
[X] - Mover .map do MAp.js para o LogEntries.js
[X] - Criar Radio Button como componente e chamar no Map.js
[X] - Esse Radio Button iria ter useState dentro do Map.js com valor padrão 'all'
[X] - E dependendo do clique,  enviaria as informações para o componente LogEntries
[X] - LogEntries a depender da string recebida, iria renderizar o filtro
[X] - E aí dentro do LogEntries, um .reduce() iria receber o argumento do determinado filtro

6LcQy-YUAAAAAP9Vs2Ww2o_2O5Xf0Z-GYysBwDoB
