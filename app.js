class password{
    constructor(){
        this.cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.small = "abcdefghijklmnopqrstuvwxyz";
        this.num = "1234567890";
        this.symbol = "!@#$%^&*";
    }

    funny(){
        let arr = ["Password","Secret","12345678","Unique","incorrect"];
        let pass = arr[Math.floor(Math.random()*arr.length)];
        return pass;
    }

    weak(){
        let arr = [this.cap,this.small];
        let pass = "";
        for(let i=0;i<8;i++){
            let first = Math.floor(Math.random()*arr.length);
            let second = Math.floor(Math.random()*arr[first].length);
            pass += arr[first][second]
        }
        return pass
    }
    strong(){
        let arr = [this.cap,this.small,this.num];
        let pass = "";
        for (let i = 0; i < 12; i++) {
            let first = Math.floor(Math.random() * arr.length);
            let second = Math.floor(Math.random() * arr[first].length);
            pass += arr[first][second]
        }
        return pass
    }
    super() {
        let arr = [this.cap, this.small, this.num,this.symbol];
        let pass = "";
        for (let i = 0; i < 15; i++) {
            let first = Math.floor(Math.random() * arr.length);
            let second = Math.floor(Math.random() * arr[first].length);
            pass += arr[first][second]
        }
        return pass
    }
}
 
const copybtn = document.querySelector(".copybtn");
const input = document.querySelector(".mains");
const main = document.querySelector(".main");
const form = document.querySelector("#form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
 
 const data = new FormData(e.target);
 const entires = Object.fromEntries(data.entries())
   const object = new password();
   if(entires.check == "funny"){
    input.value = object.funny()
   } else if (entires.check == "weak"){
       input.value = object.weak()
   } else if (entires.check == "strong") {
       input.value = object.strong()
   } else if (entires.check == "super") {
       input.value = object.super()
   }
    form.reset()
})
input.addEventListener("mouseover",(e)=>{
    copybtn.classList.remove("hidden")
})
copybtn.addEventListener("click", (e) => {
   
  input.select();
  input.setSelectionRange(0,20);
  navigator.clipboard.writeText(input.value);
  input.value = "";

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Copy successfully"
    });
   
    copybtn.classList.add("hidden")
})
