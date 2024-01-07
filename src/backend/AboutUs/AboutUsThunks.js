import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { setError, setEvents, setLoading } from "./AboutUsSlice";
import { FireBaseDB } from "../firebase/firebaseConfig";

const db = FireBaseDB;
const aboutUsCollection = collection(db, "sobre_nosotros");
export const startLoadingAboutUsEvents = async () => {
  try {
    const aboutUsEvents = await getDocs(collection(db, "sobre_nosotros"));
    const aboutUsEventsList = aboutUsEvents.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return {
      status: "loaded",
      events: aboutUsEventsList,
    };
  } catch (error) {
    return {
      status: "error",
      error,
    };
  }
};

export const updateInformation = async (info, id) => {
  try {
    const descripcion = doc(aboutUsCollection, id);
    await updateDoc(descripcion, { descripcion: info });
    return {
      status: "loaded",
    };
  } catch (error) {
    return {
      status: "error",
      error,
    };
  }
};
