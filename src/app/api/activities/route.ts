import type { NextApiRequest, NextApiResponse } from "next";
import {
  getAllActivities,
  addActivity,
  toggleActivity,
  deleteActivity,
} from "../../../queries";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const activities = await getAllActivities();
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch activities" });
    }
  } else if (req.method === "POST") {
    try {
      const { activity, image } = req.body;
      await addActivity(activity, image);
      res.status(201).json({ message: "Activity added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to add activity" });
    }
  } else if (req.method === "PUT") {
    try {
      const { id } = req.body;
      await toggleActivity(id);
      res.status(200).json({ message: "Activity toggled successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to toggle activity" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      await deleteActivity(id);
      res.status(200).json({ message: "Activity deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete activity" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
