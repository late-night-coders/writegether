import TrendingBanner from "@/components/TrendingBanner/TrendingBanner"
import StoryCarousel from "@/components/StoryCarousel/StoryCarousel"
import { stories } from "@/dummyData"

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <TrendingBanner />
      <StoryCarousel stories={stories} heading="My Stories" />
    </main>
  )
}
