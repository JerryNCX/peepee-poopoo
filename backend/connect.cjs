const{MongoClient} = require('mongodb')
require('dotenv').config({path: './.env'})

async function main(){
    
    const DB = process.env.MONGO_URI
    const client = new MongoClient(DB)

    try{
        await client.connect()

        const forAdmin = await client.db("ForAdmin").collections()
        forAdmin.forEach((collection) => console.log(collection.s.namespace.collection))
        // const forSystemAdmin = await client.db("ForSystemAdmin").collections()
        // forSystemAdmin.forEach((collection) => console.log(collection.s.namespace.collection))
    } catch {
        console.error()
    } finally{
        await client.close()
    }
}
main()