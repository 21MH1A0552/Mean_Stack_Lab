function greet(name){
    console.log(`Welcome ${name} ..`)
}
greet("Raman Yadav ")
setTimeout(()=>{
    console.log('Long-running process completed!');
},3000); 