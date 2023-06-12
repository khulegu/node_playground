import PQueue from "p-queue";
import axios from "axios";

const queue = new PQueue({ concurrency: 50 });
let count = 0;
let last: Date = new Date();

const task = async (i: number) => {
  const { data } = await axios.post(
    "https://mnlawgpt.vercel.app/api/similiarity",
    {
      message: "Миний машиныг хулгайч дээрэмдэж авсан, яах хэрэгтэй вэ ?",
      sender: "User",
    }
  );
  console.log(data.resp.substring(0, 30), data.resp.split(" ").length);
  count++;

  if (count % 50 === 0) {
    console.log(`Done: ${count}, ${new Date().getTime() - last.getTime()}`);
    last = new Date();
  }
};

for (let i = 0; i < 100000; i++) {
  queue.add(() => task(i));
}
