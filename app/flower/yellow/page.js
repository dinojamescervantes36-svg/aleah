"use client";
import { useRouter } from "next/navigation";
import "./yellow.css";

export default function YellowFlower() {
  const router = useRouter();

  return (
    <div className="container">
      {/* Close Button */}
      <button
        className="close-btn"
        onClick={() => router.push("/home/notes")}
      >
        ✕
      </button>

      <div className="Letter">
        <h1>
          I hope I remind you of the color yellow.
          The color of sunsets and sunrises as new spring beginnings come and go.
          The color of summer sand as it courses through your sun-kissed fingers.
          The color of the autumn leaves as they crunch beneath your boots.
          The color of city lights illuminating the snowy winter streets.
          The color of clarity and of loyalty.
          I hope I remind you of the color yellow, because that's the color that reminds me of you.
          Your smile is as beautiful as a rose, and I hope you can always smile.
        </h1>
      </div>

      <div className="rose">
        <div className="flower">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>

        <div className="leaf">
          <div className="stem"></div>
          <div className="leafs"></div>
          <div className="leafs"></div>
        </div>
      </div>
    </div>
  );
}