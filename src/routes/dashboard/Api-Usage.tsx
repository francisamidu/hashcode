import { createFileRoute } from '@tanstack/react-router'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart } from '@/components/dashboard/charts/LineChart'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/dashboard/api-usage')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-2xl font-bold">API Usage</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">API Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,245,678</div>
            <div className="mt-1 flex items-center text-sm text-green-600">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>12.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">99.8%</div>
            <div className="mt-1 flex items-center text-sm text-green-600">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>0.3% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Average Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">124ms</div>
            <div className="mt-1 flex items-center text-sm text-green-600">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>15% faster than last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              API Usage Over Time
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

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              API Usage Limits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">
                      MSISDN Transformations
                    </div>
                    <div className="text-xs text-gray-500">
                      1,245,678 / 2,000,000
                    </div>
                  </div>
                  <div className="text-sm font-medium">62%</div>
                </div>
                <Progress value={62} className="h-2" />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Batch Processing</div>
                    <div className="text-xs text-gray-500">458 / 1,000</div>
                  </div>
                  <div className="text-sm font-medium">45%</div>
                </div>
                <Progress value={45} className="h-2" />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Data Export</div>
                    <div className="text-xs text-gray-500">89 / 100</div>
                  </div>
                  <div className="text-sm font-medium">89%</div>
                </div>
                <Progress value={89} className="h-2" />
              </div>

              <Button className="w-full">Upgrade Plan</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
