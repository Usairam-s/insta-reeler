// import { NextResponse } from "next/server";
// import { ApifyClient } from "apify-client";

// export async function POST(req: Request) {
//   const { url } = await req.json();

//   try {
//     // Validate URL
//     if (!url.includes("instagram.com/reel/")) {
//       return NextResponse.json(
//         { error: "Invalid Instagram Reel URL" },
//         { status: 400 }
//       );
//     }

//     // Initialize Apify client
//     const client = new ApifyClient({
//       token: process.env.APIFY_TOKEN,
//     });

//     // Prepare Actor input
//     const input = {
//       reelLinks: [url],
//       proxyConfiguration: {
//         useApifyProxy: true,
//       },
//       verboseLog: false,
//     };

//     // Run the Apify actor and wait for it to finish
//     const run = await client.actor("tK6UBWwvP7CwokYEK").call(input);

//     // Fetch and print Actor results from the run's dataset (if any)
//     const { items } = await client.dataset(run.defaultDatasetId).listItems();
//     console.log("Results from dataset:", items); // Log the results

//     const videoUrl = items[0]?.video_url;
//     const caption = items[0]?.caption;

//     if (!videoUrl) throw new Error("No video URL found");

//     if (!caption) throw new Error("No caption found");

//     return NextResponse.json({ downloadUrl: videoUrl, caption: caption });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Failed to download reel. Please try again." },
//       { status: 500 }
//     );
//   }
// }

// export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { ApifyClient } from "apify-client";

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    // Validate URL
    if (!url.includes("instagram.com/reel/")) {
      return NextResponse.json(
        { error: "Invalid Instagram Reel URL" },
        { status: 400 }
      );
    }

    // Initialize Apify client
    const client = new ApifyClient({
      token: process.env.APIFY_TOKEN,
    });

    // Prepare Actor input
    const input = {
      reelLinks: [url],
      proxyConfiguration: {
        useApifyProxy: true,
      },
      verboseLog: false,
    };

    // Run the Apify actor and wait for it to finish
    const run = await client.actor("tK6UBWwvP7CwokYEK").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    // console.log("Results from dataset:", items); // Log the results

    const videoUrl = items[0]?.video_url;
    const caption = items[0]?.caption;

    if (!videoUrl) throw new Error("No video URL found");

    if (!caption) throw new Error("No caption found");

    return NextResponse.json({ downloadUrl: videoUrl, caption: caption });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to download reel. Please try again." },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
