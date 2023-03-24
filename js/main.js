var menuB = document.getElementById("menu");

// Hello World

var mt;

function write(m,b,cc){
    let box = document.getElementById(b);
    let msg = m.split("");
    var i = 0;
    box.textContent = msg[i];
    i++
    // console.log("Caja : "+box.textContent);
    // console.log("Mensaje : "+m);
    // console.log("It's "+box.textContent != m);
    
    // if(box.textContent != m){
        cc = setInterval(function(){
            box.textContent += msg[i];
            i++;
            if(msg[i] === undefined || box.textContent == m){
                clearInterval(cc);
            }
        },100);
    // }
}

function menu(){
    document.getElementById("btnBM").classList.toggle("cb");   
    
    if(document.getElementById("menu").classList.contains("open") ){
        document.getElementById("menu").classList.remove("open");
        void menuB.offsetWidth;
        document.getElementById("menu").classList.add("close");
    }else{
        document.getElementById("menu").classList.remove("close");
        void menuB.offsetWidth;
        document.getElementById("menu").classList.add("open");
    }
}

var nm = 0;
var nmsg = "";
const cod = [
    ["sk-c","Developer Skill",,false,"type"],
    ["ex-c","Experience",,false,"type"],
    ["am-c","About me",,false,"type"],
    ["cm-c","Contact",,false,"type"],
    ["sk-title","Dev Tools",,false,"type"],
    ["sk-soft","Soft Skill",,false,"type"],
    ["star","show",,false,"show"],
];

function efect(l){
    l.forEach(aa => {
        const writing = new IntersectionObserver(function(seeing) {
            seeing.forEach(a => {
                if (a.isIntersecting) {
                    if(!aa[3]){
                        switch (aa[4]) {
                            case "type":
                                write(aa[1],aa[0],aa[2]);
                                break;
                            case "show":
                                document.getElementById(aa[0]).classList.add(aa[1]);
                                break;
                            default:
                                break;
                        }

                        aa[3] = true;
                    }
                } 
            });
        });
        writing.observe(document.querySelector('#'+aa[0]));
    });
}

efect(cod);

function scrollToSection(i) {
    menu();
    document.querySelector('#'+i).scrollIntoView({
      behavior: 'smooth'
    });
  }

document.getElementById("btnBM").addEventListener("click",function(){ menu()});

setTimeout(function(){
    write("Hello World","hw",mt);
},0);
