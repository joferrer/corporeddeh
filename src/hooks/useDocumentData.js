import { useEffect, useState } from "react";
import {
  starSaveDocumentEvent,
  startDeleteDocumentEvent,
  startLoadingDocumentsEvents,
} from "./../backend/Document/DocumentThunks";
import {
  deleteDocsStorage,
  saveDocs,
} from "./../backend/firebase/StorageFirebaseProvider";

export const useDocumentData = () => {
  const [data, setData] = useState({
    events: [],
    status: "loaded", // loading, loaded, error
    error: false,
    errorMessage: null,
  });

  const { events, status, errorMessage } = data;

  const saveEventDocument = async (file, nombre, descripcion, nombreDoc) => {
    const { url, error } = await saveDocs(file);
    if (error) {
      return {
        error: true,
        errorMessage: error,
      };
    }

    const newEventDoc = {
      nombre: nombre,
      descripcion: descripcion,
      url: url,
      nombreDoc: nombreDoc,
    };

    const { status } = await starSaveDocumentEvent(newEventDoc);
    console.log(status);
    setData((prevData) => ({
      ...prevData,
      events: [...prevData.events, newEventDoc],
    }));
    return {
      status,
    };
  };

  const deleteEventDocument = async (document) => {
    const { id, nombreDoc } = document;
    const { error } = await startDeleteDocumentEvent(id);
    if (error) {
      return {
        error: true,
        errorMessage: error,
      };
    }

    const { status } = await deleteDocsStorage(nombreDoc);
    const newArray = data.events.filter((item) => item !== document);
    setData({
      ...data,
      events: newArray,
    });
    return {
      status,
    };
  };

  useEffect(() => {
    const getData = async () => {
      const {
        status,
        events: eventsList,
        error,
      } = await startLoadingDocumentsEvents();
      if (status === "error") {
        return setData({
          error: true,
          errorMessage: error,
          events: [],
          status: "error",
        });
      }
      return setData({
        error: false,
        status,
        errorMessage: null,
        events: eventsList,
      });
    };

    getData();
  }, []);

  return {
    events,
    status,
    errorMessage,
    setData,
    saveEventDocument,
    deleteEventDocument,
  };
};
