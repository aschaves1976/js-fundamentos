const funcs = []
for (let i = 0; i < 10; i++){
    // adicionando dados no array
    funcs.push(
        function(){
            console.log(i)
        }
    )
}
funcs[2]()
funcs[8]()
funcs[6]()