# UNASUS

## Preparando a máquina para uso  

1. Realizar um fork do projeto
2. Realizar um clone do projeto para máquina local 


## Estrutura do projeto
O projeto possui 3 pastas principais, para seu funcionamento.

###### Clients
Responsável pelo layout do curso, e estilos/funcional dos recursos que os contém. 

###### Player
Responsável pela parte funcional do curso. Inserção dos recurso, gravação SCORM, etc.

###### Vendor 
Responsável por disponibilizar plugins externos que são utilizados no curso.



## Visualizando o curso

Para visualizar o curso, basta acessar o caminho clients/unasus/padraoScroll/?aula=curso/unidade1.json.

Neste arquivo "unidade1.json", se encontra a construção de todo o conteúdo da unidade. 
Para o pessoal que for trabalhar com a inserção dos recursos, diagramação, trabalhará apenas esse arquivo.


# Trabalhando no projeto

**Conceitos utilizados e para fins didáticos**

1. BackBone.js para a estruturação do projeto.
  1. http://backbonejs.org/

1. Mustache.js utilizado nos templates dos recursos
  1. https://mustache.github.io/

1. SASS utilizado para realizar os estilos dos recursos
  1. http://sass-lang.com/

## Editando/criando recursos 

Os recursos, se encontram na pasta **clients/unasus/padraoScroll/js/desktop/resources**.

É possível observar que em cada recurso, há 2 arquivos. Um **template.html** e outro **player.js**.
O template.html é responsável pela sua estrutura HTML, enquanto o player.js trabalha com a parte funcional do recurso.

É necessário ressaltar que caso seja criado um novo recurso, sua pasta deverá ser criada contendo os 2 arquivos anteriormente mencionados, e declarado dentro do arquivo main.js, que se encontra na raiz da pasta **desktop**. Só observar como foi declarado os demais recursos, e fazer da mesma maneira.


## Editando o visual

O estilo dos recursos, se encontram na pasta **clients/unasus/padraoScroll/css/sass/resources**.

O estilo de todos os recursos, foram criados utilizando um pré processador de css, chamado SASS. Ou seja, antes de trabalhar diretamente no arquivo .scss, é necessário realizar a instalação de um framework que trabalha com essa linguagem, neste caso, o COMPASS. http://compass-style.org/

O COMPASS, possui um comando chamado **watch**. Este comando monitora se ouve alguma alteração do arquivo .scss, e automaticamente gera a saída em no arquivo **geral.css**, no qual está sendo importado no **index.html**; 


# Gerando o saída final
