import StorySettingsBar from "@/components/StorySettingsBar/StorySettingsBar"
import Form from "@/components/WriteForm/Form"
import { Container, Grid, Typography } from "@mui/material"

export default async function WritePage() {
  return (
    <main>
      <Grid container flexGrow={1}>
        <Grid item md={10}>
          <Container>
            <Typography variant="h3">Create a story</Typography>
            <Form />
          </Container>
        </Grid>
        <Grid item md={2}>
          <StorySettingsBar />
        </Grid>
      </Grid>
    </main>
  )
}
