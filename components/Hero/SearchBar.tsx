// "use client";
// import React, { useState } from "react";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import toast from "react-hot-toast";
// import { Loader } from "lucide-react";
// import { saveAs } from "file-saver";

// const SearchBar = () => {
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Call the api route to download the video
//   const handleDownload = async () => {
//     if (!url) {
//       toast.error("Please enter a URL");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("/api/download", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ url }),
//       });

//       const data = await response.json();
//       console.log("On client side -->", data);

//       if (data.error) {
//         throw new Error(data.error);
//       }
//       // Generate a unique filename using the current timestamp
//       const timestamp = new Date().toISOString().replace(/[:.-]/g, "");
//       const filename = `instagram_reel_${timestamp}.mp4`;

//       // Trigger download using FileSaver.js
//       const fileResponse = await fetch(data.downloadUrl);
//       const blob = await fileResponse.blob();
//       saveAs(blob, filename);
//     } catch (error: any) {
//       // toast.error("Failed to download reel");
//     } finally {
//       toast.dismiss();
//       setLoading(false);
//       setUrl("");
//     }
//   };
//   return (
//     <div>
//       <div className="flex w-full flex-col items-center  gap-2 md:flex-row md:gap-2">
//         <Input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Paste your url here"
//           className="border-4 outline-none shadow-lg   text-muted-foreground border-primary rounded-none p-6"
//         />
//         <Button
//           size={"lg"}
//           className="font-semibold w-full md:w-auto p-[27px] shadow-lg  "
//           disabled={loading}
//           onClick={handleDownload}
//         >
//           {loading ? (
//             <Loader className="text-white animate-spin" />
//           ) : (
//             "Download"
//           )}
//         </Button>
//       </div>
//       <p className="text-muted-foreground my-2 text-sm">
//         By using our service you accept our{" "}
//         <span className="text-primary underline">Terms of Service</span> and{" "}
//         <span className="text-primary underline">Privacy Policy</span>
//       </p>

//       <div className="w-full flex justify-center my-10">
//         <a
//           className="text-center text-muted-foreground underline"
//           href="#howitwork"
//         >
//           How it work?
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { saveAs } from "file-saver";

const SearchBar = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) {
      toast.error("Please enter a valid Instagram Reel URL.");
      return;
    }

    setLoading(true);

    // Use toast.promise to handle loading, success, and error
    const fetchData = toast.promise(
      fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.error) throw new Error(data.error);

          // Generate a unique filename using the current timestamp
          const timestamp = new Date().toISOString().replace(/[:.-]/g, "");
          const filename = `instagram_reel_${timestamp}.mp4`;

          // Trigger download using FileSaver.js
          const fileResponse = await fetch(data.downloadUrl);
          const blob = await fileResponse.blob();
          saveAs(blob, filename);

          return "Video downloaded successfully!";
        }),
      {
        loading: "Getting your video ready...",
        success: "Video is ready to download!",
        error: (error) => {
          if (error.message === "Invalid Instagram Reel URL") {
            return "Invalid Instagram Reel URL.";
          }
          return "Failed to download reel. Please try again.";
        },
      }
    );

    try {
      await fetchData;
    } catch (error: any) {
      // Additional error handling if needed
    } finally {
      setLoading(false);
      setUrl("");
    }
  };

  return (
    <div>
      <div className="flex w-full flex-col items-center gap-2 md:flex-row md:gap-2">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your url here"
          className="border-4 outline-none shadow-lg text-muted-foreground border-primary rounded-none p-6"
        />
        <Button
          size={"lg"}
          className="font-semibold w-full md:w-auto p-[27px] shadow-lg"
          disabled={loading}
          onClick={handleDownload}
        >
          {loading ? (
            <Loader className="text-white animate-spin" />
          ) : (
            "Download"
          )}
        </Button>
      </div>
      <p className="text-muted-foreground my-2 text-sm">
        By using our service you accept our{" "}
        <span className="text-primary underline">Terms of Service</span> and{" "}
        <span className="text-primary underline">Privacy Policy</span>
      </p>

      <div className="w-full flex justify-center my-10">
        <a
          className="text-center text-muted-foreground underline"
          href="#howitwork"
        >
          How it work?
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
