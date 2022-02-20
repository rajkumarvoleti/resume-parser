import { Box, Button } from "@mui/material";
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

  const uppy = useUppy(() => {
    return new Uppy().use(XHRUpload, {
      endpoint: "https://v2.convertapi.com/upload ",
    });
  });

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
      console.log(e);
      uppy.upload();
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
