const nome = 'Maria'
const sexo = 'Feminino'
const idade = 55
const contribuicao = 35

//Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

const calculoContribuicao = idade + contribuicao
const homempodeaposentar = sexo == 'Masculino' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherpodeaposentar = sexo == 'Feminino' && contribuicao >= 30 && calculoContribuicao >= 85

if(homempodeaposentar || mulherpodeaposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar`)
}