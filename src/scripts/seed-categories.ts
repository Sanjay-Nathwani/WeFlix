import { db } from "@/db";
import { categories } from "@/db/schema";

// todo: create a script to seed categories
const categoryNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News ans politics",
  "People ans blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("Seeding categories!!!");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded successfully!!!");
  } catch (error) {
    console.log("Error seeding categories:", error);
    process.exit(1);
  }
}

main();
