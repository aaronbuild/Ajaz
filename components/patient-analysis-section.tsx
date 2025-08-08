"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Database } from "lucide-react"
import ImageUploader from "@/components/image-uploader"
import LabDataForm from "@/components/lab-data-form"
import PatientMetadataForm from "@/components/patient-metadata-form"

export default function PatientAnalysisSection() {
  const [activeTab, setActiveTab] = useState("image")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">New Patient Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="image" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="image" className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Skin Images
            </TabsTrigger>
            <TabsTrigger value="lab" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Lab Results
            </TabsTrigger>
            <TabsTrigger value="metadata" className="flex items-center">
              <Database className="h-4 w-4 mr-2" />
              Patient Metadata
            </TabsTrigger>
          </TabsList>

          <TabsContent value="image">
            <ImageUploader />
          </TabsContent>

          <TabsContent value="lab">
            <LabDataForm />
          </TabsContent>

          <TabsContent value="metadata">
            <PatientMetadataForm />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-6">
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
            Run Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
