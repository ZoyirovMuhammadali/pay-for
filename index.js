const express=require('express')
const app=express()
const stripe=require("stripe")("sk_test_51Kg9NkGJzFGi4iKw3rFNepvYLW7IGa6E6vogtkAKsuqAwsDRTNOVYUIaDayZsjHepMvcNsg2BKVpZ9GsDdGH1LL400ND4wQwMH")
const bodyParser=require('body-parser')
const cors=require('cors')
require('./prod')(app)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use(cors())

app.post("/payment",cors(),async(req,res)=>{
    let {amount,id}=req.body
    try {
        const payment=await stripe.paymentIntents.create({
            amount,
            currency:"USD",
            description:"description_name",
            payment_method:id,
            confirm:true
        })
        console.log("Payment",payment);
        res.json({
            message:"Payment successfull",
            success:true
        })
    } catch (error) {
        console.log("Error",error);
        res.json({
            message:"Payment failed",
            success:false
        })
    }
})

app.listen(process.env.PORT || 4000,()=>{
    console.log("Server is listening on port 4000 ");
})