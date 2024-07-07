let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let imageLink=await getImage();
    console.log(imageLink);
    let image=document.querySelector("#result");
    image.setAttribute("src",link);
})

async function getImage(){
    try{
        let res=await axios.get(url);
        let link=res.data.message;
        return link;
    }
    catch(err){
        console.log("Error -",e);
        return "Not Found Image"
    }
}