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
let o = shell.length
let gap = o/2
i=j
while(gap>0){
    for (i=gap;i+gap<o;i+gap){
        i=j
        let temp=shell[i]
        while (j>gap && shell[j-gap] > temp){
            temp=shell[j-gap]
            shell[j-gap]=shell[i]
            shell[i]=temp
        }
    }
    gap=gap/2
}
console.log(shell)

