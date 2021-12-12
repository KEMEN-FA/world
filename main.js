window.onload=()=>{
    const scrolls = new Siema({
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
      });

      document.querySelector('.prev').addEventListener('click', () => scrolls.prev());
    document.querySelector('.next').addEventListener('click', () => scrolls.next());
    setInterval(() => {
        scrolls.next()
    },5000);


    function addTag(){
        let img = document.createElement('img')
        let num = Math.floor(Math.random()*9+1)
        img.src = `./img/sale${num}.png`
        let x = Math.random()*200
        let y = Math.random()*900
        img.classList.add("tags")
        
        document.querySelector('#section1').appendChild(img)
        img.style.transform = `translate(${x}px,${y}px)`
        img.style.opacity = Math.random()
    }

    for(let i=0;i<5;i++){
        // addTag()
    }

    document.querySelector('#playBtn').addEventListener('click',()=>{
        document.querySelector('#video').classList.toggle('hide')
    })

    let hotValue = 0
    let hot = document.querySelector('#hot span')
    const unlockBox = document.querySelector('#unlockBox')

    let unlock = 0
    const startMaker = new StarMaker()

    document.querySelectorAll('.bigButton').forEach(big=>{
        big.addEventListener('click',(e)=>{
            // hotValue += Math.floor(Math.random()*5)
            hotValue ++
            hot.innerHTML = hotValue
            document.querySelector('#hot').classList.remove('hot-hide')
            setTimeout(() => {
                document.querySelector('#hot').classList.add('hot-hide')
            }, 10000);

            if(hotValue % 10 == 0 ){
                console.log(unlock);
                const ele = document.querySelectorAll('.goods')[unlock]
                ele.classList.toggle('lock')
                unlock ++
                // ele.style.backgroundColor = 'red'
                unlockBox.classList.toggle('hide')
                setTimeout(() => {
                    unlockBox.classList.toggle('hide')
                }, 1000);

            } 

            for(let i=0;i<10;i++){
                startMaker.send(e)
            }
            
            if(hotValue>40){

                document.querySelectorAll('.bigButton').forEach((ele,i)=>{
                    ele.querySelector('img').src = `./img/support${i+1}b.GIF`
                })

                document.querySelectorAll('.goods').forEach(ele=>{
                    ele.classList.add('break')
                })

                document.querySelector('#face').src = "./img/faceb.GIF"

                // document.body.style.filter= `invert(1)`

                setTimeout(() => {
                    document.querySelector('#end').classList.remove('section-hide')
                }, 5000);
            }

            if(hotValue<50)gsap.to('#hotIcon',{left:hotValue/50*500})

            

        })
    })

    

    

    
    const about = document.querySelector('#nav4')
    const store = document.querySelector('#nav3')
    const support = document.querySelector('#nav2')
    const home = document.querySelector('#nav1')
    const navImg = document.querySelector('#navImg')

    const nav = document.querySelector('#mainNav')
    const aboutPage = document.querySelector('#section4')

    about.addEventListener('click',(e)=>{
        aboutPage.classList.toggle('section-hide')
        nav.classList.toggle('nav-nocolor')
    })

    store.addEventListener('click',()=>{
        aboutPage.classList.add('section-hide')
        nav.classList.remove('nav-nocolor')
    })
    home.addEventListener('click',()=>{
        aboutPage.classList.add('section-hide')
        nav.classList.remove('nav-nocolor')
    })
    support.addEventListener('click',()=>{
        aboutPage.classList.add('section-hide')
        nav.classList.remove('nav-nocolor')
        navImg.classList.toggle('hide')
        setTimeout(() => {
            navImg.classList.add('hide')
        }, 7000);
    })

}

class StarMaker{
    constructor(){
        this.stars = []

    }
    send(e){
        let img = document.createElement('img')
        img.src = `img/heart${Math.random()>0.5 ? 1 : 2}.png`

        img.classList.add('star')
        img.style.left = `${e.clientX}px`
        img.style.top = `${e.clientY}px`
        document.querySelector('#section2').appendChild(img)
        // img.style.transform = `translate(${-100}px,${-300}px)`
        gsap.to(img,{x:Math.random()*1000-500,y:Math.random()*1000-500,opacity:0,delay:Math.random()/5,duration:.5,onComplete:()=>{
            img.remove()
        }})
    }
}