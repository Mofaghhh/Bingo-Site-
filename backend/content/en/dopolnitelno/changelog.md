# Changelog

### Version 1.3.0 — Minecraft 26.3 (October 26, 2026)

**Security & Accounts**

- Closed Bingo Ranked access for cracked / non-premium Minecraft clients
- Main menu login button for non-premium versions is now locked with a padlock icon
- Added a tooltip over the lock explaining that a genuine Minecraft license is required
- Implemented strict account authentication via official Mojang auth servers
- Prevented unauthorized logins under licensed usernames from cracked launchers
- Fixed genuine account authorization on Prism Launcher and Modrinth App
- Fixed an issue where certain launchers were falsely flagged as cracked
- Session authorization is now safely remembered and no longer prompts on every launch

**Main Menu & Scaling**

- Fixed button click detection in fullscreen display mode
- Fixed UI elements and lists shifting out of alignment when changing GUI Scale
- Removed redundant empty bottom padding across all menu screens
- Replaced ambiguous error codes with clear, descriptive messages
- Updated the project license and about screens

**Custom Lobbies**

- Fixed crash when creating a new private lobby room
- Fixed connection issues when joining a lobby via room code
- The "Copy" button for the lobby code now displays a green checkmark confirmation
- Fixed switching and real-time state synchronization of player Ready checks
- Guaranteed identical world seed generation across all participants before match launch
- Player skins, ELO tiers, and tournament medals are now displayed directly in the waiting room

**Matchmaking & Matches**

- Added ranked matchmaking screen with ELO-based skill rating pairing
- Implemented queue screen with fast one-click cancellation
- Added "3-2-1" countdown sequence before match start
- Fixed the objective card timer — it no longer turns red prematurely
- Automatic match completion and instant victory recording upon completing any 5x5 line
- Post-match victory and defeat screens with animated ELO rating adjustments

**Player Profile**

- Streamlined external profile views: reduced to "Main", "Ranked", and "Matches" tabs
- Removed the add-friend button when inspecting another player's profile
- Added an interactive 3D character model with dynamic animations and emotes
- Added 3D model preview and customization in the profile settings menu
- Full support for both skin model types: Classic (4px) and Slim (3px)

**Medals & Tournaments**

- Introduced an official tournament award system: Gold, Silver, and Bronze medals
- Medals are showcased next to the player's username in profile, lobby, and leaderboard views
- Added hover tooltips displaying tournament name, date, and placement
- Implemented server-side cryptographic verification to prevent medal tampering or exploit

**Rating Graph & Stats**

- Completely rewritten ELO rating chart: smooth curve with clear seasonal dividers
- Color-coded tier milestone markers on the graph when reaching new rank divisions
- Interactive hover cards on data points: match date, opponent, and rating outcome
- Comprehensive personal statistics: win rate percentage, wins, losses, draws, and all-time peak rating
- Full-screen past match history log with pagination

**Leaderboards & Search**

- Leaderboard is now paginated for convenient browsing and reduced latency
- Instant player search by username with real-time autocompletion suggestions
- Real-time online status indicators ("Online" / "In Match") and rank badges in lists

**Chat & Emotes**

- Direct messages now correctly display the sender's actual username instead of "They"
- Added a custom emoji picker menu and signature emote packs for chat and lobbies
- Fixed mouse wheel smooth scrolling in the message view

**External Integrations**

- Added 6 social media profile links: Telegram, YouTube, Twitch, TikTok, Reddit, Instagram
- Clicking a social icon opens the player's web profile directly in the browser
- Rich Discord Presence: displays current game mode, objective progress score, and rank tier

**Stability & Networking**

- Improved network fault tolerance against packet loss and unstable connection drops
- Real-time low-latency synchronization of opponent's objective claims
- Eliminated hitching and micro-stutters in menus and high-intensity match moments

### Version 1.2.0 — Minecraft 26.3 (September 25, 2026)

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

### Version 1.1.0 — Minecraft 26.3 (September 22, 2026)

**Compatibility**

- The mod is now built for **Minecraft 26.3** (was 26.2).
- Requirements: Fabric Loader **0.19.5+**, Fabric API **0.161.0+26.3**, Java **25+**.

**Auto-update**

- While a new release is available, the Bingo menu and matchmaking are blocked: you cannot play until the mod is updated.
- The "Update available" button now updates the mod by itself: it opens the Modrinth page and downloads the new jar.
- After the update the mod jar is replaced automatically and the old jar is removed on game exit — just restart the game.

**New goals**

- 26.3 content: poplar (logs, planks, yellow leaves), straw bed, shelf mushroom.
- Explorer maps: buried treasure map, ocean monument map, woodland mansion map.

**Other**

- New mod logo.
- Updated the Fabric mod description for 26.3.
