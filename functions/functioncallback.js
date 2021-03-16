function sayMyName (name) {
    console.log('antes de executar a função callback')
    console.log(name)

    console.log('depois de excutar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)