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

- BackBone.js para a estruturação do projeto.
- http://backbonejs.org/

- Mustache.js utilizado nos templates dos recursos
- https://mustache.github.io/


## Editando/criando recursos 

Os recursos, se encontram na pasta **clients/unasus/padraoScroll/js/desktop/resources**.

É possível observar que em cada recurso, há 2 arquivos. Um **template.html** e outro **player.js**.
O template.html é responsável pela sua estrutura HTML, enquanto o player.js trabalha com a parte funcional do recurso.

É necessário ressaltar que caso seja criado um novo recurso, sua pasta deverá ser criada contendo os 2 arquivos anteriormente mencionados, e declarado dentro do arquivo main.js, que se encontra na raiz da pasta **desktop**. Só observar como foi declarado os demais recursos, e fazer da mesma maneira.


Para criar novos recursos ou editar os já existentes, é necessário a instalação de algumas ferramentas.
