function fetchFromJava(){

    fetch("https://azure-test-java.azurewebsites.net/eerste")
    .then((data)=>{
        console.log(data);
        return data.json()})
        .then((treinData) => {
            console.log(treinData);
            document.getElementById("treinData").innerHTML = JSON.stringify(treinData);
        })
}