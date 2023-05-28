let i = 0
document.querySelector('.add').addEventListener("click", function(){
    document.querySelector('p').innerHTML = i++

    if((i>0) && (i<33)){
        document.querySelector('font').innerHTML = "Alhamdulillah"
        document.querySelector('font').style.color = 'red'

    }
    else if((i>33) && (i<66)){
        document.querySelector('font').innerHTML = "Subhanolloh"
        document.querySelector('font').style.color = 'brown'
    }
    else if((i>66) && (i<100)){
        document.querySelector('font').innerHTML = "Allohu Akbar"
        document.querySelector('font').style.color = 'green'
    }
     else{
        document.querySelector('font').innerHTML = "Yaxshi ishlarni kanda qilmang"
    }
})
document.querySelector('.reset').addEventListener("click", function(){
    i = 0
    document.querySelector('p').innerHTML = i
})

