"use client";

import { PlaceholdersAndVanishInput } from "@/ui/placeholders-and-vanish-input";
import axios from "axios";
import { useState } from "react";

export function InputDemo() {
  const [query, setQuery] = useState<string | any>();
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setQuery(e.target.value)
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response =  await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    if(response){
        console.log("success")
    }
  };
  return (
    <div className="my-[2rem] flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
