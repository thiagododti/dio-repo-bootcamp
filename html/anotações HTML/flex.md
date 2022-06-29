# display: flex -> define um container flexivel
###* inline ou block

# order -> define a ordem que os filhos se posicionaram dentro do container flex

# flex-direction -> define a direção que os itens são colocados no container flexivel
### row | row-reverse | column | column-reverse

# flex-wrap -> faz com que todos os itens tentem se posicionar em uma linha, fazendo assim com que eles quebrem a linha quando nao couber mais.
### nowrap | wrap | wrap-reverse

# flex-flow -> abreviação do flex-direction que define os eixos principais e cruzados.
### padrão é row nowrap

# justify-content -> define o alinhamento ao longo do eixo principal.
### flex-start | flex-end | center | space-between | space-around | space-evenly

# align-items -> define o alinhamento ao longo do eixo cruzado.
### flex-start | flex-end | center | stretch | baseline

# align-content -> alinha as linhas de um container flexivel quando há espaço extra no eixo cruzado, semelhante ao justify-content.
### flex-start | flex-end | center | stretch | space-between | space-around

# flex-grow -> define como o item cresce.

# flex-shrink -> define como o item diminui

# flex-basis -> define o tamanho padrao de um elemento antes que o espaço restante seja distribuido
### pode ser auto ou definido em porcentagem

# flex -> abreviação de flex-grow, flex-shrink e flex-basis combinados.

# align-self -> permite que o alinhamento padrao seja substituido por itens individuais.
