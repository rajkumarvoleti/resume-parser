import { DragDrop, useUppy } from "@uppy/react";
import Tus from "@uppy/tus";
import Uppy from "@uppy/core";

// File Input UI

export default function FileInput() {
  const uppy = useUppy(() => {
    return new Uppy().use(Tus, { endpoint: "https://tusd.tusdemo.net/files" });
  });

  // It uses uppy for file uploading. Please change the endpoint after the backend is ready. Check the uppy react documentation for further information about drag drop feature

  return (
    <DragDrop
      width="80%"
      height="50%"
      note="Files upto 2MB"
      // assuming `this.uppy` contains an Uppy instance:
      uppy={uppy}
      locale={{
        strings: {
          // Text to show on the droppable area.
          // `%{browse}` is replaced with a link that opens the system file selection dialog.
          dropHereOr: "Drop here or %{browse}",
          // Used as the label for the link that opens the system file selection dialog.
          browse: "browse",
        },
      }}
    />
  );
}
