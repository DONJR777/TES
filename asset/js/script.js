function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let label = document.getElementById("label").value
    let saran = document.getElementById("saran").value

    if(name == ""){
        return alert("Silahkan isi nama anda")
    } else if(email == ""){
        return alert("Silahkan isi email anda")
    } else if(phone == ""){
        return alert("Silahkan isi nomor telpon anda")
    } else if(label == ""){
        return alert("Silahkan isi label")
    } else if(saran == ""){
        return alert("Silahkan isi saran anda")
    }

    const emailDestination = "donnyfajarf25@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${emailDestination}?subject=${label}&body= halo bang, ${name}, saya ingin ${saran}. bisakah anda menghubungi saya ${phone}`
    a.click()

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(label)
    console.log(saran)

}
