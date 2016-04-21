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

## Editando/criando recursos 

Os recursos, se encontram na pasta **clients/unasus/padraoScroll/js/desktop/resources**.

É possível observar que em cada recurso, há 2 arquivos. Um **template.html** e outro **player.js**.
O template.html é responsável pela sua estrutura HTML, enquanto o player.js trabalha com a parte funcional do recurso.

É necessário ressaltar que caso seja criado um novo recurso, a pasta desse recurso deverá ser criada nesta mesta estrutura de diretório, e declarada dentro do arquivo main.js, seu se encontra na raiz da pasta **desktop**

Para criar novos recursos ou editar os já existentes, é necessário a instalação de algumas ferramentas.
