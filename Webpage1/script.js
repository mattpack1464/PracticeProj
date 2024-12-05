

document.querySelectorAll(".cta-button").forEach (link =>  {
    link.addEventListener("click",function(e){
      
        e.preventDefault();
        const href = this.getAttribute("href");
        const body = document.querySelector(".body");
        document.body.classList.add("fade-out");
        console.log("i worked");
        setTimeout(()  => {
            window.location.href = href;
        } , 500);
    })
})