import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatasetStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Dataset Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">ISIC 2018 (Skin Cancer)</span>
              <span className="text-sm text-gray-500">10,015 images</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">MIDAS (Dermatology)</span>
              <span className="text-sm text-gray-500">5,842 images</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-500 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">MIMIC-III (Clinical)</span>
              <span className="text-sm text-gray-500">46,520 patients</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: "92%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">SIDER (Drug Reactions)</span>
              <span className="text-sm text-gray-500">1,430 drugs</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
