"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function PatientMetadataForm() {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">Enter patient demographic and clinical history information</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" placeholder="e.g., 45" />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="non_binary">Non-binary</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="ethnicity">Ethnicity</Label>
            <Select>
              <SelectTrigger id="ethnicity">
                <SelectValue placeholder="Select ethnicity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="caucasian">Caucasian</SelectItem>
                <SelectItem value="african_american">African American</SelectItem>
                <SelectItem value="hispanic">Hispanic</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="native_american">Native American</SelectItem>
                <SelectItem value="pacific_islander">Pacific Islander</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="family_history">Family History of Skin Cancer</Label>
            <Select>
              <SelectTrigger id="family_history">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="autoimmune_history">History of Autoimmune Disorders</Label>
            <Select>
              <SelectTrigger id="autoimmune_history">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="sun_exposure">Sun Exposure Level</Label>
            <Select>
              <SelectTrigger id="sun_exposure">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="previous_reactions">Previous Adverse Drug Reactions</Label>
        <Textarea id="previous_reactions" placeholder="Describe any previous adverse drug reactions" />
      </div>

      <div className="mt-6 flex items-start space-x-2">
        <Checkbox id="consent" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="consent"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Patient has provided consent for AI analysis
          </label>
          <p className="text-sm text-gray-500">Data will be processed according to privacy regulations</p>
        </div>
      </div>
    </div>
  )
}
