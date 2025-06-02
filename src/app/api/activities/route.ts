import { NextRequest, NextResponse } from "next/server";
import {
  getAllActivities,
  addActivity,
  toggleActivity,
  deleteActivity,
} from "../../../queries";

export async function GET() {
  try {
    const activities = await getAllActivities();
    return NextResponse.json(activities);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch activities" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { activity, image } = body;
    await addActivity(activity, image);
    return NextResponse.json({ message: "Activity added successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add activity" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;
    await toggleActivity(id);
    return NextResponse.json({ message: "Activity toggled successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to toggle activity" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;
    await deleteActivity(id);
    return NextResponse.json({ message: "Activity deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete activity" }, { status: 500 });
  }
}
