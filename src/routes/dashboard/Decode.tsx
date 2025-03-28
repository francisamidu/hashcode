import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
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
import { Textarea } from '@/components/ui/textarea'
import {
  Search,
  Upload,
  Download,
  Copy,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from 'lucide-react'
import { DataTable } from '@/components/dashboard/DataTable'
import { decodeColumns } from '@/components/dashboard/Columns'
import { decodeHistory } from '@/shared/data'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/decode')({
  component: RouteComponent
})

function RouteComponent() {
  const [singleHash, setSingleHash] = useState('')
  const [batchHashes, setBatchHashes] = useState('')
  const [isDecoding, setIsDecoding] = useState(false)
  const [decodedResults, setDecodedResults] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState('single')

  const handleSingleDecode = () => {
    if (!singleHash) return

    setIsDecoding(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock result - in a real app, this would come from your API
      const result = {
        hash: singleHash,
        msisdn: '+254' + Math.floor(Math.random() * 900000000 + 100000000),
        timestamp: new Date(),
        status: 'Success'
      }

      setDecodedResults([result, ...decodedResults.slice(0, 4)])
      setIsDecoding(false)
    }, 800)
  }

  const handleBatchDecode = () => {
    if (!batchHashes) return

    setIsDecoding(true)

    // Split by newlines to get individual hashes
    const hashes = batchHashes.split('\n').filter((hash) => hash.trim() !== '')

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock results - in a real app, these would come from your API
      const results = hashes.map((hash) => ({
        hash: hash.trim(),
        msisdn: '+254' + Math.floor(Math.random() * 900000000 + 100000000),
        timestamp: new Date(),
        status: Math.random() > 0.1 ? 'Success' : 'Failed'
      }))

      setDecodedResults([
        ...results,
        ...decodedResults.slice(0, 5 - results.length)
      ])
      setIsDecoding(false)
    }, 1200)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-2xl font-bold">Decode MSISDN Hashes</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Hash Decoder
            </CardTitle>
            <CardDescription>
              Transform M-Pesa MSISDN hashes into clear phone numbers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="single" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="single">Single Hash</TabsTrigger>
                <TabsTrigger value="batch">Batch Processing</TabsTrigger>
              </TabsList>

              <TabsContent value="single" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label htmlFor="singleHash" className="text-sm font-medium">
                    Enter M-Pesa MSISDN Hash
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="singleHash"
                      placeholder="e.g., 5f4dcc3b5aa765d61d8327deb882cf99"
                      value={singleHash}
                      onChange={(e) => setSingleHash(e.target.value)}
                    />
                    <Button
                      onClick={handleSingleDecode}
                      disabled={!singleHash || isDecoding}
                      className="shrink-0"
                    >
                      {isDecoding && activeTab === 'single' ? (
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Decode
                    </Button>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <div className="text-sm font-medium">Tips:</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                    <li>Enter the complete hash string without any spaces</li>
                    <li>Hashes are case-sensitive</li>
                    <li>
                      Results are cached for faster lookup of previously decoded
                      hashes
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="batch" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="batchHashes"
                      className="text-sm font-medium"
                    >
                      Enter Multiple Hashes (one per line)
                    </label>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Upload className="h-3.5 w-3.5" />
                      <span className="text-xs">Upload CSV</span>
                    </Button>
                  </div>
                  <Textarea
                    id="batchHashes"
                    placeholder="e.g., 5f4dcc3b5aa765d61d8327deb882cf99&#10;7c6a180b36896a0a8c02787eeafb0e4c&#10;6cb75f652a9b52798eb6cf2201057c73"
                    className="min-h-[120px]"
                    value={batchHashes}
                    onChange={(e) => setBatchHashes(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button
                      onClick={handleBatchDecode}
                      disabled={!batchHashes || isDecoding}
                    >
                      {isDecoding && activeTab === 'batch' ? (
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Decode Batch
                    </Button>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <div className="text-sm font-medium">Batch Processing:</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                    <li>Process up to 1,000 hashes at once</li>
                    <li>Results can be exported as CSV</li>
                    <li>For larger batches, consider using our API directly</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Decode Results
            </CardTitle>
            <CardDescription>
              View your most recent decode results
            </CardDescription>
          </CardHeader>
          <CardContent>
            {decodedResults.length > 0 ? (
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hash</TableHead>
                      <TableHead>MSISDN</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {decodedResults.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-xs truncate max-w-[120px]">
                          {result.hash}
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            {result.msisdn}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 ml-1"
                            >
                              <Copy className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              result.status === 'Success'
                                ? 'default'
                                : 'destructive'
                            }
                            className="flex items-center gap-1"
                          >
                            {result.status === 'Success' ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <AlertCircle className="h-3 w-3" />
                            )}
                            {result.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Export Results
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-[200px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No Results Yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Decode a hash to see the results here
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base font-medium">
            Decode History
          </CardTitle>
          <CardDescription>View your recent decode operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search history..." className="pl-8" />
            </div>
            <Button variant="outline" size="sm" className="h-10 gap-1">
              <Download className="h-4 w-4" />
              Export History
            </Button>
          </div>

          <DataTable columns={decodeColumns} data={decodeHistory} />
        </CardContent>
      </Card>
    </div>
  )
}
