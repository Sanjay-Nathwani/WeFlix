/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/db";
import { videos } from "@/db/schema";
import { serve } from "@upstash/workflow/nextjs";
import { and, eq } from "drizzle-orm";

interface InputType {
  userId: string;
  videoId: string;
  prompt: string;
}

export const { POST } = serve(async (context) => {
  // const input = context.requestPayload as InputType;
  // const { userId, videoId, prompt } = input;

  // const video = await context.run("get-video", async () => {
  //   const [existingVideo] = await db
  //     .select()
  //     .from(videos)
  //     .where(and(eq(videos.id, videoId), eq(videos.userId, userId)));

  //   if (!existingVideo) {
  //     throw new Error("Not Found");
  //   }

  //   return existingVideo;
  // });

  // const data = await context.call("generate-thumbnail", {
  //   url: "https://api.deepai.org/api/text2img",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "api-key": process.env.DEEPAI_API_KEY!,
  //   },
  //   body: JSON.stringify({
  //     text: prompt,
  //   }),
  // });

  // console.log(data);

  // await context.run("update-video", async () => {
  //   await db
  //     .update(videos)
  //     .set({
  //       title: title || video.title,
  //     })
  //     .where(and(eq(videos.id, video.id), eq(videos.userId, video.userId)));
  // });
});
