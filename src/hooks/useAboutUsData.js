import { useEffect, useState } from "react";
import {
  startLoadingAboutUsEvents,
  updateInformation,
} from "../backend/AboutUs/AboutUsThunks";

export const useAboutUsData = () => {
  const [data, setData] = useState({
    events: [],
    status: "loaded",
    error: false,
    errorMessage: null,
  });

  const { events, status, errorMessage } = data;

  const updateInfo = async (info, i, id) => {
    const { status, error } = await updateInformation(info, id);
    console.log(error);
    if (error) {
      return {
        error: true,
        errorMessage: error,
      };
    }
    setData((prevData) => ({
      ...prevData,
      events: prevData.events.map((evento, index) =>
        index === i ? { ...evento, descripcion: info } : evento
      ),
    }));

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
      } = await startLoadingAboutUsEvents();
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
    updateInfo,
  };
};
