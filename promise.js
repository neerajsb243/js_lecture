const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let e_id=[101,102,103,104];
        resolve(e_id);
        reject('error occured');
    },2000);
});

const promise2=(e_id)=>{
    return new Promise((resolve,reject)=>{
    setTimeout((e_id) => {
       let details={
           name:'Neeraj Singh Bisht',
           e_id:e_id,
           designation:'intern'
       }
        resolve(`this is ${details.name},I am currently working as ${details.designation} in Unthinkable Solutions LLP,my employee id is ${details.e_id}`);
        reject(`Employee Not found`);
    }, 2000,e_id);
});
}

const promise3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let start ='14/02/2022'
            resolve(`I joined on ${start}`);
            reject(`not started`)
        }, 2000);
    })
}

const promise4=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let stipend=20000
            resolve(`current stipend is ₹ ${stipend}`);
            reject(`not Billable`)
        }, 2000);
    })
}
promise1.then((e_id)=>{
    console.log(e_id);
    promise2(e_id[3]).then((intro)=>{
        console.log(intro);
        promise3().then((joining)=>{
            console.log(joining);
            promise4().then((stipend)=>{
                console.log(stipend);
            }).catch((error)=>{
                console.log(error);
            })
        }).catch((error)=>{
            console.log(error);
        })
    }).catch((error)=>{
        console.log(error);
    })
}).catch((error)=>{
    console.log(error)
});