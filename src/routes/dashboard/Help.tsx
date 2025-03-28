import { createFileRoute } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Search,
  FileText,
  Book,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Route = createFileRoute('/dashboard/Help')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-2xl font-bold">Help and Support</h1>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search for help articles..."
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <Card className="hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-indigo-100 p-3">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <CardTitle className="mb-2 text-base">Documentation</CardTitle>
            <CardDescription>
              Browse our detailed documentation to learn how to use Hashcode's
              features
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-indigo-100 p-3">
              <Book className="h-6 w-6 text-indigo-600" />
            </div>
            <CardTitle className="mb-2 text-base">API Reference</CardTitle>
            <CardDescription>
              Explore our API documentation with examples and code snippets
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-indigo-100 p-3">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
            </div>
            <CardTitle className="mb-2 text-base">Community Forum</CardTitle>
            <CardDescription>
              Join our community forum to ask questions and share your knowledge
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Contact Support
            </CardTitle>
            <CardDescription>
              Get in touch with our support team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email Support</TabsTrigger>
                <TabsTrigger value="phone">Phone Support</TabsTrigger>
              </TabsList>
              <TabsContent value="email" className="pt-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's your issue about?"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Describe your issue in detail..."
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>

                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Or email us directly at support@hashcode.dev</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="phone" className="pt-6">
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                    <Phone className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">
                      Call our support team
                    </h3>
                    <p className="text-gray-500">
                      Available Monday to Friday, 9am to 5pm EAT
                    </p>
                  </div>
                  <div className="text-2xl font-bold">+254 700 123 456</div>
                  <Button className="mx-auto">Request a Callback</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
