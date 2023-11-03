import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

let images: { src: string; alt: string; title: string }[] = [];

// this
let image = {
  src: "",
  alt: "",
  title: "",
};

const addImage = () => {
  images = [...images, image];
};

export async function fetchHallOfFameImages() {
  try {
    const querySnapshot = await getDocs(collection(db, "hall_of_fame_images"));
    querySnapshot.forEach((doc: any) => {
      const src = doc.data().src;
      const alt = doc.data().alt;
      const title = doc.data().title;
      image = { src: src, alt: alt, title: title };
      addImage();

      console.log(`src: ${src}`);
      console.log(`alt: ${alt}`);
      console.log(`title: ${title}`);
    });
  } catch (error) {
    console.log("Couldn't load data");
  }
}
