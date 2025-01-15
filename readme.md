![alt text](https://github.com/ofolis/discord-mariokart/raw/main/images/mariokart-logo.png "Mario Kart Logo")

# discord-mariokart

A Discord bot that generates random selections for [Mario Kart 8 Deluxe](https://en.wikipedia.org/wiki/Mario_Kart_8#Mario_Kart_8_Deluxe). This is the final version of Mario Kart for the original Nintendo Switch.

Discord server members can generate random racers and tracks using the bot. All generators use a round-robin selection system that operates on per-user basis.

## Setup

### 1. Create The Discord Bot

1. Open your [Discord developer portal](https://discord.com/developers/applications).
2. Create a new application.
3. In the **General Information** section:
   1. Set **Name** to `Mario Kart` (or whatever name you want the bot to have in your server).
   2. Optionally, upload an **App Icon**.
      - Use the `mariokart-logo.png` included in this project's `images` directory if you'd like.
   3. **Save the application ID value for later.**
4. In the **Installation** section:
   1. Ensure that **Guild Install** is the only context method.
   2. Disable the install link.
5. In the **OAuth2** section:
   1. Disable **Public Client**.
6. In the **Bot** section:
   1. Set any desired aesthetic items.
   2. Reset the token and **save the value for later**.
   3. Enable privileged gateway intents:
      - **Presence Intent**
      - **Server Memebers Intent**
      - **Message Content Intent**
7. Back in the **OAuth2** section:
   1. Create a guild install OAuth2 URL with only the `bot` scope.
8. Open the generated URL and install the bot in your Discord server.

### 2. Set Up The Application

> [!NOTE]
> These step-by-step instructions are for local setup/usage. Since this is a Node.js app, you can also run the bot on a remote server, but I'm not including those specific steps in this readme.

**Option 1 - For Usage Only**

1. Download the build ZIP file in [the latest release](https://github.com/ofolis/discord-sabacc/releases/latest) for your system.
2. Extract the folder somewhere on your machine.
3. Rename the `.env.example` file to `.env`.
4. Modify the `.env` file.
   1. Replace the `?` after `DISCORD_APPLICATION_ID=` with the value noted earlier.
   2. Replace the `?` after `DISCORD_BOT_TOKEN=` with the value noted earlier.

**Option 2 - For Development & Usage**

1. Clone this repository.
2. Install the project's version of Node.js.
   1. [Install Node Version Manager.](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
   2. Run `nvm use`.
3. Run `npm install`.
4. Rename the `.env.example` file to `.env`.
5. Modify the `.env` file.
   1. Replace the `?` after `DISCORD_APPLICATION_ID=` with the value noted earlier.
   2. Replace the `?` after `DISCORD_BOT_TOKEN=` with the value noted earlier.
6. Set up VSCode (if applicable).
   1. Install required plugins:
      - **ESLint**
      - **Prettier**
   2. Install optional plugins:
      - **commitlint**
      - **Markdown All in One**
      - **npm Intellisense**
      - **Sort JSON objects**
7. Run `npm run build`.

## Usage

1. Start the application.
   - If you downloaded the build, run the executable file.
   - If you cloned the repository, run `npm start`.
2. In your Discord server channel, execute the bot's commands.
   - `/racer` - generate a random combination of character, kart, wheels, and glider (round-robin).
   - `/reset` - reset all round-robin selection pools (all options are equally likely to be generated after resetting).
   - `/track` - generate a random track (round-robin).

---

_This project uses my [Discord bot template](https://github.com/ofolis/discord-template)._
