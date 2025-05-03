"use client";

export function generateRandomID(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";

  // Generate the first two random capital letters
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    id += letters.charAt(randomIndex);
  }

  // Generate the next four random numbers
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 10); // Random number between 0 and 9
    id += randomNumber.toString();
  }

  return id;
}
