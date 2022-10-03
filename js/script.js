function fetchFromJava(){

    fetch("http://localhost:8082/eerste")
    .then((data)=>{
        console.log(data);
        return data.json()})
        .then((treinData) => {
            console.log(treinData);
            document.getElementById("treinData").innerHTML = JSON.stringify(treinData);
        })
}