import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import {
  Copy,
  Check,
  ChevronRight,
  Terminal,
  Code,
  Zap,
  Key,
  RefreshCw,
  BookOpen,
  FileText,
  Rocket
} from 'lucide-react'

export const Route = createFileRoute('/dashboard/documentation')({
  component: RouteComponent
})

function RouteComponent() {
  const [copied, setCopied] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState('sk_test_hashcode_51NcGZKLkqFAy5jZ')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const generateNewKey = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setApiKey(
        `sk_test_hashcode_${Math.random().toString(36).substring(2, 15)}`
      )
      setIsGenerating(false)
    }, 1000)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-2xl font-bold">Documentation</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Getting Started with Hashcode API
            </CardTitle>
            <CardDescription>
              Learn how to integrate Hashcode's MSISDN hash decoding service
              into your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="quickstart">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                <TabsTrigger value="authentication">Authentication</TabsTrigger>
                <TabsTrigger value="examples">Code Examples</TabsTrigger>
              </TabsList>

              <TabsContent value="quickstart" className="space-y-6 pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Welcome to Hashcode</h3>
                  <p className="text-muted-foreground">
                    Hashcode transforms M-Pesa MSISDN hashes into clear numbers,
                    allowing you to process transactions securely while
                    maintaining compliance with data protection regulations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <Rocket className="mr-2 h-4 w-4 text-indigo-600" />
                    Step 1: Generate an API Key
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Create an API key in the dashboard to authenticate your
                    requests.
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <code className="text-sm">
                      Your API keys can be found in the sidebar under{' '}
                      <strong>API Keys</strong>.
                    </code>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <Terminal className="mr-2 h-4 w-4 text-indigo-600" />
                    Step 2: Install the SDK
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Install our SDK using npm, yarn, or pnpm.
                  </p>
                  <div className="relative rounded-md bg-zinc-950 p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                      onClick={() =>
                        handleCopy('npm install @hashcode/sdk', 'install')
                      }
                    >
                      {copied === 'install' ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                    <pre className="text-sm text-zinc-100">
                      <code>npm install @hashcode/sdk</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <Code className="mr-2 h-4 w-4 text-indigo-600" />
                    Step 3: Make Your First API Call
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Decode your first MSISDN hash with a simple API call.
                  </p>
                  <div className="relative rounded-md bg-zinc-950 p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                      onClick={() =>
                        handleCopy(
                          `import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

// Decode a single hash
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
console.log(result.msisdn); // +254712345678`,
                          'decode'
                        )
                      }
                    >
                      {copied === 'decode' ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                    <pre className="text-sm text-zinc-100">
                      <code>{`import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

// Decode a single hash
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
console.log(result.msisdn); // +254712345678`}</code>
                    </pre>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-1">
                    Read Full Documentation
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="authentication" className="space-y-6 pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Authentication</h3>
                  <p className="text-muted-foreground">
                    Hashcode uses API keys to authenticate requests. You can
                    view and manage your API keys in the dashboard.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">API Key Types</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 rounded-full bg-green-100 p-1">
                        <Key className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Production Keys</p>
                        <p className="text-sm text-muted-foreground">
                          Use these for your production environment. These keys
                          have access to real data and will incur charges.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 rounded-full bg-amber-100 p-1">
                        <Key className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Test Keys</p>
                        <p className="text-sm text-muted-foreground">
                          Use these for testing and development. These keys only
                          work with test data and don't incur charges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Authentication Examples</h4>
                  <div className="relative rounded-md bg-zinc-950 p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                      onClick={() =>
                        handleCopy(
                          `// Using API Key in HTTP Header
fetch('https://api.hashcode.dev/v1/decode', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${apiKey}'
  },
  body: JSON.stringify({
    hash: '5f4dcc3b5aa765d61d8327deb882cf99'
  })
})`,
                          'auth-http'
                        )
                      }
                    >
                      {copied === 'auth-http' ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                    <pre className="text-sm text-zinc-100">
                      <code>{`// Using API Key in HTTP Header
fetch('https://api.hashcode.dev/v1/decode', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${apiKey.substring(0, 10)}...'
  },
  body: JSON.stringify({
    hash: '5f4dcc3b5aa765d61d8327deb882cf99'
  })
})`}</code>
                    </pre>
                  </div>

                  <div className="relative rounded-md bg-zinc-950 p-4 mt-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                      onClick={() =>
                        handleCopy(
                          `// Using SDK with API Key
import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

// Now you can make authenticated requests
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');`,
                          'auth-sdk'
                        )
                      }
                    >
                      {copied === 'auth-sdk' ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </Button>
                    <pre className="text-sm text-zinc-100">
                      <code>{`// Using SDK with API Key
import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

// Now you can make authenticated requests
const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');`}</code>
                    </pre>
                  </div>
                </div>

                <div className="rounded-md border border-amber-200 bg-amber-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Key className="h-5 w-5 text-amber-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-amber-800">
                        Keep Your API Keys Secure
                      </h3>
                      <div className="mt-2 text-sm text-amber-700">
                        <p>
                          Your API keys carry many privileges, so be sure to
                          keep them secure! Do not share your API keys in
                          publicly accessible areas such as GitHub, client-side
                          code, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="examples" className="space-y-6 pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Code Examples</h3>
                  <p className="text-muted-foreground">
                    Learn how to use Hashcode API with these code examples in
                    different programming languages.
                  </p>
                </div>

                <Tabs defaultValue="javascript">
                  <TabsList className="w-full">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="php">PHP</TabsTrigger>
                    <TabsTrigger value="java">Java</TabsTrigger>
                  </TabsList>

                  <TabsContent value="javascript" className="pt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Decode a Single Hash</h4>
                        <div className="relative rounded-md bg-zinc-950 p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                            onClick={() =>
                              handleCopy(
                                `import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

async function decodeSingleHash() {
  try {
    const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
    console.log('Decoded MSISDN:', result.msisdn);
  } catch (error) {
    console.error('Error decoding hash:', error);
  }
}

decodeSingleHash();`,
                                'js-single'
                              )
                            }
                          >
                            {copied === 'js-single' ? (
                              <Check className="h-3.5 w-3.5" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </Button>
                          <pre className="text-sm text-zinc-100">
                            <code>{`import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

async function decodeSingleHash() {
  try {
    const result = await hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99');
    console.log('Decoded MSISDN:', result.msisdn);
  } catch (error) {
    console.error('Error decoding hash:', error);
  }
}

decodeSingleHash();`}</code>
                          </pre>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">
                          Batch Decode Multiple Hashes
                        </h4>
                        <div className="relative rounded-md bg-zinc-950 p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                            onClick={() =>
                              handleCopy(
                                `import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey}');

async function decodeBatchHashes() {
  try {
    const hashes = [
      '5f4dcc3b5aa765d61d8327deb882cf99',
      '7c6a180b36896a0a8c02787eeafb0e4c',
      '6cb75f652a9b52798eb6cf2201057c73'
    ];

    const results = await hashcode.decodeBatch(hashes);

    results.forEach(result => {
      console.log(\`Hash: \${result.hash} -> MSISDN: \${result.msisdn}\`);
    });
  } catch (error) {
    console.error('Error decoding hashes:', error);
  }
}

decodeBatchHashes();`,
                                'js-batch'
                              )
                            }
                          >
                            {copied === 'js-batch' ? (
                              <Check className="h-3.5 w-3.5" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </Button>
                          <pre className="text-sm text-zinc-100">
                            <code>{`import { Hashcode } from '@hashcode/sdk';

const hashcode = new Hashcode('${apiKey.substring(0, 10)}...');

async function decodeBatchHashes() {
  try {
    const hashes = [
      '5f4dcc3b5aa765d61d8327deb882cf99',
      '7c6a180b36896a0a8c02787eeafb0e4c',
      '6cb75f652a9b52798eb6cf2201057c73'
    ];

    const results = await hashcode.decodeBatch(hashes);

    results.forEach(result => {
      console.log(\`Hash: \${result.hash} -> MSISDN: \${result.msisdn}\`);
    });
  } catch (error) {
    console.error('Error decoding hashes:', error);
  }
}

decodeBatchHashes();`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="python" className="pt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Decode a Single Hash</h4>
                        <div className="relative rounded-md bg-zinc-950 p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                            onClick={() =>
                              handleCopy(
                                `from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey}')

# Decode a single hash
try:
    result = hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99')
    print(f"Decoded MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hash: {e}")`,
                                'py-single'
                              )
                            }
                          >
                            {copied === 'py-single' ? (
                              <Check className="h-3.5 w-3.5" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </Button>
                          <pre className="text-sm text-zinc-100">
                            <code>{`from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey.substring(0, 10)}...')

# Decode a single hash
try:
    result = hashcode.decode('5f4dcc3b5aa765d61d8327deb882cf99')
    print(f"Decoded MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hash: {e}")`}</code>
                          </pre>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">
                          Batch Decode Multiple Hashes
                        </h4>
                        <div className="relative rounded-md bg-zinc-950 p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                            onClick={() =>
                              handleCopy(
                                `from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey}')

# Decode multiple hashes in batch
try:
    hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ]

    results = hashcode.decode_batch(hashes)

    for result in results:
        print(f"Hash: {result['hash']} -> MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hashes: {e}")`,
                                'py-batch'
                              )
                            }
                          >
                            {copied === 'py-batch' ? (
                              <Check className="h-3.5 w-3.5" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </Button>
                          <pre className="text-sm text-zinc-100">
                            <code>{`from hashcode import Hashcode

# Initialize the client with your API key
hashcode = Hashcode('${apiKey.substring(0, 10)}...')

# Decode multiple hashes in batch
try:
    hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ]

    results = hashcode.decode_batch(hashes)

    for result in results:
        print(f"Hash: {result['hash']} -> MSISDN: {result['msisdn']}")
except Exception as e:
    print(f"Error decoding hashes: {e}")`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="php" className="pt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        Using the Hashcode PHP SDK
                      </h4>
                      <div className="relative rounded-md bg-zinc-950 p-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                          onClick={() =>
                            handleCopy(
                              `<?php
require_once 'vendor/autoload.php';

use Hashcode\\HashcodeClient;

// Initialize the client with your API key
$hashcode = new HashcodeClient('${apiKey}');

// Decode a single hash
try {
    $result = $hashcode->decode('5f4dcc3b5aa765d61d8327deb882cf99');
    echo "Decoded MSISDN: " . $result['msisdn'] . "\\n";
} catch (Exception $e) {
    echo "Error decoding hash: " . $e->getMessage() . "\\n";
}

// Decode multiple hashes in batch
try {
    $hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ];

    $results = $hashcode->decodeBatch($hashes);

    foreach ($results as $result) {
        echo "Hash: " . $result['hash'] . " -> MSISDN: " . $result['msisdn'] . "\\n";
    }
} catch (Exception $e) {
    echo "Error decoding hashes: " . $e->getMessage() . "\\n";
}`,
                              'php-example'
                            )
                          }
                        >
                          {copied === 'php-example' ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                        <pre className="text-sm text-zinc-100">
                          <code>{`<?php
require_once 'vendor/autoload.php';

use Hashcode\\HashcodeClient;

// Initialize the client with your API key
$hashcode = new HashcodeClient('${apiKey.substring(0, 10)}...');

// Decode a single hash
try {
    $result = $hashcode->decode('5f4dcc3b5aa765d61d8327deb882cf99');
    echo "Decoded MSISDN: " . $result['msisdn'] . "\\n";
} catch (Exception $e) {
    echo "Error decoding hash: " . $e->getMessage() . "\\n";
}

// Decode multiple hashes in batch
try {
    $hashes = [
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '7c6a180b36896a0a8c02787eeafb0e4c',
        '6cb75f652a9b52798eb6cf2201057c73'
    ];

    $results = $hashcode->decodeBatch($hashes);

    foreach ($results as $result) {
        echo "Hash: " . $result['hash'] . " -> MSISDN: " . $result['msisdn'] . "\\n";
    }
} catch (Exception $e) {
    echo "Error decoding hashes: " . $e->getMessage() . "\\n";
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="java" className="pt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        Using the Hashcode Java SDK
                      </h4>
                      <div className="relative rounded-md bg-zinc-950 p-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-100"
                          onClick={() =>
                            handleCopy(
                              `import dev.hashcode.HashcodeClient;
import dev.hashcode.models.DecodeResult;
import java.util.Arrays;
import java.util.List;

public class HashcodeExample {
    public static void main(String[] args) {
        // Initialize the client with your API key
        HashcodeClient hashcode = new HashcodeClient("${apiKey}");

        // Decode a single hash
        try {
            DecodeResult result = hashcode.decode("5f4dcc3b5aa765d61d8327deb882cf99");
            System.out.println("Decoded MSISDN: " + result.getMsisdn());
        } catch (Exception e) {
            System.err.println("Error decoding hash: " + e.getMessage());
        }

        // Decode multiple hashes in batch
        try {
            List<String> hashes = Arrays.asList(
                "5f4dcc3b5aa765d61d8327deb882cf99",
                "7c6a180b36896a0a8c02787eeafb0e4c",
                "6cb75f652a9b52798eb6cf2201057c73"
            );

            List<DecodeResult> results = hashcode.decodeBatch(hashes);

            for (DecodeResult result : results) {
                System.out.println("Hash: " + result.getHash() + " -> MSISDN: " + result.getMsisdn());
            }
        } catch (Exception e) {
            System.err.println("Error decoding hashes: " + e.getMessage());
        }
    }
}`,
                              'java-example'
                            )
                          }
                        >
                          {copied === 'java-example' ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                        <pre className="text-sm text-zinc-100">
                          <code>{`import dev.hashcode.HashcodeClient;
import dev.hashcode.models.DecodeResult;
import java.util.Arrays;
import java.util.List;

public class HashcodeExample {
    public static void main(String[] args) {
        // Initialize the client with your API key
        HashcodeClient hashcode = new HashcodeClient("${apiKey.substring(0, 10)}...");

        // Decode a single hash
        try {
            DecodeResult result = hashcode.decode("5f4dcc3b5aa765d61d8327deb882cf99");
            System.out.println("Decoded MSISDN: " + result.getMsisdn());
        } catch (Exception e) {
            System.err.println("Error decoding hash: " + e.getMessage());
        }

        // Decode multiple hashes in batch
        try {
            List<String> hashes = Arrays.asList(
                "5f4dcc3b5aa765d61d8327deb882cf99",
                "7c6a180b36896a0a8c02787eeafb0e4c",
                "6cb75f652a9b52798eb6cf2201057c73"
            );

            List<DecodeResult> results = hashcode.decodeBatch(hashes);

            for (DecodeResult result : results) {
                System.out.println("Hash: " + result.getHash() + " -> MSISDN: " + result.getMsisdn());
            }
        } catch (Exception e) {
            System.err.println("Error decoding hashes: " + e.getMessage());
        }
    }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">API Keys</CardTitle>
            <CardDescription>
              Manage your API keys for authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Test API Key</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1"
                  onClick={generateNewKey}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <RefreshCw className="mr-1 h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <RefreshCw className="mr-1 h-3.5 w-3.5" />
                  )}
                  Regenerate
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Input
                    value={apiKey}
                    readOnly
                    className="pr-10 font-mono text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
                    onClick={() => handleCopy(apiKey, 'api-key')}
                  >
                    {copied === 'api-key' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="rounded-md bg-muted p-3 text-sm text-muted-foreground">
                <p>This key can only be used in the test environment.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Production API Key</h3>
                <Button variant="outline" size="sm" className="h-8">
                  Request Production Key
                </Button>
              </div>

              <div className="rounded-md border border-dashed p-6 text-center">
                <Key className="mx-auto h-8 w-8 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium">No Production Key</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Contact our team to get a production API key
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <Button variant="default" className="w-full">
                View API Documentation
              </Button>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <div className="rounded-full bg-indigo-100 p-3">
            <BookOpen className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">API Reference</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore our complete API reference documentation
          </p>
          <Button variant="outline" className="mt-4">
            View API Reference
          </Button>
        </Card>

        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <div className="rounded-full bg-indigo-100 p-3">
            <FileText className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Tutorials</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Step-by-step guides to help you integrate Hashcode
          </p>
          <Button variant="outline" className="mt-4">
            View Tutorials
          </Button>
        </Card>

        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <div className="rounded-full bg-indigo-100 p-3">
            <Zap className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Sample Projects</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Download sample projects to jumpstart your integration
          </p>
          <Button variant="outline" className="mt-4">
            View Samples
          </Button>
        </Card>
      </div>
    </div>
  )
}
