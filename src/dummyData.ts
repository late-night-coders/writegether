import { Story } from "./types"
import { UmbrellaGhost, TentAtNight, LoveMeDear, CastleEscape, User1 } from "@/app/assets"
import { User } from "./types"

const users: User[] = [
  {
    _id: "adijaisdfjasdfal",
    username: "john",
    profileImage: User1
  },
  {
    _id: "k2nakfajfdasfafi",
    profileImage: User1,
    username: "jeremy",
  },
  {
    _id: "29023ijalkdjfasf",
    username: "anastasia",
    profileImage: User1
  },
  {
    _id: "293iojakdjaskd",
    username: "rocky",
    profileImage: User1
  },
  {
    _id: "289383833u3838",
    username: "victor",
    profileImage: User1
  },
  {
    _id: "23ijaoiafafafasj",
    username: "girl from infinity",
    profileImage: User1
  },
]

export const stories: Story[] = [
  {
    _id: "ijdsfiasdjfas",
    likes: 223,
    title: "The Kissing Bug",
    views: 2333,
    authorId: "iasdfjasi",
    imageUrl: UmbrellaGhost,
    participants: users,
    openingSegment: "As she looked away, she heard this whisper in her right ear, as cold as ice."
  },

  {
    _id: "nasdifwejafj",
    likes: 2233,
    title: "A night at the tent",
    views: 3898,
    authorId: "iasdfjasi",
    imageUrl: TentAtNight,
    participants: users,
    openingSegment: "John decided to spend a night outside in the tent but what he never considered what that perhaps, this wouldn't just be another ordinary night at the tent."
  },

  {
    _id: "22902i322j2j3",
    likes: 877,
    title: "Love me dear",
    views: 3898,
    authorId: "iasdfjasi",
    imageUrl: LoveMeDear,
    participants: users,
    openingSegment: "This is the first segment of the Love me dear story."
  },

]
