const {PrismaClient} = require("@prisma/client")

const database = new PrismaClient()

async function main(){
    try {
        await database.category.createMany({
            data: [
                {name: "Computer Science"},
                {name: "Music"},
                {name: "Fitness"},
                {name: "Photography"},
                {name: "Accounting"},
                {name: "Engineering"},
                {name: "Filming"},
                {name: "Data science"},
                {name: "Web Development"},
                {name: "Mobile Development"},
                {name: "Dev Ops"},
                {name: "Cyber Security"},
                {name: "Fashion"},
                {name: "Lifestyle"},
            ]
        })
    } catch (error) {
        console.log("Error seeding the database categories", error);
        
    }finally {
        await database.$disconnect()
    }
}

main()