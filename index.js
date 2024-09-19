import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./util/FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore"


const app = express()
const port = 8080;

app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:3000"
	})
)
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/dataentry", async (req, res) => {
	console.log("getting dining log")
	const collectionRef = collection(db, "Dining Hall History");
	const collectionSnap = await getDocs(collectionRef)
	const docs = []
	collectionSnap.forEach((doc) => {
		docs.push(doc.data())
	})
	res.send(docs)
})

app.post("/dataentry", async (req, res) => {
	const diningRef = collection(db, "Dining Hall History");
	const diningData = req.body
	try {
		await addDoc(diningRef, diningData)
	} catch (e) {
		console.error(e)
		res.status(500);
	}
	res.status(200).send("Succesfully Added Dining Entry")
})

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()