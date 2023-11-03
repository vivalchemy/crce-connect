import { db } from "./firebase.js";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

// ends: "",
// link: "",
// exists: false,
// start: "",
// title: "", 
let event = {};

export async function fetchMainEvent() {
  try {
    const querySnapshot = await getDocs(collection(db, "main event"));
    querySnapshot.forEach((doc: any) => {
      event = doc.data();
      console.log(event);
    });
  } catch (error) {
    console.log("Couldn't load data");
  }
}

export async function addMainEvent(
  ends: string,
  link: string,
  exists: string,
  start: string,
  title: string,
) {
  try {
    await addDoc(collection(db, "main event"), {
      ends: ends,
      link: link,
      exists: exists,
      start: start,
      title: title,
    });
  } catch (e) {
    console.log("Couldn't add data");
  }
}

export async function deleteMainEvent(id : string){
  try{
    await deleteDoc(doc(db, "main event", id))
  }catch (e) {}
}