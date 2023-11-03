import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";


// this
let event = {
  ends: "",
  link: "",
  exists: false,
  start: "",
  title: "",
};

export async function fetchMainEvent() {
  try {
    const querySnapshot = await getDocs(collection(db, "main event"));
    querySnapshot.forEach((doc: any) => {
      const exists = doc.data().exists;
      const starts = doc.data().starts;
      const ends = doc.data().ends;
      const link = doc.data().link;
      const title = doc.data().title;
      event = { ends: ends, link: link, exists: exists, start: starts, title: title};

      console.log(`exists: ${exists}`);
      console.log(`starts: ${starts}`);
      console.log(`ends: ${ends}`);
      console.log(`link: ${link}`);
      console.log(`title: ${title}`);
      
    });
  } catch (error) {
    console.log("Couldn't load data");
  }
}
