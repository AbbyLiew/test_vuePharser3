/**Convert .webm to .mp4 */
/**coi-serviceworker.js is required if "SharedArrayBuffer is not defined" error */
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });
export async function transcode(blob) {
  await ffmpeg.load();
  if (arguments[1] == "crop") {
    ffmpeg.FS("writeFile", "input.mp4", await fetchFile(blob));
    const deviceResolutionRatio = window.innerWidth / window.innerHeight;
    const effect = `crop=${1024 * deviceResolutionRatio}:1024:${1024 / 2 - (1024 * deviceResolutionRatio) / 2}:0`;
    ffmpeg.setLogger(({ message }) => console.log(message));
    await ffmpeg.run("-i", "input.mp4");
    await ffmpeg.run("-i", "input.mp4", "-vf", effect, "output.mp4");
  } else if (arguments.length === 1) {
    ffmpeg.FS("writeFile", "input.webm", await fetchFile(blob));
    await ffmpeg.run("-i", "input.webm", "-vf", "scale=ceil(iw/2)*2:ceil(ih/2)*2", "-vsync", "vfr", "output.mp4");
  }

  const data = ffmpeg.FS("readFile", "output.mp4");
  const url = URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }));
  return url;
}
