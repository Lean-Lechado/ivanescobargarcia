const modal=document.getElementById("contactModal");
document.getElementById("openModal").onclick=()=>modal.classList.add("active");
document.getElementById("closeModal").onclick=()=>modal.classList.remove("active");

window.onclick=(e)=>{
if(e.target===modal){
modal.classList.remove("active");
}
};

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Mensaje enviado correctamente 🚀");
modal.classList.remove("active");
});