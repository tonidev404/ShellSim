let input = document.getElementById("prompt-command");
let output = document.getElementById('command-output');

let documentos = ["hola.txt", "config.conf", "logs.log", "algo/"]

document.addEventListener("keydown", (e)=>{
    let codigo = e.key;

    if(e.key == "Enter"){
        switch(input.value){
            case "pwd":
                output.innerHTML = "";
                output.innerHTML = "/home/user";
                input.value = "";
                break;
            case "ls":
                output.innerHTML = "";
                 for(let i = 0; i < documentos.length; i++){
                    output.innerHTML += `${documentos[i]}<br>`
                 }
                 input.value = "";
                break;
            case "clear":
                output.innerHTML = "";
                input.value = "";
                break;
                
            default:
                output.innerHTML = "";
                output.innerHTML = "Comando desconocido";
                input.value = "";

        }
    }
    
})