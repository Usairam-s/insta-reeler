"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Instagram } from "lucide-react";

const key = process.env.NEXT_PUBLIC_ACCESS_KEY;

const Footer = () => {
  const [disable, setDisable] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setDisable(true);
    const formData = new FormData(event.target);

    if (!key) {
      toast.error("Access key is missing");
      setDisable(false);
      return;
    }

    formData.append("access_key", key);

    // Show pending toast
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setDisable(false);

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Message sent successfully! 🎉");
      event.target.reset();
    } catch (error: any) {
      toast.error("Error submitting the form. Please try again. 🚨");
      console.error("Error:", error.message);
    } finally {
      toast.dismiss(toastId); // Remove loading toast
      setDisable(false);
    }
  };

  return (
    <div id="footer" className=" w-full">
      <p className="text-center text-primary pt-10 pb-4 md:text-5xl text-4xl font-semibold">
        Please give your feedback
      </p>
      <div className="max-w-6xl p-8 mx-auto flex md:justify-between md:flex-row flex-col md:gap-40 gap-6">
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
          <Input placeholder="Name" name="Name" type="text" required />
          <Input placeholder="Email" type="email" required name="Email" />
          <Textarea required placeholder="Message" name="Message" />
          <Button disabled={disable} className="w-full bg-primary">
            Send Message
          </Button>
        </form>

        {/* <div className="w-full flex flex-col gap-4">
          <h2 className="md:text-3xl text-2xl font-semibold uppercase">
            Connect with us by our
          </h2>
          <Label className="md:text-lg text-base font-medium">
            Social Channels
          </Label>
          <Instagram size={30} />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
