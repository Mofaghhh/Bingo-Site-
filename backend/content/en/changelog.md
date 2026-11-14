# Changelog

### Version 1.3.0 (Minecraft 26.3, October 26, 2026)

**Security & Accounts**

- Closed Bingo Ranked access for cracked / non-premium Minecraft clients
- Main menu login button for non-premium versions is now locked with a padlock
- Added tooltip over the lock explaining that a genuine Minecraft license is required
- Implemented account authentication via official Mojang servers
- Logging in under another player's username is no longer possible
- Full login support for Prism Launcher and Modrinth App
- Logins are now remembered and no longer require confirmation on every launch

**Custom Lobbies**

- Creation of private rooms and connection via lobby code
- The "Copy" button for the lobby code now displays a checkmark confirmation
- Participant skins, ELO ranks, and rewards are now visible directly in the waiting room
- Fixed player Ready check synchronization before match start

**Matchmaking & Matches**

- Matchmaking screen pairing opponents of equal skill rating
- Queue waiting screen with quick cancel option
- 3-2-1 countdown sequence before match launch
- Automatic match completion and victory recording upon completing any line
- Victory and defeat results screen with animated rating adjustments

**Player Profile**

- Interactive 3D character model with dynamic animations and emotes
- Model preview and customization in the settings menu
- Support for both skin types: classic and slim

**Medals & Tournaments**

- Tournament reward system: gold, silver, and bronze medals
- Medals displayed next to the player's username in profile, lobby, and leaderboard views
- Tooltips displaying tournament title and date when hovering over a medal

**Rating Graph & Stats**

- Color-coded tier markers on the graph when reaching a new rank
- Hover cards: match date, opponent, and outcome
- Personal stats: win rate percentage, wins, losses, draws, and peak rating
- Browse past match history with pagination

**Leaderboards & Search**

- Leaderboard is now split into pages for convenient browsing
- Fast player search by username with autocomplete suggestions

**Chat & Emotes**

- Added custom emoji picker menu and signature emote packs for chat and lobbies
- Direct messages now correctly show the sender's username

**External Integrations**

- Social media links in player profiles: Telegram, YouTube, Twitch, TikTok, Reddit, Instagram
- Clicking a social icon opens the player's profile directly in browser
- Rich Discord Presence: current game mode, match score, and rank tier

**Stability**

- Improved connection stability during network drops and latency spikes
- Real-time synchronization of opponent's completed objectives
- Optimized performance in menus and during matches

### Version 1.2.0 (Minecraft 26.3, September 25, 2026)

**Menu**

- Fixed the mode menu buttons darkening
- Updated the menu buttons

**Interface**

- The timer on the card no longer turns red
- The "Create lobby" icon is now a regular white map

**Other**

- Fixed the license screen

**How to update**

- Use the update button on the main screen, or download the new version from Modrinth

### Version 1.1.0 (Minecraft 26.3, September 22, 2026)

**Compatibility**

- The mod is now built for **Minecraft 26.3** (was 26.2).
- Requirements: Fabric Loader **0.19.5+**, Fabric API **0.161.0+26.3**, Java **25+**.

**Auto-update**

- While a new release is available, the Bingo menu and matchmaking are blocked: you cannot play until the mod is updated.
- The "Update available" button now updates the mod by itself: it opens the Modrinth page and downloads the new jar.
- After the update the mod jar is replaced automatically and the old jar is removed on game exit: just restart the game.

**New goals**

- 26.3 content: poplar (logs, planks, yellow leaves), straw bed, shelf mushroom.
- Explorer maps: buried treasure map, ocean monument map, woodland mansion map.

**Other**

- New mod logo.
- Updated the Fabric mod description for 26.3.
