import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  Download,
  CreditCard,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  Plus,
  Clock,
  ArrowRight,
  FileText,
  BarChart3,
  Database,
  Check,
  Zap
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

interface PlanFeature {
  name: string
  starter: string | boolean
  professional: string | boolean
  enterprise: string | boolean
}

interface Plan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  limits: {
    apiCalls: number
    batchSize: number
    supportLevel: string
  }
  popular?: boolean
}

export const Route = createFileRoute('/dashboard/Billing')({
  component: RouteComponent
})

function RouteComponent() {
  const [currentPlan, setCurrentPlan] = useState('professional')
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [showAddPaymentDialog, setShowAddPaymentDialog] = useState(false)

  const plans: Plan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: 49,
      description: 'For individuals and small projects',
      features: [
        'Up to 10,000 API calls per month',
        'Batch processing up to 100 hashes',
        'Email support',
        '1 API key',
        'Basic analytics'
      ],
      limits: {
        apiCalls: 10000,
        batchSize: 100,
        supportLevel: 'Email'
      }
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 199,
      description: 'For growing businesses with advanced needs',
      features: [
        'Up to 100,000 API calls per month',
        'Batch processing up to 1,000 hashes',
        'Priority email support',
        '5 API keys',
        'Advanced analytics',
        'Webhook integrations',
        'Custom rate limits'
      ],
      limits: {
        apiCalls: 100000,
        batchSize: 1000,
        supportLevel: 'Priority'
      },
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 499,
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited API calls',
        'Batch processing up to 10,000 hashes',
        '24/7 dedicated support',
        'Unlimited API keys',
        'Enterprise analytics',
        'Custom integrations',
        'SLA guarantees',
        'Dedicated account manager'
      ],
      limits: {
        apiCalls: Number.POSITIVE_INFINITY,
        batchSize: 10000,
        supportLevel: 'Dedicated'
      }
    }
  ]

  const planFeatures: PlanFeature[] = [
    {
      name: 'API Calls',
      starter: '10,000/mo',
      professional: '100,000/mo',
      enterprise: 'Unlimited'
    },
    {
      name: 'Batch Size',
      starter: '100 hashes',
      professional: '1,000 hashes',
      enterprise: '10,000 hashes'
    },
    {
      name: 'API Keys',
      starter: '1',
      professional: '5',
      enterprise: 'Unlimited'
    },
    {
      name: 'Support',
      starter: 'Email',
      professional: 'Priority Email',
      enterprise: '24/7 Dedicated'
    },
    {
      name: 'Analytics',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Enterprise'
    },
    {
      name: 'Webhook Integrations',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      name: 'Custom Rate Limits',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      name: 'SLA Guarantee',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      name: 'Dedicated Account Manager',
      starter: false,
      professional: false,
      enterprise: true
    }
  ]

  const currentPlanData =
    plans.find((plan) => plan.id === currentPlan) || plans[1]

  const handleUpgradePlan = (planId: string) => {
    setSelectedPlan(planId)
    setShowUpgradeDialog(true)
  }

  const confirmPlanChange = () => {
    setCurrentPlan(selectedPlan)
    setShowUpgradeDialog(false)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Billing</h1>
          <p className="text-muted-foreground mt-1">
            Manage your subscription and payment methods
          </p>
        </div>
        <Button variant="outline" className="gap-1">
          <FileText className="h-4 w-4" />
          Billing Documentation
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Current Plan
            </CardTitle>
            <CardDescription>
              You are currently on the {currentPlanData.name} plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{currentPlanData.name}</h2>
                  {currentPlanData.popular && (
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {currentPlanData.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">
                  ${currentPlanData.price}
                </div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-indigo-600" />
                    <span className="font-medium">API Calls</span>
                  </div>
                  <span className="text-sm">
                    56,789 /{' '}
                    {currentPlanData.limits.apiCalls ===
                    Number.POSITIVE_INFINITY
                      ? 'Unlimited'
                      : currentPlanData.limits.apiCalls.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={
                    currentPlanData.limits.apiCalls === Number.POSITIVE_INFINITY
                      ? 30
                      : (56789 / currentPlanData.limits.apiCalls) * 100
                  }
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-indigo-600" />
                    <span className="font-medium">Batch Processing</span>
                  </div>
                  <span className="text-sm">
                    458 / {currentPlanData.limits.batchSize.toLocaleString()}{' '}
                    hashes
                  </span>
                </div>
                <Progress
                  value={(458 / currentPlanData.limits.batchSize) * 100}
                  className="h-2"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {currentPlanData.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  <Check className="mr-1 h-3 w-3 text-green-600" />
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button
              variant="outline"
              onClick={() =>
                handleUpgradePlan(
                  currentPlan === 'starter' ? 'professional' : 'enterprise'
                )
              }
            >
              {currentPlan === 'enterprise' ? 'Contact Sales' : 'Upgrade Plan'}
            </Button>
            <div className="text-sm text-muted-foreground">
              Next billing date:{' '}
              <span className="font-medium">May 15, 2023</span>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Usage This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$156.78</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Billing period: Apr 15 - May 14
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span>Base plan</span>
                <span>${currentPlanData.price}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Additional API calls</span>
                <span>$45.78</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Batch processing</span>
                <span>$11.00</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$156.78</span>
              </div>
            </div>

            <Button variant="outline" className="mt-4 w-full gap-1">
              <BarChart3 className="h-4 w-4" />
              View Usage Details
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Available Plans
            </CardTitle>
            <CardDescription>
              Compare plans and choose the one that fits your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    {plans.map((plan) => (
                      <TableHead key={plan.id} className="text-center">
                        <div className="flex flex-col items-center">
                          <span className="font-bold">{plan.name}</span>
                          <span className="text-muted-foreground">
                            ${plan.price}/mo
                          </span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {planFeatures.map((feature, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {feature.name}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          feature.starter
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          feature.professional
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell></TableCell>
                    {plans.map((plan) => (
                      <TableCell key={plan.id} className="text-center">
                        <Button
                          variant={
                            plan.id === currentPlan ? 'outline' : 'default'
                          }
                          disabled={plan.id === currentPlan}
                          onClick={() => handleUpgradePlan(plan.id)}
                          className="w-full"
                        >
                          {plan.id === currentPlan
                            ? 'Current Plan'
                            : plan.id === 'enterprise'
                              ? 'Contact Sales'
                              : 'Select Plan'}
                        </Button>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Payment Methods
            </CardTitle>
            <CardDescription>Manage your payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                    VISA
                  </div>
                  <div>
                    <div className="font-medium">Visa ending in 4242</div>
                    <div className="text-sm text-muted-foreground">
                      Expires 12/2025
                    </div>
                  </div>
                </div>
                <Badge>Default</Badge>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-md bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <div className="font-medium">Mastercard ending in 5678</div>
                    <div className="text-sm text-muted-foreground">
                      Expires 08/2024
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Make Default
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full mt-2 gap-1"
                onClick={() => setShowAddPaymentDialog(true)}
              >
                <Plus className="h-4 w-4" />
                Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Billing History
            </CardTitle>
            <CardDescription>View all your past invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="invoices">
              <TabsList>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>
              <TabsContent value="invoices" className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>INV-2023045</TableCell>
                      <TableCell>April 15, 2023</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <Download className="h-4 w-4" />
                          PDF
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>INV-2023044</TableCell>
                      <TableCell>March 15, 2023</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <Download className="h-4 w-4" />
                          PDF
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>INV-2023043</TableCell>
                      <TableCell>February 15, 2023</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <Download className="h-4 w-4" />
                          PDF
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>INV-2023042</TableCell>
                      <TableCell>January 15, 2023</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <Download className="h-4 w-4" />
                          PDF
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>INV-2023041</TableCell>
                      <TableCell>December 15, 2022</TableCell>
                      <TableCell>$199.00</TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <Download className="h-4 w-4" />
                          PDF
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" size="sm" className="gap-1">
                    View All Invoices
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="transactions" className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>TXN-20230415</TableCell>
                      <TableCell>April 15, 2023</TableCell>
                      <TableCell>Monthly subscription</TableCell>
                      <TableCell>$199.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TXN-20230315</TableCell>
                      <TableCell>March 15, 2023</TableCell>
                      <TableCell>Monthly subscription</TableCell>
                      <TableCell>$199.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TXN-20230215</TableCell>
                      <TableCell>February 15, 2023</TableCell>
                      <TableCell>Monthly subscription</TableCell>
                      <TableCell>$199.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TXN-20230115</TableCell>
                      <TableCell>January 15, 2023</TableCell>
                      <TableCell>Monthly subscription</TableCell>
                      <TableCell>$199.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TXN-20221215</TableCell>
                      <TableCell>December 15, 2022</TableCell>
                      <TableCell>Monthly subscription</TableCell>
                      <TableCell>$199.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" size="sm" className="gap-1">
                    View All Transactions
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Need Help?</CardTitle>
            <CardDescription>
              Contact our billing support team for assistance
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 rounded-lg border p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-medium">Billing Questions</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions about your bill, payment methods, or
                subscription? Our billing team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                Contact Billing Support
              </Button>
            </div>

            <div className="flex-1 rounded-lg border p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-medium">Enterprise Plans</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Need a custom plan for your organization? Contact our sales team
                to discuss enterprise options.
              </p>
              <Button className="w-full">Contact Sales</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Plan Change Dialog */}
      <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {selectedPlan === 'starter' ? 'Downgrade' : 'Upgrade'} to{' '}
              {plans.find((p) => p.id === selectedPlan)?.name} Plan
            </DialogTitle>
            <DialogDescription>
              {selectedPlan === 'starter'
                ? "Are you sure you want to downgrade your plan? You'll lose access to some features."
                : 'Upgrade your plan to get access to more features and higher limits.'}
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="rounded-lg border p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-medium">{currentPlanData.name} Plan</div>
                  <div className="text-sm text-muted-foreground">
                    Current plan
                  </div>
                </div>
                <div className="text-xl font-bold">
                  ${currentPlanData.price}/mo
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <div className="font-medium">
                    {plans.find((p) => p.id === selectedPlan)?.name} Plan
                  </div>
                  <div className="text-sm text-muted-foreground">New plan</div>
                </div>
                <div className="text-xl font-bold">
                  ${plans.find((p) => p.id === selectedPlan)?.price}/mo
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium">Changes in your plan:</div>
              <ul className="space-y-1">
                {selectedPlan === 'enterprise' && (
                  <>
                    <li className="flex items-center text-sm">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Unlimited API calls (was 100,000/mo)
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Batch processing up to 10,000 hashes (was 1,000)
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      24/7 dedicated support (was priority email)
                    </li>
                  </>
                )}
                {selectedPlan === 'professional' &&
                  currentPlan === 'starter' && (
                    <>
                      <li className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        100,000 API calls/mo (was 10,000/mo)
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        Batch processing up to 1,000 hashes (was 100)
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        Priority email support (was standard email)
                      </li>
                    </>
                  )}
                {selectedPlan === 'starter' && (
                  <>
                    <li className="flex items-center text-sm">
                      <AlertCircle className="mr-2 h-4 w-4 text-amber-600" />
                      10,000 API calls/mo (was 100,000/mo)
                    </li>
                    <li className="flex items-center text-sm">
                      <AlertCircle className="mr-2 h-4 w-4 text-amber-600" />
                      Batch processing limited to 100 hashes (was 1,000)
                    </li>
                    <li className="flex items-center text-sm">
                      <AlertCircle className="mr-2 h-4 w-4 text-amber-600" />
                      Standard email support (was priority email)
                    </li>
                    <li className="flex items-center text-sm">
                      <AlertCircle className="mr-2 h-4 w-4 text-amber-600" />
                      No webhook integrations or custom rate limits
                    </li>
                  </>
                )}
              </ul>
            </div>

            {selectedPlan === 'enterprise' && (
              <div className="mt-4 rounded-lg bg-gray-50 p-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Enterprise Plan Activation</h4>
                    <p className="text-sm text-muted-foreground">
                      Our sales team will contact you within 1 business day to
                      complete your upgrade to the Enterprise plan.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowUpgradeDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={confirmPlanChange}>
              {selectedPlan === 'enterprise'
                ? 'Request Upgrade'
                : selectedPlan === 'starter'
                  ? 'Downgrade Plan'
                  : 'Upgrade Plan'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Payment Method Dialog */}
      <Dialog
        open={showAddPaymentDialog}
        onOpenChange={setShowAddPaymentDialog}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>
              Add a new credit card or debit card to your account.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-name">Cardholder Name</Label>
              <Input id="card-name" placeholder="Name as it appears on card" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiration Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="billing-address">Billing Address</Label>
              <Input id="billing-address" placeholder="Street address" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal-code">Postal Code</Label>
                <Input id="postal-code" placeholder="Postal code" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="us">
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="ke">Kenya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="default-payment"
                className="rounded border-gray-300"
              />
              <Label htmlFor="default-payment">
                Make this my default payment method
              </Label>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAddPaymentDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setShowAddPaymentDialog(false)}>
              Add Payment Method
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
