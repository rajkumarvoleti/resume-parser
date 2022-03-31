import MenuBookIcon from "@mui/icons-material/MenuBook";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

// step UI

export default function Step() {
  return (
    <Box className="center" sx={{ width: "250px", p: "25px" }}>
      <Box>
        <Box
          sx={{
            border: "2px solid transparent",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            backgroundColor: "darkBlue1",
            my: "10px",
          }}
          className="center"
        >
          <MenuBookIcon sx={{ color: "white" }} />
        </Box>
        <Typography sx={{ my: "20px" }} textAlign="center">
          Step1
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          suscipit magni, quo minus rem aliquam in vel. Cum soluta voluptate,
          ullam, fuga blanditiis similique iure laudantium sed exercitationem
          eos delectus!
        </Typography>
      </Box>
    </Box>
  );
}
