console.log("Hello login!")


document.querySelector('.form').addEventListener('submit',async(eve)=> {
    let data = {};
    eve.preventDefault();
    const formdata = new FormData(eve.target);
    for(let [key,value] of formdata.entries()){
        data = {...data, [key] : value}
    }
    try{
        const res = await fetch('/login',{
            method:'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })
    
        const { status } = await res.json();
    
        console.log(status);

        if(status === "Authentication successfull") return window.location.href = "/"
    
    }
    catch(e){  console.log(e)  }
})