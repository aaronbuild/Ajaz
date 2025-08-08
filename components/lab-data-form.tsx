"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LabDataForm() {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">Enter laboratory test results to enhance the multimodal analysis</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="wbc">White Blood Cell Count (K/µL)</Label>
            <Input id="wbc" placeholder="e.g., 7.5" />
          </div>

          <div>
            <Label htmlFor="rbc">Red Blood Cell Count (M/µL)</Label>
            <Input id="rbc" placeholder="e.g., 4.8" />
          </div>

          <div>
            <Label htmlFor="platelets">Platelet Count (K/µL)</Label>
            <Input id="platelets" placeholder="e.g., 250" />
          </div>

          <div>
            <Label htmlFor="hemoglobin">Hemoglobin (g/dL)</Label>
            <Input id="hemoglobin" placeholder="e.g., 14.2" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="creatinine">Creatinine (mg/dL)</Label>
            <Input id="creatinine" placeholder="e.g., 0.9" />
          </div>

          <div>
            <Label htmlFor="alt">ALT (U/L)</Label>
            <Input id="alt" placeholder="e.g., 25" />
          </div>

          <div>
            <Label htmlFor="ast">AST (U/L)</Label>
            <Input id="ast" placeholder="e.g., 22" />
          </div>

          <div>
            <Label htmlFor="ana">ANA Test</Label>
            <Select>
              <SelectTrigger id="ana">
                <SelectValue placeholder="Select result" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
                <SelectItem value="borderline">Borderline</SelectItem>
                <SelectItem value="not_tested">Not Tested</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="medications">Current Medications</Label>
        <Input id="medications" placeholder="Enter medications separated by commas" />
      </div>
    </div>
  )
}
