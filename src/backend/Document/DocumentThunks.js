import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { setError, setEvents, setLoading } from "./DocumentSlice";
import { FireBaseDB } from "../firebase/firebaseConfig";

const db = FireBaseDB;

export const startLoadingDocumentsEvents = async () => {
  try {
    const documentEvents = await getDocs(collection(db, "documento"));
    const documentEventsList = documentEvents.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log("thunks", documentEventsList);
    return {
      status: "loaded",
      events: documentEventsList,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      error,
    };
  }
};

export const starSaveDocumentEvent = async (documentEvent) => {
  try {
    const saveDocumentEvents = await addDoc(
      collection(db, "documento"),
      documentEvent
    );
    return {
      status: "success",
      id: saveDocumentEvents.id,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      error: error.code,
    };
  }
};


export const startDeleteDocumentEvent = async (documentEvent) => {
  try {
    const doc = doc("documento", documentEvent.id);
    await deleteDoc(doc);
    return {
      status: "success",
    };
  } catch (error) {
    return {
      status: "error",
      error: error.code,
    };
  }
};
