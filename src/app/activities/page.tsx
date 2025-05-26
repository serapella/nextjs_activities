"use server";

import type { Activity } from "../../types";
import { getAllActivities } from "../../queries";
import { addActivityFromFormData } from "../../actions";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
// import { useActionState } from "react";

export default async function Activities() {
  const activities = await getAllActivities();

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="/api/activities" method="POST" className="space-y-4">
            <div className="flex gap-4">
              <Input
                type="text"
                name="activity"
                placeholder="Add new activity"
                required
                className="flex-1"
              />
              <Input
                type="text"
                name="image"
                placeholder="Image URL (optional)"
                className="flex-1"
              />
              <Button type="submit">Add Activity</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <Checkbox
                    checked={activity.checked}
                    // Geen onCheckedChange, want geen client code
                    className="h-6 w-6"
                    disabled
                  />
                  <span
                    className={
                      activity.checked ? "line-through text-gray-500" : ""
                    }
                  >
                    {activity.activity}
                  </span>
                  {activity.image && (
                    <img
                      src={activity.image}
                      alt={activity.activity}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    {activity.checked ? "Done" : "Not done"}
                  </span>
                  {/* Geen delete button zonder client code */}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
