import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { setError, setEvents, setLoading } from "./DocumentSlice";
import { FireBaseDB } from "../firebase/firebaseConfig";
import { deleteDocsStorage } from "../firebase/StorageFirebaseProvider";

const db = FireBaseDB;
const documentCollection = collection(db, "documento");
export const startLoadingDocumentsEvents = async () => {
  try {
    const documentEvents = await getDocs(collection(db, "documento"));
    const documentEventsList = documentEvents.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
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
    return {
      status: "error",
      error: error.code,
    };
  }
};

//TODO: FALTA MONTAR ESTE REQUERIMIENTO
export const startDeleteDocumentEvent = async (id) => {
  try {
    const doco = doc(documentCollection, id);
    await deleteDoc(doco);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      status: "error",
      error,
    };
  }
};
