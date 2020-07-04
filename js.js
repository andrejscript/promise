'use strict'
console.log('request data...');

// setTimeout(() => {
//     console.log('preparing data');

//     const backendData = {
//         server: 'aws',
//         port: '2000',
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data recieved', backendData);
//     }, 2000)
// }, 2000)

// -----------------------
// PROMISE MAIN
// -----------------------

// const p = new Promise(function(resolve, reject) {

//     setTimeout(() => {
//         console.log('preparing data');

//         const backendData = {
//             server: 'aws',
//             port: '2000',
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// });

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.add = true;
//             reject(data)
//         }, 2000)
//     })
// })
// .then(clientData => {
//     clientData.fromPromise = false;
//     return clientData
// })
// .then(data => {
//     console.log('Modified...', data);
// })
// .catch(err => {
//     console.error('Error', err);
// })
// .finally(() => console.log('fanally...'))

// -----------------------
// PROMISE MAIN
// -----------------------

// -----------------------
// PROMISE ALL - RACE
// -----------------------

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('2 sec'));
// sleep(3000).then(() => console.log('3 sec'));

Promise.all([sleep(4000)], [sleep(5000)])
.then(() => console.log('all promises...'));

Promise.race([sleep(2000)], [sleep(3000)])
.then(() => console.log('race promises...'))
// -----------------------
// PROMISE ALL - RACE
// -----------------------
