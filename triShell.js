console.log("-------------------------")
console.log("tri par insertion")
const insert = [3, 9, 7, 1, 2, 2, 8, 4, 5]
let i=0
let j=0
let temp
let n = insert.length
for (i=1;i<n;i++){
    temp=insert[i]
    j=i
    while(j>0 && temp<insert[j-1]){
        insert[j]=insert[j-1]
        j=j-1
    }
    insert[j]=temp
}
console.log(insert)

console.log("-------------------------")
console.log("tri a bulle")
const bubble = [3, 9, 7, 1, 3, 2, 8, 4, 5]
let m = bubble.length
for(i=1;i<m-1;i++){
    for(j=0;j<m-i;j++){
        if(bubble[j+1]<bubble[j]){
            temp = bubble[j]
            bubble[j]= bubble[j+1]
            bubble[j+1]=temp
        }
    }
}
console.log(bubble)

console.log("-------------------------")
console.log("tri de shell")
const shell = [3, 9, 7, 1, 3, 2, 8, 4, 5]
let len = shell.length
let gap = Math.floor(len/2)
let k
let y
while(gap>0){
    //je commence au gap et je verifie que le y ne sorte pas du tableau
    for (y=gap;y<len;y++){
        //je mets les deux indices au meme niveau
        let temp=shell[y]
        let k = y
        //je stock la valeur de y dans une variable temporaire
        //
        while (k>=gap && shell[k-gap] > temp){
            shell[k]=shell[k-gap]
            k=k-gap
        }
        shell[k] = temp;
    }
    gap=Math.floor(gap/2)
}
console.log(shell)


console.log("-------------------------")
console.log("quick sort")
const quicksort = [3, 9, 7, 1, 3, 2, 8, 4, 5]
let min=0
let max=quicksort.length
let tempo
function trier(quicksort,min,max){
    if (min<max){

        pivot=min
        for(let index=min+1;index<max;index++){
            if(quicksort[index]<quicksort[pivot]){

                tempo=quicksort[index]
                quicksort[index]=quicksort[pivot]
                quicksort[pivot]=tempo

                pivot++

                tempo=quicksort[index]
                quicksort[index]=quicksort[pivot]
                quicksort[pivot]=tempo
            }
        }

    trier(quicksort,min,pivot)
    trier(quicksort,pivot+1,max)
    }

   
}

trier(quicksort, min, max);
console.log(quicksort);

console.log("-----------------------------")
console.log("factoriel de 5")


function factorial(g){
    if(g==0){
        return 1
    }else{
        return g*(factorial(g-1))
    }
}
let w = (factorial(5))
console.log(w)

console.log("-----------------------------")
console.log("fibonacci de 8")

function fibonacci(h){
    if (h==0){
        return 0
    }else if (h==1){
        return 1
    }else{
        return fibonacci(h-1)+fibonacci(h-2)
    }
}
console.log(fibonacci(8))

console.log("-----------------------------")
console.log("syracuse de 15")


function syracuse(p){
    console.log(p)
        if(p===1){
            return 
        }else if(p%2===0){
            return syracuse(p/2)
        }
            return syracuse(3*p+1)
        }
(syracuse(15))

console.log("-----------------------------")
console.log("PGCD")

function pgcd (a,b){
    if(b!= 0){
        return pgcd(b,a%b)
    }else{
        return a
    }
}
console.log(pgcd(21,72))

