import { Button } from "@mui/material";
import Link from "next/link";

export default function HiringButton() {
  return (
    <Link href="/resumeparser">
      <Button
        sx={{
          width: { xs: "100%", lg: "200px" },
          my: { xs: "10px", lg: 0 },
          height: "45px",
        }}
        variant="contained"
        className="blueButton"
      >
        I'm Hiring
      </Button>
    </Link>
  );
}
