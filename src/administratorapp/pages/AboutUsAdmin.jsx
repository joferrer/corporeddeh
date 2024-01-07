import React, { useEffect, useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import Container from "./../../ui/AloneComponents/Container";
import { Alert, Box, Snackbar } from "@mui/material";
import GridAboutAsEdit from "./../../corporeddeh/pages/components/GridAboutAsEdit";
import { useAboutUsData } from "../../hooks/useAboutUsData";

export const AboutUsAdmin = () => {
  const data = useAboutUsData();
  const {
    events,
    error,
    errorMessage,
    setData: setListOfEvents,
    updateInfo,
  } = data;

  return (
    <LayoutAdmin>
      <Container>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setListOfEvents({ events, error: false })}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
        <Box
          sx={{
            "@media (max-width:900px)": {
              marginBottom: 22,
              marginTop: 0,
            },
          }}
        >
          <GridAboutAsEdit events={events} updateInfo={updateInfo} />
        </Box>
      </Container>
    </LayoutAdmin>
  );
};
