setTimeout(() => {
    Promise.resolve(console.log('Inside Promise 1'));
        console.log('Inside timeout 1');
}, 0);
const getPromiseResolver = () => {
    setTimeout(() => {
        console.log('Inside timeout 2');
    }, 0);
    console.log('Inside Promise 2');
};
Promise.resolve().then(getPromiseResolver);



// setTimeout(()=>{
//     console.log("Welcome");
// },0);
// setTimeout(()=>{
//     console.log("Hello");
// },0);



// let x = 0
// console.log(x);
// setTimeout(function() {
//     x = 5
//     console.log(x)
// }, 5000);
// console.log(x);