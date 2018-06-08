console.log('Starting app')

setTimeout(() => {
    console.log('Inside of callback');
}, 1000);

setTimeout(() => {
    console.log('second setTimeout');
}, 0);

console.log('Finishing app')