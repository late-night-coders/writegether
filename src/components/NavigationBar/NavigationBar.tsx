import { getServerSession } from "next-auth"
import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography
} from "@mui/material"
import Link from "next/link"
import ProfileMenu from "./ProfileMenu"

const NavigationBar = async () => {
  const session = await getServerSession(authConfig)
  return (
    <AppBar color="primary" position="relative">
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">
            <Typography
              variant="h6"
              color="secondary"
              fontWeight={700}
              sx={{
                fontSize: {
                  xs: "1rem"
                }
              }}
            >
              WRITEGETHER
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              gap: {
                xs: 1,
                sm: 4
              }
            }}
          >
            <Link href="/write">
              <Button color="inherit">WRITE</Button>
            </Link>
            <Link href="/help">
              <Button color="inherit">HELP</Button>
            </Link>
            <ProfileMenu imgSrc={session?.user?.image} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavigationBar
