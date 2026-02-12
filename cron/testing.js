import corn from "node-cron";

export const testing = () =>{
    console.log("Testing function schedule")
    corn.schedule("* * * * *", () => {
        console.log("running testing");
    })
}