Writegether is a collaborative writing game where users can write a story together with some "fun" restrictions to spice up the game, such as limiting the word count or having a keyword or phrase that must be included.

### Game settings

The game can have various settings. By default, users take turns contributing a segment to a story.
* Max word count limit
* Max sentence count limit
* Enable/disable random "must" keywords - Each turn, a user is given a random keyword that must be included in the current segment.
* Enable/disable random "must" phrases - Each turn, a user is given a random phrase that must be included in the current segment.
* End datetime - The datetime at which the game should end.

### Privacy settings
1) Public/privacy - Game can be public or private. Public means anyone can contribute. Private means only those with access to your story can contribute.

## Functional Requirements (Basic)

As a user, I want to be able to:
- [ ] See a list of ongoing public/private stories
- [ ] See a list of published stories (stories that have been completed and shared to the public)
- [ ] Join a public/private story
- [ ] Create a public/private story
- [ ] Configure [settings](#game-settings) on a story
- [ ] Edit story configurations
- [ ] Delete a story created by me
- [ ] Publish a story created by me
- [ ] Kick a contributor from my story
- [ ] Edit a segment contributed by me

As an admin, I want to be able to:
- [ ] Ban a user
- [ ] Delete any stories


## Collections

### Story
* id (`string`)
* userId (`string`)
* isPrivate (`boolean`)
* title (`string`)
* timestampCreation (`timestamp`)
* settings (`JSON`)

### Segment
* storyID
* userId
* timestampCreation
