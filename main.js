addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("https://jennifermelissarussicastillo.000webhostapp.com/php/index.php");
    let data = await peticion.text();
    console.log(data);
    document.body.innerHTML = `<h1 style="background: red; color: #fff; font-family: Arial, Helvetica, sans-serif; padding: 10px; border-radius: 5px;">${data}</h1>`;
})