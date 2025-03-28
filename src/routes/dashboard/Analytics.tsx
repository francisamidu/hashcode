import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart } from '@/components/dashboard/charts/LineChart'
import { BarChart } from '@/components/dashboard/charts/BarChart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export const Route = createFileRoute('/dashboard/analytics')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <Select defaultValue="last30days">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last7days">Last 7 days</SelectItem>
            <SelectItem value="last30days">Last 30 days</SelectItem>
            <SelectItem value="last90days">Last 90 days</SelectItem>
            <SelectItem value="lastYear">Last year</SelectItem>
            <SelectItem value="allTime">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Transaction Volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="daily">
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="pt-4">
                <LineChart />
              </TabsContent>
              <TabsContent value="weekly" className="pt-4">
                <LineChart />
              </TabsContent>
              <TabsContent value="monthly" className="pt-4">
                <LineChart />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Average Transaction Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="daily">
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="pt-4">
                <LineChart />
              </TabsContent>
              <TabsContent value="weekly" className="pt-4">
                <LineChart />
              </TabsContent>
              <TabsContent value="monthly" className="pt-4">
                <LineChart />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Transaction Status Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <BarChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Mobile Operator Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <BarChart />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
