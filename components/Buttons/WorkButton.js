import Button from "@mui/material/Button";
import Link from "next/link";

// this button is used to redirect the user to candidate form

export default function WorkButton() {
  return (
    <Link style={{ textDecoration: "none" }} href="/refferalForm">
      <Button
        sx={{
          width: { xs: "100%", lg: "200px" },
          my: { xs: "10px", lg: 0 },
          height: "45px",
          color: "darkBlue1",
        }}
        variant="outlined"
      >
        I'm open to work
      </Button>
    </Link>
  );
}
