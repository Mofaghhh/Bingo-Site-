# Knowledge Base & Troubleshooting

This section covers technical information regarding the Bingo Ranked mod, quick solutions to common issues, and legal notices.

---

## 1. Mod Features & Highlights

* **Interactive 5×5 HUD:** in-game bingo board overlay with automatic progress tracking. Scale, opacity, and screen placement can be adjusted in mod settings.
* **Sound Effects & Cues:** authentic Minecraft bell chimes for UI clicks and audible audio cues whenever an opponent claims a cell.
* **Player Profile:** tracks your current rank, ELO rating, match history, and win percentage.
* **Friends & Messaging:**
  * Add friends by Minecraft username.
  * Chat privately right within the game client.
  * Send one-click invites for custom match duels.
* **Cracked Launcher Protection:** competitive queues are locked to official authenticated accounts to prevent cheat evasion via throwaway accounts.

---

## 2. Troubleshooting & Common Fixes

### The "Ready" button does not respond
1. Ensure world generation has reached 100% and chunks around spawn are loaded.
2. Wait until your opponent has finished generating their world as well.
3. If the button remains inactive for over 20 seconds, press `Tab` or restart the client.

### Game crashes on launch
1. Verify the mod loader: Bingo Ranked is developed for recent versions of **Fabric Loader**.
2. Make sure your launcher is configured to run on **Java 21** or newer.
3. Clean out `.minecraft/mods` of outdated or conflicting mods, keeping only the approved optimization whitelist (Sodium, Lithium, Fabric API).
4. Inspect `.minecraft/logs/latest.log` or files inside `.minecraft/crash-reports/` to report details to the developers.

### Matchmaking queue is taking too long
Queue duration depends on active players in your specific ELO division. If queuing exceeds 2 minutes:
* Cancel and re-enter the queue.
* Check your internet connection.
* Join the official Discord/Telegram channel to find a player for a direct lobby challenge code.

### Opponent disconnected mid-match
Do not leave the server! The game holds the session for 120 seconds:
* If the opponent rejoins, the match resumes seamlessly with all progress retained.
* If the opponent fails to return, you receive an automated technical victory and full ELO gains.

### Player avatars / skins not appearing on tournament page
All participant avatars are served directly from our site assets. If you see blank placeholders or outdated images:
* Press `Ctrl + F5` (or `Cmd + Shift + R` on macOS) to perform a hard reload and clear cached images.
* On mobile browsers, clear the site cache in browser settings or open the page in an incognito tab.

---

## 3. Legal Notice & Disclaimer

Bingo Ranked is an independent, non-commercial modification created by the Minecraft community.

* This project is not an official product of Mojang Studios or Microsoft.
* Minecraft is a registered trademark of Mojang AB.
* All copyrights, textures, game assets, and intellectual property belong to their respective owners.
