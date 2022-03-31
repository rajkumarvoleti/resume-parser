import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { DragDrop, useUppy } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/drag-drop/dist/style.css";
import { CircularProgressbar } from "react-circular-progressbar";

const style = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

export default function BigCircle() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  
  // It uses uppy for file uploading. Please change the endpoint after the backend is ready. Check the uppy react documentation for further information about drag drop feature

  const uppy = useUppy(() => {
    return new Uppy().use(XHRUpload, {
      endpoint: "https://v2.convertapi.com/upload ",
    });
  });

  const startAnimation = () => {
    // setProgress((prev) => prev + 2);
  };

  useEffect(() => {
    uppy.on("progress", () => {
      console.log("progress");
    });
    uppy.on("upload", () => {
      console.log("upload");
    });
    uppy.on("complete", () => {
      console.log("complete");
    });
    uppy.on("error", () => {
      console.log("error");
    });
    uppy.on("file-added", (e) => {
      setUploading(true);
      startAnimation();
      console.log(e);
    });
  }, []);

  return (
    <>
      <Box className="center" sx={style}>
        {uploading ? (
          <CircularProgressbar
            strokeWidth={5}
            value={progress}
            text={`${progress}%`}
          />
        ) : (
          <Box
            sx={{
              "div .uppy-Root,": {
                border: "none !important",
                borderRadius: "50%",
                width: "300px !important",
                height: "300px !important",
              },
            }}
          >
            <DragDrop
              className="center"
              style={{ border: "none !important" }}
              width="100%"
              height="100%"
              uppy={uppy}
              locale={{
                strings: {
                  dropHereOr: "Drop here or %{browse}",
                  browse: "browse",
                },
              }}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
