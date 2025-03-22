import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FileText,
  Phone,
  CreditCard,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react'
import { LineChart } from '@/components/dashboard/charts/LineChart'
import { DonutChart } from '@/components/dashboard/charts/DonutChart'
import { StatsCard } from '@/components/dashboard/StatsCard'
import { CategoryItem } from '@/components/dashboard/CategoryItem'
import { OperatorItem } from '@/components/dashboard/OperatorItem'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-2xl font-bold">Home</h1>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Processed Transactions"
          value="560,056"
          icon={<FileText className="h-5 w-5 text-indigo-600" />}
          change={16}
          period="this week"
        />
        <StatsCard
          title="Unique MSISDNs"
          value="140,840"
          icon={<Phone className="h-5 w-5 text-orange-600" />}
          change={12.05}
          period="this week"
        />
        <StatsCard
          title="Avg. Transaction Value"
          value="KSh 2,450"
          icon={<CreditCard className="h-5 w-5 text-purple-600" />}
          change={-8.4}
          period="this week"
        />
        <StatsCard
          title="Success Rate"
          value="98.78%"
          icon={<ArrowUpRight className="h-5 w-5 text-green-600" />}
          change={2}
          period="this week"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Transactions Chart */}
        <Card className="col-span-3 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">
              Decoding Volume
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs text-gray-500"
            >
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="transactions">
              <div className="flex items-center justify-between">
                <TabsList className="h-8">
                  <TabsTrigger value="transactions" className="text-xs">
                    Transactions
                  </TabsTrigger>
                  <TabsTrigger value="apiCalls" className="text-xs">
                    API Calls
                  </TabsTrigger>
                </TabsList>
                <div className="text-sm">
                  <span className="font-medium">April 13</span>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-indigo-500 mr-2"></div>
                  <span className="text-sm">4.3K Transactions Processed</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">1.9K Unique MSISDNs</span>
                </div>
              </div>
              <TabsContent value="transactions" className="pt-3">
                <LineChart />
              </TabsContent>
              <TabsContent value="apiCalls" className="pt-3">
                <LineChart />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <Card className="col-span-3 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">
              Data Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center py-4">
              <DonutChart />
            </div>
            <div className="mt-4 space-y-4">
              <CategoryItem
                name="M-Pesa API"
                color="bg-indigo-500"
                percentage={65}
              />
              <CategoryItem
                name="CSV Imports"
                color="bg-green-500"
                percentage={25}
              />
              <CategoryItem
                name="Manual Entry"
                color="bg-yellow-500"
                percentage={10}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Mobile Operators */}
      <div className="mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">
              Top Mobile Operators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <OperatorItem name="Safaricom" value={65} />
              <OperatorItem name="Airtel" value={25} />
              <OperatorItem name="Telkom Kenya" value={8} />
              <OperatorItem name="Other Operators" value={2} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
