import { db } from "./firebase.js";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

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
      // const src = doc.data().src;
      // const alt = doc.data().alt;
      // const title = doc.data().title;
      // image = { src: src, alt: alt, title: title };
      image = doc.data();
      // console.log(image);
      addImage();

      // console.log(`src: ${src}`);
      // console.log(`alt: ${alt}`);
      // console.log(`title: ${title}`);
    });
  } catch (error) {
    // console.log("Couldn't load data");
  }
  // console.log("\n\n\n\interval\n\n\n")
  // console.log(images);
}

export async function addHallOfFameImages(
  src: string,
  alt: string,
  title: string,
) {
  try {
    await addDoc(collection(db, "hall_of_fame_images"), {
      src: src,
      title: title,
      alt: alt,
    });
  } catch (e) {
    console.log("Couldn't add data");
  }
}

export async function deleteHallOfFameImages(id : string){
  try{
    await deleteDoc(doc(db, "hall_of_fame_images", id))
  }catch (e) {}
}
