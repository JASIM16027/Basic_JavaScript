
const takeOrder=(customer,callback)=>{
    console.log(`take order for ${customer}`)
    callback(customer);
}
const processOrder=(customer,callback)=>{
    console.log(`processing order for ${customer}`);
    //var currentTime = new Date().getTime();
    //while(currentTime+3000>=new Date().getTime());
    setTimeout(()=>{
        console.log(`cooking completed for ${customer}`);
        console.log(`order processed for ${customer}`);
        callback(customer);
        
    },3000)
  

};

const completeOrder = (customer)=>{
    console.log(`completed order for ${customer} `);

}

takeOrder('Jasim',(customer)=>{
    processOrder(customer,()=>{
        completeOrder(customer);
    })
});