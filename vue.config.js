module.exports={
    devServer:{
        proxy:{
            /* '/api':{
                target:'http://39.97.33.178', */
                '/ajax':{
                    target:'https://m.maoyan.com',  
                changeOrigin:true
            }
        }
    }
}