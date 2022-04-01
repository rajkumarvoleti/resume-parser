import Box from "@mui/material/Box";

export default function Arrow() {
  return (
    <Box>
      <div id="arrowAnim">
        <div class="arrowSliding">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay1">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay2">
          <div class="arrow"></div>
        </div>
        {/* <div class="arrowSliding delay3">
          <div class="arrow"></div>
        </div> */}
      </div>
    </Box>
  );
}
