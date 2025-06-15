import React from "react";
import { useRouter } from "next/router";

export default function Project() {
  return (
    <p className="text-white-950 text-2xl font-bold">
      Project: {useRouter().query.slug}
    </p>
  );
}
