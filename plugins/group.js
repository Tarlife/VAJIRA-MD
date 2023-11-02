const { command } = require("../lib/");
const Jimp = require("jimp");

command(
  {
    pattern: "fullpp",
    fromMe: true,
    desc: "Set full screen profile picture",
    type: "user",
  },
  async (message, match,m) => {
    if (!message.reply_message.image)
      return await message.reply("_Reply to a photo_");
    let media = await m.quoted.download();
    await updateProfilePicture(message.user, media, message);
    return await message.reply("_Profile Picture Updated_");
  }
);

